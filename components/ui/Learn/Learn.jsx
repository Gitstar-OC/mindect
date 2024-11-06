"use client";
import Footer from "../footer";
import MachineLearningSection from "./MachineLearning/MachineLearningSection";
import MathematicsSection from "./Mathematics/MathematicsSection";

const Learn = () => {
  return (
    <>
      <header className="relative mt-10 mb-10 xl:mt-28 xl:mb-20">
        {/* Light theme background gradient circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[28rem] h-[28rem] bg-gradient-to-r bg-gradient-radial from-blue-300 via-purple-400 to-transparent dark:from-blue-800/80 dark:via-purple-900/80 rounded-full opacity-50 blur-3xl shadow-2xl "></div>
        </div>
        {/* Dark theme background gradient circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[28rem] h-[28rem] bg-gradient-radial from-blue-900 via-purple-800 to-transparent rounded-full opacity-30 blur-3xl shadow-2xl hidden dark:block"></div>
        </div>
        {/* Content */}
        <div className="relative text-[28px] md:text-[34px] lg:text-[40px] text-black font-light dark:text-white text-center z-10">
          What would you like to learn today?
        </div>
        <div className="relative text-center text-[16px] md:text-[20px] lg:text-[22px] text-black dark:text-neutral-200 lg:mx-60 z-10">
          I first thought about teaching literature and arts.
          <br />
          But the thing is those topics are kind of hard, so here are some easy
          topics for you to start with!
        </div>
      </header>
      <MachineLearningSection />
      <MathematicsSection />
      <Footer />
    </>
  );
};

export default Learn;
