// components/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      const text = target.getAttribute("data-cursor-text");
      if (text) setCursorText(text);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", moveCursor);

    // Add cursor interactions to elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
            backgroundColor: isHovering ? "#00ffff" : "#ffffff",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          className="w-full h-full bg-white rounded-full"
        />
      </motion.div>

      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 bg-black text-white px-3 py-1 rounded-full text-sm font-medium"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
}
