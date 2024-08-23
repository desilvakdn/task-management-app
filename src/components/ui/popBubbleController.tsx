"use client";
import React, { useEffect, useState } from "react";
import PopBubble from "./popBubble";

interface BubbleType {
  id: number;
  key: number;
}

const PopBubbleController = () => {
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  useEffect(() => {
    const createBubble = () => {
      setBubbles((prev) => [
        ...prev,
        { id: Math.random(), key: Math.round(Math.random() * 100000000) },
      ]);
    };

    const intervalId = setInterval(() => {
      if (bubbles.length < 100) {
        createBubble();
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {bubbles.map((bubble, index) => (
        <PopBubble key={bubble.key} />
      ))}
    </>
  );
};

export default PopBubbleController;
