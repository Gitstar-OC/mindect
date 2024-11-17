"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

// Variables for circle size and colors
const CIRCLE_SIZE = 500;
const BLUE_COLOR = "rgba(0, 0, 255, 0.5)";
const PURPLE_COLOR = "rgba(128, 0, 128, 0.5)";

export default function Header() {
  const { theme } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  const circleOneControls = useAnimation();
  const circleTwoControls = useAnimation();

  // At the top with other constants
  const ANIMATION_SPEED = {
    movement: 20, // Base duration for position change
    scale: 1, // Scale animation duration
    delay: 50, // Delay between movements (ms)
  };

  // Update circle paths
  const circleOnePath = [
    { x: -70, y: -10 }, 
    { x: 220, y: -50 }, 
    { x: -70, y: -10 }, 
    { x: 220, y: -50 }, 
    { x: -70, y: -10 }, 
  ];

  const circleTwoPath = [
    { x: 220, y: -50 }, 
    { x: -70, y: -10 }, 
    { x: 220, y: -50 }, 
    { x: -70, y: -10 }, 
    { x: 220, y: -50 }, 
  ];

useEffect(() => {
  let pathIndex = 0;
  let isAnimating = true;  // Flag to control animation

  const animateCircles = async () => {
    while (isAnimating) {
      const firstPosition = circleOnePath[pathIndex];
      const secondPosition = circleTwoPath[pathIndex];

      await Promise.all([
        circleOneControls.start({
          x: `${firstPosition.x}%`,
          y: `${firstPosition.y}%`,
          scale: [1, 0.99, 1],
          transition: {
            duration: ANIMATION_SPEED.movement,
            ease: "easeInOut",
            scale: {
              duration: ANIMATION_SPEED.scale,
              repeat: Infinity,
            },
          },
        }),
        circleTwoControls.start({
          x: `${secondPosition.x}%`,
          y: `${secondPosition.y}%`,
          scale: [1, 1.01, 1],
          transition: {
            duration: ANIMATION_SPEED.movement,
            ease: "easeInOut",
            scale: {
              duration: ANIMATION_SPEED.scale,
              repeat: Infinity,
            },
          },
        }),
      ]);

      // Important: Wait for the delay before moving to next position
      await new Promise(resolve => setTimeout(resolve, ANIMATION_SPEED.delay));
      
      // Update pathIndex to move to next position
      pathIndex = (pathIndex + 1) % circleOnePath.length;
    }
  };

  animateCircles();

  return () => {
    isAnimating = false;
    circleOneControls.stop();
    circleTwoControls.stop();
  };
}, [circleOneControls, circleTwoControls]);

  return (
    <header
      ref={headerRef}
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute rounded-full opacity-50 blur-3xl"
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              background: theme === "dark" ? BLUE_COLOR : BLUE_COLOR,
              boxShadow: `0 0 40px ${BLUE_COLOR}`,
              zIndex: -1,
            }}
            animate={circleOneControls}
            initial={{ x: "2%", y: "2%" }} // Start top-left
          />
          <motion.div
            className="absolute rounded-full opacity-80 dark:opacity-100 blur-3xl"
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              background: theme === "dark" ? PURPLE_COLOR : PURPLE_COLOR,
              boxShadow: `0 0 40px ${PURPLE_COLOR}`,
              zIndex: -1,
            }}
            animate={circleTwoControls}
            initial={{ x: "100%", y: "-50%" }} // Start top-right
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl text-center text-balance leading-tight mb-6"
        >
          Learn concepts underlying AI, ML and Mathematics from the comfort of
          your zone!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center mb-8 max-w-3xl mx-auto"
        >
          Unlock the power of AI, ML, and Deep Learning with our comprehensive,
          cutting-edge courses designed for the innovators of tomorrow.
        </motion.p>
        <Link href="/learn">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <button className="px-8 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              Start Learning
            </button>
          </motion.div>
        </Link>
      </div>
    </header>
  );
}
