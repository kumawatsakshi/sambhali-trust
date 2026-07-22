import React, { useState } from 'react';
import { CurrencyConfig } from './types';
import { CURRENCY_MAP } from './data/sambhaliData';

// Core Navigation Header & Footer
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages strictly aligned with Sambhali Trust Screenshots
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

// Donation Overlay Modal
import { DonationWizard } from './components/DonationWizard';
import { Toast } from './components/Toast';

export default function App() {
  // Navigation State ('home', 'about', 'work', 'get-involved', 'blog', 'contact')
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Modals & Feedback
  const [donateWizardOpen, setDonateWizardOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  const activeCurrencyConfig: CurrencyConfig = CURRENCY_MAP[selectedCurrency] || CURRENCY_MAP.USD;

  const handleOpenDonate = () => {
    setDonateWizardOpen(true);
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenDonate={handleOpenDonate}
          />
        );
      case 'work':
        return (
          <OurWorkPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenDonate={handleOpenDonate}
          />
        );
      case 'get-involved':
        return (
          <GetInvolvedPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenDonate={handleOpenDonate}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onOpenDonate={handleOpenDonate}
            onNavigate={(page) => setCurrentPage(page)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenDonate={handleOpenDonate}
            onOpenAi={() => {}}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenDonate={handleOpenDonate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Header aligned strictly with Sambhali Trust Navbar */}
      <Header
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenDonate={handleOpenDonate}
        currency={activeCurrencyConfig}
        onChangeCurrency={(code) => {
          setSelectedCurrency(code);
          setToastMessage(`Currency updated to ${code}`);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Footer strictly aligned with Sambhali Trust Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenDonate={handleOpenDonate}
      />

      {/* Donation Wizard */}
      <DonationWizard
        isOpen={donateWizardOpen}
        onClose={() => setDonateWizardOpen(false)}
        currency={activeCurrencyConfig}
        preselectedUsd={50}
        onSuccessDonation={(formatted, alloc) => {
          setToastMessage(`Thank you! Your donation of ${formatted} to "${alloc}" is deeply appreciated.`);
        }}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
