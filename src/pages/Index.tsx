import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Snowfall from 'react-snowfall';
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/CountdownTimer";
import BenefitsSection from "../components/BenefitsSection";

const Index = () => {
  const [isFirstPhase, setIsFirstPhase] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const checkPhase = () => {
      const firstDeadline = new Date("2024-12-24T23:59:59");
      const now = new Date();
      setIsFirstPhase(now <= firstDeadline);
    };

    checkPhase();
    const interval = setInterval(checkPhase, 1000);
    return () => clearInterval(interval);
  }, []);

  const registrationUrl = isFirstPhase 
    ? "https://rmggym.pl/rejestracja-simple?utm_source=landingSwieta&utm_campaign=swieta24&utm_content=landing"
    : "https://rmggym.pl/swieta-promo";

  return (
    <div className="min-h-screen bg-background dark:bg-background font-inter">
      <Snowfall 
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
        }}
      />
      
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/santa.mp4" type="video/mp4" />
            Twoja przeglądarka nie wspiera odtwarzania wideo.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-pine/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10">
              Oferta Limitowana
            </span>
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white mb-6">
              {isFirstPhase ? (
                "Odbierz Świąteczny karnet na siłownię w Super Cenie!"
              ) : (
                "Odbierz Świąteczny karnet roczny na siłownię za 39 zł miesięcznie!"
              )}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {isFirstPhase ? (
                "Odliczamy dni do wyjątkowej okazji. Przygotowaliśmy coś specjalnego, co pomoże Ci w realizacji noworocznego postanowienia i wkroczeniu w 2025 rok z nową energią."
              ) : (
                "Przygotowaliśmy coś specjalnego, co pomoże w realizacji noworocznego postanowienia i wkroczeniu w 2025 rok z nową energią. Do końca świątecznej promocji pozostało:"
              )}
            </p>

            <CountdownTimer />

            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
            >
              {isFirstPhase ? "ZAREJESTRUJ SIĘ" : "KUPUJĘ KARNET ŚWIĄTECZNY"}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <BenefitsSection isFirstPhase={isFirstPhase} />
    </div>
  );
};

export default Index;