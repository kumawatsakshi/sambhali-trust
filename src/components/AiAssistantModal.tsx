import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, User, Loader2, HelpCircle } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt: (promptText: string) => void;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  onSelectPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Namaste! I am your Sambhali AI Assistant. How can I help you learn about Sambhali Trust, our women empowerment centers, Sheerni boarding homes, volunteering, or donating?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'How do I volunteer for 1 month in Jodhpur?',
    'What is the Sheerni Educational Project?',
    'Where goes my $50 donation?',
    'What products does Sambhali Boutique sell?',
    'Is Sambhali Trust 80G tax exempt?',
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      const data = await res.json();
      const botReply = data.reply || 'Thank you for contacting Sambhali Trust!';
      setMessages((prev) => [...prev, { role: 'assistant', text: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Namaste! Sambhali Trust operates 12 empowerment centers, Sheerni boarding homes, and Nirbhaya helpline in Jodhpur, Rajasthan. Please contact info@sambhali.org for direct assistance.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-amber-100 overflow-hidden flex flex-col h-[600px] animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-indigo-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/30 flex items-center justify-center border border-amber-400/30">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-50">Sambhali AI Assistant</h3>
              <p className="text-xs text-amber-200/80">AI Guide for Programs, Volunteering & Support</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="bg-amber-50/80 p-3 border-b border-amber-100 shrink-0 overflow-x-auto flex gap-1.5">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 bg-white hover:bg-amber-100 text-amber-900 text-[11px] font-semibold rounded-full border border-amber-200 shrink-0 transition-colors"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                m.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  m.role === 'user'
                    ? 'bg-amber-800 text-white'
                    : 'bg-gradient-to-br from-amber-600 to-orange-700 text-white'
                }`}
              >
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs ${
                  m.role === 'user'
                    ? 'bg-amber-800 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 border border-amber-100 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-amber-800 p-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sambhali AI is thinking...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-amber-100 flex gap-2 shrink-0">
          <input
            type="text"
            placeholder="Ask anything about Sambhali Trust..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="bg-amber-800 hover:bg-amber-900 disabled:opacity-50 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
