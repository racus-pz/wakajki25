import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Gift, Dumbbell, Sparkles, LogIn, Facebook } from "lucide-react";
import Snowfall from 'react-snowfall';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const calculateTimeLeft = () => {
      const difference = +new Date("2024-12-25") - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-poppins font-bold text-white">
                RMG GYM
              </a>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://rmggym.pl/logowanie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-accent transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Logowanie</span>
              </a>
              <a 
                href="https://www.facebook.com/RMGgym" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://cdn.gpteng.co/videos/gym-dark.mp4" type="video/mp4" />
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
              Zmień Swoje Życie w Te
              <span className="text-accent"> Święta</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Dołącz przed Świętami i odblokuj ekskluzywne korzyści członkowskie, które rozpoczną Twoją drogę do fitnessu.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-md bg-white/10 dark:bg-black/20 p-4 border border-white/20 shadow-xl"
                >
                  <div className="text-4xl font-poppins font-extrabold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-white/70 capitalize">
                    {key === 'days' ? 'dni' : 
                     key === 'hours' ? 'godzin' : 
                     key === 'minutes' ? 'minut' : 
                     'sekund'}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-black font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-accent/90"
            >
              Zapisz się teraz
            </motion.button>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;