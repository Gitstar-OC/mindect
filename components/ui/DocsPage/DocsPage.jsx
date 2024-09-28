"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "../footer"
import MachineLearningSection from "./MachineLearning/MachineLearningSection";
import MathematicsSection from "./Mathematics/MathematicsSection"

const DocsPage = () => {
  
  return (
    <>
      <AuroraBackground className="justify-start">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 px-4 mt-10"
        >
          <header>
            <div className="text-[30px] md:text-[40px] lg:text-[48px] text-black font-light dark:text-white text-center">
              What would you like to learn today?
            </div>
            <div className="text-center text-[18px] md:text-[22px] lg:text-[26px] text-black dark:text-neutral-200 lg:mx-60">
              I first thought about teaching literature and arts.
              <br />
              But the thing is those topics are kind of hard, so here are some
              easy topics for you to learn from!
            </div>
          </header>
          <MachineLearningSection />
          <MathematicsSection />
        </motion.div>
      </AuroraBackground>
      <Footer />
    </>
  );
};

export default DocsPage;
