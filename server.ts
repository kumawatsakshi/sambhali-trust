import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Sambhali Trust API', time: new Date().toISOString() });
  });

  // Gemini AI Assistant Endpoint
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message string is required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if API key is not configured
        res.json({
          reply:
            'Namaste! Welcome to Sambhali Trust. I am your Sambhali AI guide. Sambhali Trust was founded in 2007 by Govind Singh Rathore in Jodhpur, Rajasthan. We empower underprivileged women and girls through 12 empowerment centers, Sheerni boarding homes, Nirbhaya helpline, and fair-trade Sambhali Boutique. How may I assist you with donations, volunteering, or program details today?',
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are "Sambhali AI Assistant", an warm, inspiring, knowledgeable AI representative for Sambhali Trust (https://www.sambhali.org/), a renowned non-profit NGO based in Jodhpur, Rajasthan, India.
Key details about Sambhali Trust:
- Founder: Govind Singh Rathore (founded in 2007 in Jodhpur).
- Mission: Empowering marginalized women and girls in Rajasthan through literacy, vocational sewing/embroidery, higher education, legal aid, and self-defense.
- Key Programs:
  1. Primary Empowerment Centers (Jodhpur, Setrawa, Payal): Literacy, math, sewing, life skills.
  2. Sheerni Educational Boarding Homes: Free housing, tuition, meals for rural girls attending private schools.
  3. Sambhali Boutique: Fair-trade social enterprise where graduate women make block-printed textiles, tote bags, and plush camel/elephant toys.
  4. Nirbhaya Helpline (+91 98280 88880): 24/7 toll-free helpline for domestic violence survivors & legal aid.
  5. Scholarships: University, nursing & teaching grants.
  6. Rural Health & Relief: Washable sanitary kits, clean water filters in Thar desert.
- Volunteer Opportunities: 4 weeks to 1 year in Jodhpur & Setrawa (Teaching English, Sewing Design, Photography/Media, Medical/Health).
- Donations: 80G tax benefits in India, 501(c)(3) partner tax receipts in USA, UK, Europe. $25 educates a girl for 1 month, $50 buys a sewing machine, $85 sponsors a month at Sheerni boarding home.

Always maintain a respectful, welcoming, empathetic, and professional tone. Keep responses concise, well-structured, and encouraging. If asked about contact details, mention info@sambhali.org and Jodhpur HQ.`;

      const contents = [];
      if (Array.isArray(history)) {
        for (const item of history) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || 'Thank you for reaching out to Sambhali Trust!';
      res.json({ reply });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      res.status(500).json({
        reply:
          'Namaste! Sambhali Trust is located in Jodhpur, Rajasthan. You can support our cause through donations, sponsoring a girl at Sheerni Boarding Home, or volunteering with us in Jodhpur & Setrawa desert. Contact info@sambhali.org for direct assistance.',
      });
    }
  });

  // Vite Middleware in Development vs Production Static Serve
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
