import { motion } from "framer-motion";

interface BenefitsSectionProps {
  isFirstPhase: boolean;
}

const BenefitsSection = ({ isFirstPhase }: BenefitsSectionProps) => {
  const benefitsList = [
    "darmowa konsultacja z trenerem",
    "dostęp do siłowni 24/7",
    "darmowa woda",
    "cena 39 zł miesięcznie przez rok",
    "plan dietetyczny"
  ];

  const registrationUrl = isFirstPhase 
    ? "https://rmggym.pl/rejestracja-simple?utm_source=landingSwieta&utm_campaign=swieta24&utm_content=landing"
    : "https://rmggym.pl/swieta-promo";

  return (
    <section className="py-40 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-poppins font-extrabold text-white mb-6">
            Co musisz zrobić, aby uzyskać dostęp do świątecznego karnetu?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {isFirstPhase ? "Zarejestruj się i czekaj na wiadomość od Mikołaja!" : "Kliknij w przycisk poniżej!"}
          </p>
          
          <motion.a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-accent text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 mb-8"
          >
            {isFirstPhase ? "ZAPISUJĘ SIĘ NA LISTĘ ŚW. MIKOŁAJA" : "KUPUJĘ KARNET W PROMOCYJNEJ CENIE"}
          </motion.a>

          <p className="text-sm text-white/60 mb-4">
            {isFirstPhase ? "* Pssst... prezent będzie dostępny przez bardzo krótki czas." : "Co otrzymujesz w karnecie świątecznym?"}
          </p>

          {!isFirstPhase && (
            <ul className="text-sm text-white/60 list-disc list-inside text-left max-w-md mx-auto">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="mb-2">{benefit}</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;