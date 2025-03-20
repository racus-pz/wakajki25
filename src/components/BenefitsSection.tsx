
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const benefitsList = [
    "Siłownie otwarte 24/7 – trenujesz, kiedy chcesz",
    "Brak opłaty wpisowej – oszczędzasz jeszcze więcej",
    "Wybierasz jeden z 3 karnetów cyklicznch dostosowanych do Twoich potrzeb",
    "Świetna atmosfera i komfortowe warunki",
    "Darmowa woda",
    "Darmowa konsultacja z trenerem personalnym"
  ];

  const registrationUrl = "https://rmggym.pl/rejestracja-simple?utm_source=landingWiosna&utm_campaign=wiosna25&utm_content=landing";

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
            Zacznij nowy sezon pełen energii!
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Skorzystaj z naszej wyjątkowej promocji wiosennej i trenuj w RMG GYM już za 1 zł przez pierwszy miesiąc!
          </p>
          
          <div className="text-left max-w-md mx-auto mb-8">
            <p className="text-lg text-white font-semibold mb-4">Dlaczego warto?</p>
            <ul className="text-white/80 space-y-3">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-accent text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
          >
            KUPUJĘ KARNET
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
