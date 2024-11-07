"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Brain, Cpu, Book, Users } from "lucide-react";
import Image from "next/image";
import Footer from "./ui/footer";

export default function Homepage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} // a component section with a search box with placeholder as what would you like to learn and various options will be in it!
            className="text-3xl sm:text-4xl lg:text-5xl  text-center text-balance leading-tight mb-6" // complete details, optin to download jupyter notebooks, codebase available, can report an issue
          >
            Learn concepts in AI, ML and Mathematics from the comfort of your zone!
            
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-8 max-w-3xl mx-auto"
          >
            Unlock the power of AI, ML, and Deep Learning with our
            comprehensive, cutting-edge courses designed for the innovators of
            tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <button className="px-8 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              Start Learning
            </button>
          </motion.div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Embark on Your AI Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <AnimatedCard
                icon={<Brain className="w-8 h-8 text-blue-500" />}
                title="Artificial Intelligence"
                description="Explore the fundamentals and advanced concepts of AI, from machine learning algorithms to neural networks."
              />
              <AnimatedCard
                icon={<Cpu className="w-8 h-8 text-purple-500" />}
                title="Machine Learning"
                description="Master the art of creating algorithms that learn from data, make predictions, and improve over time."
              />
              <AnimatedCard
                icon={<Book className="w-8 h-8 text-blue-500" />}
                title="Deep Learning"
                description="Dive into the world of artificial neural networks and their applications in computer vision, natural language processing, and more."
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Study Illustration"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Embark on Your AI Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Study Illustration"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-8">
              <AnimatedCard
                icon={<Brain className="w-8 h-8 text-blue-500" />}
                title="Artificial Intelligence"
                description="Explore the fundamentals and advanced concepts of AI, from machine learning algorithms to neural networks."
              />
              <AnimatedCard
                icon={<Cpu className="w-8 h-8 text-purple-500" />}
                title="Machine Learning"
                description="Master the art of creating algorithms that learn from data, make predictions, and improve over time."
              />
              <AnimatedCard
                icon={<Book className="w-8 h-8 text-blue-500" />}
                title="Deep Learning"
                description="Dive into the world of artificial neural networks and their applications in computer vision, natural language processing, and more."
              />
            </div>
          </div>
        </div>
      </section> 
{/** Wait what you don't want to learn ai and go with the hype, alright you can learn mathematics then! */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                At Mindect, we're on a mission to democratize AI education. We
                believe that by providing a unified, comprehensive learning
                platform, we can empower individuals to master the technologies
                shaping our future.
              </p>
              <p className="text-lg">
                Our curated courses and hands-on projects are designed to take
                you from novice to expert, ensuring you're equipped with the
                skills needed to thrive in the AI-driven world.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gray-300 dark:bg-neutral-950 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                Illustration Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-6">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="User Avatar"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Alex Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Data Scientist
                  </p>
                </div>
              </div>
              <p className="text-lg italic">
                "Mindect has been a game-changer for my career. The
                comprehensive curriculum and hands-on projects have given me the
                confidence to tackle complex AI challenges in my work. It's more
                than just a learning platform; it's a launchpad for innovation."
              </p>
            </div>
            <div className="space-y-6">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Join Thousands of Satisfied Learners
              </h3>
              <p className="text-lg text-center">
                Our community of learners is growing every day. Discover why
                Mindect is the preferred choice for aspiring AI professionals
                and enthusiasts worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function AnimatedCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-neutral-950 rounded-xl shadow-lg p-6 flex items-start space-x-4"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
