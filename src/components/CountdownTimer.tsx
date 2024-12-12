import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isFirstPhase, setIsFirstPhase] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const firstDeadline = new Date("2024-12-24T00:00:01");
      const secondDeadline = new Date("2024-12-26T23:59:59");
      const now = new Date();
      
      let targetDate = firstDeadline;
      if (now > firstDeadline) {
        setIsFirstPhase(false);
        targetDate = secondDeadline;
      }

      const difference = +targetDate - +now;
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

  return (
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
  );
};

export default CountdownTimer;