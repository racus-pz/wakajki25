
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const registrationUrl = "https://rmggym.pl/slupsk-urodziny";

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
            <source src="/videos/rmggym-drzwi-otwarte.mp4" type="video/mp4" />
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
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white mb-6">
              Dzień Otwarty w RMG GYM!<br />Przyjdź i przetestuj za darmo!
            </h1>

            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
            >
              Kupuję karnet w promocyjnej cenie
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-40 px-4">
        <div className="container mx-auto">
          <p className="text-xl md:text-2xl text-center mb-12 max-w-4xl mx-auto">
            To idealna okazja, aby poznać naszą siłownię, skorzystać z darmowej konsultacji trenerskiej i wziąć udział w konkurencjach z nagrodami! Niezależnie od Twojego poziomu zaawansowania – u nas znajdziesz wszystko, czego potrzebujesz do treningu!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Co czeka na Ciebie tego dnia?</h3>
              <ul className="space-y-4 text-lg font-semibold">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  Darmowy wstęp – przetestuj siłownię bez żadnych opłat!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  Konsultacja z trenerem personalnym – dowiedz się, jak efektywnie trenować!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  Konkurencje z nagrodami – sprawdź się i zgarnij bonusy!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✔️</span>
                  Wyjątkowa promocja na karnet – pierwszy miesiąc za jedyne 1 ZŁ!
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-6">Co zyskujesz w ramach karnetu?</h4>
              <ul className="space-y-4 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Darmowa woda – zadbaj o odpowiednie nawodnienie podczas treningu!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Dostęp 24/7 – trenuj wtedy, kiedy Ci pasuje!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Darmowa konsultacja z trenerem – zaplanuj swój trening z ekspertem!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Plan dietetyczny – wspomóż swoje cele odpowiednim odżywianiem!
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-xl font-semibold">
              Zapisz się i zyskaj dostęp do pełnej oferty siłowni w promocyjnej cenie!
            </p>
            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
            >
              Kup karnet za 1zł za pierwszy miesiąc
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

