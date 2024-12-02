"use client"

import { useState, useEffect, useCallback } from "react"
import { Brain, Cpu, Book, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const TIMER_DURATION = 7 // seconds

const cards = [
  {
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: "Artificial Intelligence",
    description: "Explore the fundamentals and advanced concepts of AI, from machine learning algorithms to neural networks.",
    image: "/CTA/Image1.png",
    features: ["Neural Networks", "Expert Systems", "Natural Language Processing"],
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: "Machine Learning",
    description: "Master the art of creating algorithms that learn from data, make predictions, and improve over time.",
    image: "/CTA/Image2.png",
    features: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
  },
  {
    icon: <Book className="w-8 h-8 text-green-500" />,
    title: "Deep Learning",
    description: "Dive into the world of artificial neural networks and their applications in computer vision, natural language processing, and more.",
    image: "/CTA/Image3.png",
    features: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Generative Adversarial Networks"],
  },
]

export default function CTA() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [key, setKey] = useState(0)

  const changeActiveCard = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length)
    setKey((prevKey) => prevKey + 1)
  }, [])

  useEffect(() => {
    const timer = setInterval(changeActiveCard, TIMER_DURATION * 1000)
    return () => clearInterval(timer)
  }, [changeActiveCard])

  const handleCardClick = (index) => {
    setActiveIndex(index)
    setKey((prevKey) => prevKey + 1)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-gray-900 dark:text-white">
          Lead the way with Mindect
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-0">
            {cards.map((card, index) => (
              <AnimatedCard
                key={`${index}-${key}`}
                icon={card.icon}
                title={card.title}
                description={card.description}
                features={card.features}
                isActive={index === activeIndex}
                onClick={() => handleCardClick(index)}
                duration={TIMER_DURATION}
              />
            ))}
          </div>
          <motion.div 
            className="relative aspect-square md:-mt-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedCard({ icon, title, description, features, isActive, onClick, duration }) {
  return (
    <motion.div 
      className={`p-4 flex items-start space-x-2 cursor-pointer relative overflow-hidden
        ${isActive ? 'border-l-0' : 'border-l-0'}
        transition-all duration-300`}
      onClick={onClick}
      initial={false}
      animate={{
        height: isActive ? 'auto' : '60px',
        opacity: isActive ? 1 : 0.6
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {isActive ? (
        <div 
          className="absolute top-0 left-0 w-1 bg-blue-500"
          style={{
            height: '0%',
            animation: `growBorder ${duration}s linear`,
          }}
        /> 
      ) : (
        <div 
          className="absolute top-0 left-[1px] w-[2px] bg-gray-200 dark:bg-gray-500/50"
          style={{
            height: '100%',
          }}
        />
      )}
      <div className="flex-grow">
        <h3 className={`font-semibold text-lg mb-2 text-gray-900 dark:text-white transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}>{title}</h3>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        @keyframes growBorder {
          0% {
            height: 0%;
          }
          100% {
            height: 100%;
          }
        }
      `}</style>
    </motion.div>
  )
}

// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { Brain, Cpu, Book, ArrowRight } from 'lucide-react';
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";

// const TIMER_DURATION = 7; // seconds

// const cards = [
//   {
//     icon: <Brain className="w-8 h-8 text-blue-500" />,
//     title: "Artificial Intelligence",
//     description: "Explore the fundamentals and advanced concepts of AI, from machine learning algorithms to neural networks.",
//     image: {
//       light: "/CTA/Light/Image1.svg",
//       dark: "/CTA/Dark/Image1.svg",
//     },
//     features: ["Neural Networks", "Expert Systems", "Natural Language Processing"],
//   },
//   {
//     icon: <Cpu className="w-8 h-8 text-purple-500" />,
//     title: "Machine Learning",
//     description: "Master the art of creating algorithms that learn from data, make predictions, and improve over time.",
//     image: {
//       light: "/CTA/Light/Image2.svg",
//       dark: "/CTA/Dark/Image2.svg",
//     },
//     features: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
//   },
//   {
//     icon: <Book className="w-8 h-8 text-green-500" />,
//     title: "Deep Learning",
//     description: "Dive into the world of artificial neural networks and their applications in computer vision, natural language processing, and more.",
//     image: {
//       light: "/CTA/Light/Image3.svg",
//       dark: "/CTA/Dark/Image3.svg",
//     },
//     features: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Generative Adversarial Networks"],
//   },
// ];

// export default function CTA() {
//   const { theme } = useTheme();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [key, setKey] = useState(0);

//   const changeActiveCard = useCallback(() => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     setKey((prevKey) => prevKey + 1);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(changeActiveCard, TIMER_DURATION * 1000);
//     return () => clearInterval(timer);
//   }, [changeActiveCard]);

//   const handleCardClick = (index) => {
//     setActiveIndex(index);
//     setKey((prevKey) => prevKey + 1);
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-gray-900 dark:text-white">
//           Lead the way with Mindect
//         </h2>
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <div className="space-y-0">
//             {cards.map((card, index) => (
//               <AnimatedCard
//                 key={`${index}-${key}`}
//                 icon={card.icon}
//                 title={card.title}
//                 description={card.description}
//                 features={card.features}
//                 isActive={index === activeIndex}
//                 onClick={() => handleCardClick(index)}
//                 duration={TIMER_DURATION}
//               />
//             ))}
//           </div>
//           <motion.div 
//             className="relative aspect-square md:-mt-24"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src={theme === "dark" ? cards[activeIndex].image.dark : cards[activeIndex].image.light}
//               alt={cards[activeIndex].title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function AnimatedCard({ icon, title, description, features, isActive, onClick, duration }) {
//   return (
//     <motion.div 
//       className={`p-4 flex items-start space-x-2 cursor-pointer relative overflow-hidden
//         ${isActive ? 'border-l-0' : 'border-l-0'}
//         transition-all duration-300`}
//       onClick={onClick}
//       initial={false}
//       animate={{
//         height: isActive ? 'auto' : '60px',
//         opacity: isActive ? 1 : 0.6
//       }}
//       transition={{ duration: 0.3, ease: 'easeInOut' }}
//     >
//       {isActive ? (
//         <div 
//           className="absolute top-0 left-0 w-1 bg-blue-500"
//           style={{
//             height: '0%',
//             animation: `growBorder ${duration}s linear`,
//           }}
//         /> 
//       ) : (
//         <div 
//           className="absolute top-0 left-[1px] w-[2px] bg-gray-200 dark:bg-gray-500/50"
//           style={{
//             height: '100%',
//           }}
//         />
//       )}
//       <div className="flex-grow">
//         <h3 className={`font-semibold text-lg mb-2 text-gray-900 dark:text-white transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}>{title}</h3>
//         <AnimatePresence>
//           {isActive && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
//               <ul className="space-y-2">
//                 {features.map((feature, index) => (
//                   <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
//                     <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <style jsx>{`
//         @keyframes growBorder {
//           0% {
//             height: 0%;
//           }
//           100% {
//             height: 100%;
//           }
//         }
//       `}</style>
//     </motion.div>
//   );
// }