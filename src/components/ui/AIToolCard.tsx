'use client';

import { motion } from 'framer-motion';

interface AIToolCardProps {
  title: string;
  description: string;
}

const AIToolCard = ({ title, description }: AIToolCardProps) => {
  return (
    <motion.div 
      className="text-center group cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }
      }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 25 }
      }}
    >

      <motion.h3 
        className="heading-md text-lg mb-4"
        whileHover={{ scale: 1.02, color: "#1e40af" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600"
        whileHover={{ color: "#374151" }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default AIToolCard;