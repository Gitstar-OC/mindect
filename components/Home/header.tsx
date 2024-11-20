"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AnimatedCircles from "@/components/ui/animated-circles";
import MainButton from "@components/ui/main-button";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header
      ref={headerRef}
      className="relative overflow-hidden min-h-[90vh] flex mb-10 flex-col justify-center items-center "
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <AnimatedCircles />
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
            <MainButton Label="Get Started" />
          </Link>
        </div>
      </div>
    </header>
  );
}