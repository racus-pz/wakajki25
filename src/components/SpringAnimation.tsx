
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SpringAnimation = () => {
  const [flowers, setFlowers] = useState<Array<{id: number, x: number, size: number, delay: number, duration: number}>>([]);
  
  useEffect(() => {
    // Create 15 flower petals with random positions
    const newFlowers = Array(15).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random horizontal position (%)
      size: Math.random() * 20 + 10, // random size between 10-30px
      delay: Math.random() * 5, // random animation delay
      duration: Math.random() * 10 + 20, // random animation duration
    }));
    
    setFlowers(newFlowers);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{ 
            x: `${flower.x}vw`, 
            y: -100, 
            opacity: 0.7,
            rotate: 0 
          }}
          animate={{ 
            y: '100vh',
            rotate: 360,
            opacity: [0.7, 0.9, 0.7, 0.4, 0] 
          }}
          transition={{ 
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            width: flower.size,
            height: flower.size,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-2 h-2 bg-pink-300 rounded-full absolute"></div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-pink-200 w-2 h-3 rounded-full"
                style={{
                  transform: `rotate(${i * 72}deg) translateY(-4px)`,
                }}
              ></div>
            ))}
          </div>
        </motion.div>
      ))}
      
      {/* Add some floating leaves */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="absolute w-3 h-5 bg-green-300"
          style={{
            borderRadius: '100% 0 100% 0',
            left: `${Math.random() * 100}vw`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: '110vh',
            x: Math.random() > 0.5 ? '100px' : '-100px',
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SpringAnimation;
