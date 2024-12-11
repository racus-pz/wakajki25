import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-white mb-6">
            Świąteczna Promocja w RMG GYM
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Nie przegap wyjątkowej okazji! Dołącz do naszej świątecznej społeczności
            i rozpocznij swoją przygodę z fitness jeszcze przed Nowym Rokiem.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90 mb-8"
          >
            ZAPISUJĘ SIĘ NA LISTĘ ŚW. MIKOŁAJA
          </motion.button>

          <p className="text-sm text-white/60">
            * Oferta ważna do wyczerpania miejsc. Liczba karnetów w promocji jest ograniczona.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;