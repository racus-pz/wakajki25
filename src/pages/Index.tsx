import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navbar from "../components/Navbar";

// Funkcja pomocnicza do pobierania wersji na podstawie daty
function getPromoContent(date: Date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1; // miesiące 0-11
  const d = date.getDate();
  // Okresy: 1 - 26.05-30.06, 2 - 01.07-31.07, 3 - 01.08-22.08
  if (
    (y === 2025 && ((m === 5 && d >= 26) || (m === 6 && d <= 30)))
  ) {
    return {
      version: 1,
      mainHeader: "Startuj z formą na lato!",
      price: "69 zł",
      priceDesc: "za cały okres wakacji",
      iconPrice: "69 zł",
      infoPrice: "Trenuj za 69 zł do końca wakacji!",
      cta: "Kupuję karnet w cenie promocyjnej",
      faqStart: "26.05",
      faqEnd: "31.08",
      faqPrice: "69 zł",
      faqStartText: "26.05 - 31.08",
    };
  } else if (
    (y === 2025 && m === 7 && d >= 1 && d <= 31)
  ) {
    return {
      version: 2,
      mainHeader: "Lato trwa, a cena spada!",
      price: "49 zł",
      priceDesc: "za całe 2 miesiące wakacji",
      iconPrice: "49 zł",
      infoPrice: "Trenuj za 49 zł do końca sierpnia!",
      cta: "Kupuję karnet w cenie promocyjnej",
      faqStart: "01.07",
      faqEnd: "31.08",
      faqPrice: "49 zł",
      faqStartText: "01.07 - 31.08",
    };
  } else if (
    (y === 2025 && m === 8 && d >= 1 && d <= 22)
  ) {
    return {
      version: 3,
      mainHeader: "Ostatnia szansa! Trenuj za",
      price: "29 zł",
      priceDesc: "do końca wakacji",
      iconPrice: "29 zł",
      infoPrice: "Trenuj za 29 zł do końca wakacji!",
      cta: "Kupuję karnet w cenie promocyjnej",
      faqStart: "01.08",
      faqEnd: "31.08",
      faqPrice: "29 zł",
      faqStartText: "01.08 - 31.08",
      extraHeader: "Wakacje się kończą, ale Twoja forma może dopiero się zacząć",
    };
  } else {
    // Domyślnie wersja 1 (można zmienić na inną logikę po zakończeniu promocji)
    return {
      version: 1,
      mainHeader: "Startuj z formą na lato!",
      price: "69 zł",
      priceDesc: "za cały okres wakacji",
      iconPrice: "69 zł",
      infoPrice: "Trenuj za 69 zł do końca wakacji!",
      cta: "Kupuję karnet w cenie promocyjnej",
      faqStart: "26.05",
      faqEnd: "31.08",
      faqPrice: "69 zł",
      faqStartText: "26.05 - 31.08",
    };
  }
}

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const [isButtonFixed, setIsButtonFixed] = useState(false);
  const [promo, setPromo] = useState(getPromoContent(new Date()));

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    const handleScroll = () => {
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsButtonFixed(heroBottom < 100);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Odśwież promo przy zmianie daty (np. po północy)
  useEffect(() => {
    const interval = setInterval(() => {
      setPromo(getPromoContent(new Date()));
    }, 60 * 1000); // co minutę
    return () => clearInterval(interval);
  }, []);

  const registrationUrl = "https://rmggym.pl/wakajki-promo";

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
            <source src="/videos/rmggym-wakacje2025.mp4" type="video/mp4" />
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
              {promo.mainHeader}
            </h1>
            <p className="text-4xl md:text-7xl font-poppins font-extrabold text-accent mb-8">
              <span className="text-6xl md:text-9xl">{promo.price}</span>
            </p>
            <p className="text-4xl md:text-7xl font-poppins font-extrabold text-accent mb-8"> {promo.priceDesc}</p>
            {promo.extraHeader && (
              <p className="text-xl md:text-2xl font-poppins font-bold text-white mb-4">{promo.extraHeader}</p>
            )}
            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 text-center w-full md:w-auto mt-6"
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
            style={{ 
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100%'
            }}
          >
            <div className="container mx-auto px-4 flex justify-center">
              <motion.a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent uppercase text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 text-center w-full md:w-auto"
              >
                Kupuję karnet wakacyjny
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Information Section */}
      <section className="bg-black py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-12">
            {promo.infoPrice}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
            <div className="flex items-center gap-4">
              <i className="fas fa-ticket-alt text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Karnety już za {promo.iconPrice}</p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-calendar-alt text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Cena regularna 109 zł od 31.08</p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-clock text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Dostęp 24h/7</p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-user-friends text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Trening wprowadzający <sup className="text-green-500">GRATIS</sup></p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-apple-alt text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Program dietetyczny <sup className="text-green-500">GRATIS</sup></p>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-tint text-accent text-3xl mt-1"></i>
              <p className="text-xl font-semibold">Woda na trening <sup className="text-green-500">GRATIS</sup></p>
            </div>
          </div>
          <p className="text-center text-lg md:text-xl text-white font-semibold">
            Nie przegap lata i tej oferty! To mogą być Twoje najlepsze wakacje z RMG GYM.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-6 text-white">
            Masz pytania?
          </h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-white">
            Sprawdź nasze FAQ lub skontaktuj się z nami bezpośrednio.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Na czym polega wakacyjna promocja w RMG GYM?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Oferujemy trzy karnety do wyboru, których ważność rozpoczyna się {promo.faqStart}. Płacisz z góry za cały okres wakacyjny ({promo.faqStartText}) już od {promo.faqPrice}, a po wakacjach obowiązuje cena karnetu, który wybierzesz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold text-left">
                Czy kupuję karnet tylko na wakacje?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Kupując wakacyjny karnet, zyskujesz supercenę na okres obowiązywania promocji ({promo.faqStartText}). Decydujesz się też na karnet, który rozpocznie się po zakończeniu wakacji.
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
