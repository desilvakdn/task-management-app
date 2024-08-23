"use client";
import React, { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PopBubble = () => {
  const [isVisible, setIsVisible] = useState(true);

  const bubbleStyle = useMemo(() => {
    return {
      width: `${Math.round(Math.random() * 10)}px`,
      top: `${Math.round(Math.random() * 1080)}px`,
      left: `${Math.round(Math.random() * 1920)}px`,
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{
            scale: 3,
            opacity: 0,
            top: parseInt(bubbleStyle.top.replace("px", "")) + 150,
            left: parseInt(bubbleStyle.left.replace("px", "")),
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            delay: Math.random() * 0.2,
          }}
          style={bubbleStyle}
          className="fixed z-[2] aspect-square rounded-full bg-dark-100"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopBubble;
