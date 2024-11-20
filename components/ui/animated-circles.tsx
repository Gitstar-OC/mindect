"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Variables for circle size and colors
const CIRCLE_SIZE = 500;
const BLUE_COLOR = "rgba(0, 0, 255, 0.6)";
const PURPLE_COLOR = "rgba(156, 39, 176, 0.6)";

// Animation speed settings
const ANIMATION_SPEED = {
  movement: 20,    // Faster movement duration
  scale: 0.4,      // Quick scale effect
  delay: 10      // Delay between position changes
};

// Circle paths
const circleOnePath = [
  { x: -70, y: -10 },   // Bottom-middle-left
];

const circleTwoPath = [
  { x: 220, y: -50 },   // Top-middle-right
];

export default function AnimatedCircles() {
  const circleOneControls = useAnimation();
  const circleTwoControls = useAnimation();

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
    <div className="absolute inset-0 -z-10">
      <motion.div 
        className="absolute rounded-full opacity-60 dark:opacity-40 blur-3xl"
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          background: BLUE_COLOR,
          boxShadow: `0 0 40px ${BLUE_COLOR}`,
          zIndex: -1,
        }}
        animate={circleOneControls}
        initial={{ x: "2%", y: "2%" }} // Start top-left
      />
      <motion.div
        className="absolute rounded-full opacity-80 blur-3xl"
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          background: PURPLE_COLOR,
          boxShadow: `0 0 40px ${PURPLE_COLOR}`,
          zIndex: -1,
        }}
        animate={circleTwoControls}
        initial={{ x: "100%", y: "-50%" }} // Start top-right
      />
    </div>
  );
}