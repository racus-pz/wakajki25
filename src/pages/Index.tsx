import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Gift, Dumbbell, Sparkles } from "lucide-react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Add dark mode class to html element
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
      title: "Premium Equipment",
      description: "State-of-the-art facilities for your fitness journey",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Special Bonus",
      description: "Sign up before Christmas and get 2 months free",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Personal Training",
      description: "1-on-1 sessions with certified trainers",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background font-inter">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://cdn.gpteng.co/videos/gym-dark.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-pine/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-festive bg-festive/10 rounded-full">
              Limited Time Offer
            </span>
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white mb-6">
              Transform Your Life This
              <span className="text-festive"> Holiday Season</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join before Christmas and unlock exclusive membership benefits that will kickstart your fitness journey.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-md bg-white/10 dark:bg-black/20 p-4 rounded-xl border border-white/20 shadow-xl"
                >
                  <div className="text-4xl font-poppins font-extrabold text-white mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-white/70 capitalize">{key}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-festive text-white rounded-full font-poppins font-extrabold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-festive/90"
            >
              Sign Up Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-white/10"
              >
                <div className="w-12 h-12 mb-4 text-festive flex items-center justify-center bg-festive/10 rounded-xl">
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