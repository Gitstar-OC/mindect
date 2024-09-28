"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "../Footer";
// import AdvancedLearningAlgorithmCard from "./Cards/AdvancedLearningAlgorithmCard";
import AdvancedLearningAlgorithmCard from "./Cards/AdvancedLearningAlgortihmCard"
import SupervisedLearningCard from "./Cards/SupervisedLearningCard";
import UnsupervisedLearningCard from "./Cards/UnsupervisedLearningCard";

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
          <div className="text-[30px] md:text-[40px] lg:text-[48px] text-black font-light dark:text-white text-center">
            What would you like to learn today?
          </div>
          <div className="text-center text-[18px] md:text-[22px] lg:text-[26px] text-black dark:text-neutral-200 lg:mx-60">
            I first thought about teaching literature and arts.
            <br />
            But the thing is those topics are kind of hard, so here are some
            easy topics for you to learn from!
          </div>

          <div className="lg:mx-10 bg-gray-50 dark:bg-zinc-950 rounded-3xl flex flex-col mt-10 mb-10">
            <div className="text-[26px] md:text-[36px] lg:text-[40px] text-black font-light dark:text-white text-center mt-6">
              Machine Learning
            </div>
            <div className="text-center text-[16px] md:text-[18px] lg:text-[20px] text-black dark:text-neutral-200 lg:mx-60 mt-3">
              I first thought about teaching literature and arts.
              <br />
              But the thing is those topics are kind of hard, so here are some
              easy topics for you to learn from!
            </div>

            {/* Flex container for the cards */}
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 items-center mt-12 mx-6  xl:mx-10 mb-8">
              <AdvancedLearningAlgorithmCard />
              <SupervisedLearningCard />
              <UnsupervisedLearningCard />
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <Footer />
    </>
  );
};

export default DocsPage;
