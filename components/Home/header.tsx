"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Variables for circle size and colors
const CIRCLE_SIZE = 500;
const BLUE_COLOR = "rgba(0, 0, 255, 0.6)";
const PURPLE_COLOR = "rgba(156, 39, 176, 0.6)";


export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const circleOneControls = useAnimation();
  const circleTwoControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false)


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
      className="relative overflow-hidden min-h-screen  flex flex-col justify-center items-center "
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="absolute inset-0 ">
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
        <div className="flex justify-center">
        <Link href="/learn">
              <button
                className={cn("relative p-[3px] group")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 dark:border-white border-[0.01px]  border-black bg-gradient-to-r rounded-lg" />
                <div className="flex items-center px-8 py-2 rounded-[6px] text-black dark:text-white relative transition duration-200">
                  Start Learning
                  <div className="relative ml-2 w-5 h-5">
                    <svg
                      className={cn(
                        "absolute top-0 left-0 w-5 h-5 transition-all duration-300 ease-in-out",
                        isHovered ? "translate-x-1" : ""
                      )}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      className={cn(
                        "absolute top-0 left-0 w-6 h-5 transition-all duration-300 ease-in-out",
                        isHovered ? "opacity-100" : "opacity-0"
                      )}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 8H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
            </div>
      </div>
    </header>
  );
}


// "use client";

// import { motion, useAnimation } from "framer-motion";
// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { useEffect, useRef } from "react";

// // Variables for circle size and colors
// const CIRCLE_SIZE = 500;
// const BLUE_COLOR = "rgba(0, 0, 255, 0.5)";
// const PURPLE_COLOR = "rgba(128, 0, 128, 0.5)";

// export default function Header() {
//   const { theme } = useTheme();
//   const headerRef = useRef<HTMLDivElement>(null);
//   const circleOneControls = useAnimation();
//   const circleTwoControls = useAnimation();

//   // At the top with other constants
//   const ANIMATION_SPEED = {
//     movement: 20, // Base duration for position change
//     scale: 1, // Scale animation duration
//     delay: 50, // Delay between movements (ms)
//   };

//   // Update circle paths
//   const circleOnePath = [
//     { x: -70, y: -10 }, 
//     { x: 220, y: -50 }, 
//     { x: -70, y: -10 }, 
//     { x: 220, y: -50 }, 
//     { x: -70, y: -10 }, 
//   ];

//   const circleTwoPath = [
//     { x: 220, y: -50 }, 
//     { x: -70, y: -10 }, 
//     { x: 220, y: -50 }, 
//     { x: -70, y: -10 }, 
//     { x: 220, y: -50 }, 
//   ];

// useEffect(() => {
//   let pathIndex = 0;
//   let isAnimating = true;  // Flag to control animation

//   const animateCircles = async () => {
//     while (isAnimating) {
//       const firstPosition = circleOnePath[pathIndex];
//       const secondPosition = circleTwoPath[pathIndex];

//       await Promise.all([
//         circleOneControls.start({
//           x: `${firstPosition.x}%`,
//           y: `${firstPosition.y}%`,
//           scale: [1, 0.99, 1],
//           transition: {
//             duration: ANIMATION_SPEED.movement,
//             ease: "easeInOut",
//             scale: {
//               duration: ANIMATION_SPEED.scale,
//               repeat: Infinity,
//             },
//           },
//         }),
//         circleTwoControls.start({
//           x: `${secondPosition.x}%`,
//           y: `${secondPosition.y}%`,
//           scale: [1, 1.01, 1],
//           transition: {
//             duration: ANIMATION_SPEED.movement,
//             ease: "easeInOut",
//             scale: {
//               duration: ANIMATION_SPEED.scale,
//               repeat: Infinity,
//             },
//           },
//         }),
//       ]);

//       // Important: Wait for the delay before moving to next position
//       await new Promise(resolve => setTimeout(resolve, ANIMATION_SPEED.delay));
      
//       // Update pathIndex to move to next position
//       pathIndex = (pathIndex + 1) % circleOnePath.length;
//     }
//   };

//   animateCircles();

//   return () => {
//     isAnimating = false;
//     circleOneControls.stop();
//     circleTwoControls.stop();
//   };
// }, [circleOneControls, circleTwoControls]);

//   return (
//     <header
//       ref={headerRef}
//       className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black"
//     >
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         <div className="absolute inset-0 -z-10">
//           <motion.div
//             className="absolute rounded-full opacity-50 blur-3xl"
//             style={{
//               width: CIRCLE_SIZE,
//               height: CIRCLE_SIZE,
//               background: theme === "dark" ? BLUE_COLOR : BLUE_COLOR,
//               boxShadow: `0 0 40px ${BLUE_COLOR}`,
//               zIndex: -1,
//             }}
//             animate={circleOneControls}
//             initial={{ x: "2%", y: "2%" }} // Start top-left
//           />
//           <motion.div
//             className="absolute rounded-full opacity-80 dark:opacity-100 blur-3xl"
//             style={{
//               width: CIRCLE_SIZE,
//               height: CIRCLE_SIZE,
//               background: theme === "dark" ? PURPLE_COLOR : PURPLE_COLOR,
//               boxShadow: `0 0 40px ${PURPLE_COLOR}`,
//               zIndex: -1,
//             }}
//             animate={circleTwoControls}
//             initial={{ x: "100%", y: "-50%" }} // Start top-right
//           />
//         </div>
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0 }}
//           className="text-3xl sm:text-4xl lg:text-5xl text-center text-balance leading-tight mb-6"
//         >
//           Learn concepts underlying AI, ML and Mathematics from the comfort of
//           your zone!
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl text-center mb-8 max-w-3xl mx-auto"
//         >
//           Unlock the power of AI, ML, and Deep Learning with our comprehensive,
//           cutting-edge courses designed for the innovators of tomorrow.
//         </motion.p>
//         <Link href="/learn">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex justify-center"
//           >
//             <button className="px-8 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
//               Start Learning
//             </button>
//           </motion.div>
//         </Link>
//       </div>
//     </header>
//   );
// }
