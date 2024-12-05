'use client'
import Navbar from '@/components/Navbar/navbar'
import { useEffect, useState } from 'react'
import Footer from "@/components/ui/footer"
import MachineLearningSection from "./MachineLearning/MachineLearningSection"
import MathematicsSection from "./Mathematics/MathematicsSection"
import { motion } from 'framer-motion'

const Learn = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
    <Navbar />
      <header className="relative mt-10 mb-10 xl:mt-28 xl:mb-20">
        {/* Light theme background gradient circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[28rem] h-[28rem] bg-gradient-to-r bg-gradient-radial from-blue-300 via-purple-400 to-transparent dark:from-blue-800/80 dark:via-purple-900/80 rounded-full blur-3xl shadow-2xl"
          ></motion.div>
        </div>
        {/* Dark theme background gradient circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[28rem] h-[28rem] bg-gradient-radial from-blue-900 via-purple-800 to-transparent rounded-full blur-3xl shadow-2xl hidden dark:block"
          ></motion.div>
        </div>
        {/* Content */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative text-balance text-[28px] md:text-[34px] lg:text-[40px] text-black font-light dark:text-white text-center z-10"
        >
          What would you like to learn today?
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative text-center text-balance text-[16px] md:text-[20px] lg:text-[22px] text-black dark:text-neutral-200 lg:mx-60 z-10"
        >
          I first thought about teaching literature and arts.
          <br />
          But the thing is those topics are kind of hard, so here are some easy
          topics for you to start with!
        </motion.div>
      </header>
      {mounted && (
        <>
          <MachineLearningSection />
          <MathematicsSection />
          <Footer />
        </>
      )}
    </>
  )
}

export default Learn