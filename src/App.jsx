import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-800 text-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;