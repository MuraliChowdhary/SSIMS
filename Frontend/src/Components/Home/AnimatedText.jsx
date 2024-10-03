// AnimatedText.js
 
import { motion } from 'framer-motion';

const AnimatedText = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Start from above the viewport
      animate={{ y: 0, opacity: 1 }}     // Animate to its original position
      exit={{ y: -100, opacity: 0 }}      // Exit by going back up
      transition={{ duration: 1 }}         // Duration of the animation
      style={{
        position: 'fixed',
        top: '20%', // Adjust the position as needed
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        textAlign: 'center',
      }}
    >
      <h1>Your Global Commerce Partner, Engineered for Peak Performance</h1>
      <p>Launch your eye-catching online store with ease, attract and convert more customers than ever before.</p>
    </motion.div>
  );
};

export default AnimatedText;
