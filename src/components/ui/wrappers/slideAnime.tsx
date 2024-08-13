import React from "react";
import { motion } from "framer-motion";

const LeftSlideAnime = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ top: -10, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{ delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
};

export default LeftSlideAnime;
