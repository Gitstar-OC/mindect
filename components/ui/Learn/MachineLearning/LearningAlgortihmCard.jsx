import BaseCard from "@/components/ui/base-card";
import { ChevronRightIcon } from "lucide-react";

const LearningAlgorithmCard = () => {
  const steps = [
    "Tensorflow Implementation",
    "Vectorization",
    "Activation Function",
    "Bias and Variance",
    "Back Propagation",
    "Multiclass Classification",
    "Decision Trees, Trees Learning",
    "Tree Ensembles"
  ];
  const extraSteps = [
    "Neural Network Intuition",
    "Skewed Datasets"
  ]

  return (
    <BaseCard
      status="In Progress"
      heading="Learning Algorithms"
      steps={steps}
      extraSteps={extraSteps}
      subheading="Here's what you will learn:"
      statusStyle="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      buttonText={
        <>
        <div className="absolute inset-0 bg-gradient-to-r from-[#25AFAA] to-[#4C054C] rounded-lg" />
              <div className="flex items-center px-8 py-2 rounded-[6px] relative group transition duration-200 bg-white dark:bg-black dark:text-white text-black dark:hover:bg-transparent  hover:bg-transparent hover:text-white">
                Start Learning
                <ChevronRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
        </>
      }
      buttonPath="algs"
    />
  );
};

export default LearningAlgorithmCard;
