"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-50 blur-3xl"
            style={{
              background: theme === "dark" ? "rgba(0, 0, 255, 0.5)" : "rgba(0, 0, 255, 0.5)",
              boxShadow: "0 0 40px rgba(0, 0, 255, 0.4)",
              zIndex: -1,
            }}
          />
          <div 
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-80 dark:opacity-100 blur-3xl"
            style={{
              background: theme === "dark" ? "rgba(128, 0, 128, 0.3)" : "rgba(128, 0, 128, 0.5)",
              boxShadow: "0 0 40px rgba(128, 0, 128, 0.4)",
              zIndex: -1,
            }}
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
  )
}

export default Header