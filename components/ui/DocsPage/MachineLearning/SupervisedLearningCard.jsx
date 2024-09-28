import BaseCard from "@/components/ui/base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRightIcon } from "lucide-react";

const SupervisedLearningCard = () => {
  const steps = [
    "Regression Model",
    "Gradient Descent",
    "Gradient Descent Implementation",
    "Gradient Descent in Practice",
    "Multiple Linear Regression",
    "Problem of Overfitting",
    "Cost Function for Logistic Regression",
    "Classification with Logistic Regression"
  ];

  return (
    <BaseCard
      status={
        <AnimatedGradientText className="relative inline">
          <span className="text-xs animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Complete
          </span>
        </AnimatedGradientText>
      }
      heading="Supervised Learning"
      steps={steps}
      statusStyle="" 
      subheading="Here's what you will learn:"
      buttonText={
        <>
        <div className="absolute inset-0 bg-gradient-to-r from-[#25AFAA] to-[#4C054C] rounded-lg" />
              <div className="flex items-center px-8 py-2  rounded-[6px] relative group transition duration-200 hover:text-white bg-white dark:bg-black dark:text-white text-black dark:hover:bg-transparent  hover:bg-transparent">
                Start Learning
                <ChevronRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
        </>
      }
      buttonPath="sl"
      buttonStyle=""
      isDisabled={false}
    />
  );
};

export default SupervisedLearningCard;
