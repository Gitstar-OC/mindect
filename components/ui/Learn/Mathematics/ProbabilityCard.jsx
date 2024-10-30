import BaseCard from "@/components/ui/base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRightIcon } from "lucide-react";


const ProbabilityCard = () => {
  const steps = [
    "Four Birthday and Monty Hall problem",
    "A/B Testing",
    "Exploratory Data Analysis (EDA)",
    "Naive Bayes",
    "Summary statistics ",
    "Visualization of Data Sets",
    "Studying the distribution of sample mean"
  ];
  const extraSteps = [
    "Simulating Dice Rolls with Numpy",
    "Loaded Dice",
    "EDA: Linear Regression",
    "EDA:  Confidence Intervals with Hypoothesis Testing",
    "EDA: Intro to pandas",
    "EDA: Exploring your data",
    "EDA: Data Visualization and Summary",
    "Sampling  data from different distribution",
  ];

  return (
    <BaseCard
      status={
        <AnimatedGradientText className="relative inline">
          <span className="text-xs animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Coming Soon!!
          </span>
        </AnimatedGradientText>
      }
      heading="Probabitly and Statistics"
      steps={steps}
      extraSteps={extraSteps}
      subheading="Here's what you will learn:"
      statusStyle=""
      buttonText={
<>
        <div className="absolute inset-0 bg-gradient-to-r from-[#25AFAA] to-[#4C054C] rounded-lg" />
              <div className="flex items-center px-8 py-2 rounded-[6px] relative group transition duration-200 hover:text-white bg-white dark:bg-black dark:text-white text-black dark:hover:bg-transparent  hover:bg-transparent">
                Start Learning
                <ChevronRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
        </>
      }
      buttonPath="probability"
      isDisabled={true}
    />
  );
};

export default ProbabilityCard;
