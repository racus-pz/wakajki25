import { motion } from "framer-motion";
import { Dumbbell, Gift, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Profesjonalny Sprzęt",
      description: "Najnowocześniejsze wyposażenie dla Twojej drogi do fitnessu",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Specjalny Bonus",
      description: "Zapisz się przed Świętami i otrzymaj 2 miesiące gratis",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Trening Personalny",
      description: "Sesje 1-na-1 z certyfikowanymi trenerami",
    },
  ];

  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-white/10"
            >
              <div className="w-12 h-12 mb-4 text-accent flex items-center justify-center bg-accent/10">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-poppins font-extrabold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;