
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navbar from "../components/Navbar";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Dodajemy FontAwesome
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/5147a46e47.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isButtonFixed, setIsButtonFixed] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    const handleScroll = () => {
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsButtonFixed(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const registrationUrl = "https://rmggym.pl/legnica-dni-otwarte";

  return (
    <div className="min-h-screen bg-background dark:bg-background font-inter">
      <Navbar />

      {/* Hero Section */}
      <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white mb-6">
              Startuj z formą na lato!
            </h1>
            <p className="text-4xl md:text-7xl font-poppins font-extrabold text-accent mb-8">
              <span className="text-6xl md:text-9xl">69 zł</span> za cały okres wakacji!
            </p>

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

      {/* Fixed Button */}
      <AnimatePresence>
        {isButtonFixed && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 w-full bg-black/80 py-3 z-50"
          >
            <div className="container mx-auto px-4 flex justify-center">
              <motion.a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
              >
                Kupuję karnet w promocyjnej cenie
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Information Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-12">
            Trenuj za <span className="text-accent">69 zł</span> do końca wakacji!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
            <div className="flex items-start gap-4">
              <i className="fas fa-ticket-alt text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Karnety już za 69 zł</p>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-calendar-alt text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Cena regularna 109 zł od 31.08</p>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-clock text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Dostęp 24h/7</p>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-user-friends text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Trening wprowadzający GRATIS</p>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-apple-alt text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Program dietetyczny GRATIS</p>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-tint text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Woda na trening GRATIS</p>
            </div>
          </div>

          <div className="text-center">
            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
            >
              Kup karnet za 69 zł
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-6">
            Masz pytania?
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Sprawdź nasze FAQ lub skontaktuj się z nami bezpośrednio.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Na czym polega wakacyjna promocja w RMG GYM?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Oferujemy trzy karnety do wyboru, których ważność rozpoczyna się 26.05. Płacisz z góry za cały okres wakacyjny (26.05 - 31.08) już od 69 zł, a po wakacjach obowiązuje cena karnetu, który wybierzesz.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy kupuję karnet tylko na wakacje?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Kupując wakacyjny karnet, zyskujesz supercenę na okres obowiązywania promocji (26.05 - 31.08). Decydujesz się też na karnet, który rozpocznie się po zakończeniu wakacji.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Jakie karnety w ramach wakacyjnej promocji mogę wybrać?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Do wyboru masz karnet na 12 miesięcy lub na czas nieokreślony z subskrypcją. Szczegóły znajdziesz po kliknięciu "Kupuję wakacyjny karnet".
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy mogę trenować na siłowni RMG GYM jeśli nie jestem pełnoletni?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                <p>Jasne! Do RMG GYM mogą uczęszczać osoby, które mają ukończone 13 lat.</p>
                <p className="mt-2">Pamiętaj, aby dostarczyć pisemną zgodę rodzica/opiekuna prawnego w formie skanu lub zdjęć na adres bok@rmggym.pl. Wzór zgody do druku znajdziesz tutaj: <a href="https://rmggym.pl/Zgoda_pelnoletnosc.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">Zgoda</a></p>
                <p className="mt-2 font-semibold">Uwaga: W przypadku braku zgody, konto może zostać tymczasowo zablokowane.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
