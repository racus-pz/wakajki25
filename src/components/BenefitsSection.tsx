import { motion } from "framer-motion";

const BenefitsSection = () => {
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
            Zarejestruj się i czekaj na wiadomość od Mikołaja!
          </p>
          
          <motion.a
            href="https://rmggym.pl/rejestracja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-accent text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 mb-8"
          >
            ZAPISUJĘ SIĘ NA LISTĘ ŚW. MIKOŁAJA
          </motion.a>

          <p className="text-sm text-white/60">
            * Pssst... prezent będzie dostępny przez bardzo krótki czas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;