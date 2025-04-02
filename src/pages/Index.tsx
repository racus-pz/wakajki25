
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BenefitsSection from "../components/BenefitsSection";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const registrationUrl = "https://rmggym.pl/wiosna-promo";

  return (
    <div className="min-h-screen bg-background dark:bg-background font-inter">
      
      
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
            <source src="/videos/rmggym-birthday.mp4" type="video/mp4" />
            Twoja przeglądarka nie wspiera odtwarzania wideo.
          </video>
          <div className="absolute inset-0 bg-black/70" />
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
              Oferta ważna tylko przez 2 tygodnie
            </span>
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white mb-6">
              Świętuj z nami<br />3 urodziny RMG GYM Słupsk!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Zgarnij karnet nawet za 1 zł za pierwszy miesiąc.
            </p>

            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
            >
              Kupuję karnet w promocji
            </motion.a>
          </motion.div>
        </div>
      </section>

      <BenefitsSection />
    </div>
  );
};

export default Index;
