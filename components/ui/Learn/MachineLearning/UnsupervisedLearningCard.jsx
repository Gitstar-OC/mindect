import BaseCard from "@/components/ui/base-card";
import { ChevronRightIcon } from "lucide-react";

const UnsupervisedLearningCard = () => {
  const steps = [
    "Anomaly Detection",
    "Clustering",
    "K Means Algorithm",
    "Gaussian Normal Distribution",
    "Collaborative Filtering",
    "Content-based Filtering",
    "Continuous State Space",
    "Reinforcement Learning"
  ];
  const extraSteps = [
    "Principal Component Analysis",
    "State Action Value Function"
  ]

  return (
    <BaseCard
      status="In Progress"
      heading="Unsupervised Learning"
      steps={steps}
      extraSteps={extraSteps}
      statusStyle="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      subheading="Here's what you will learn:"
      buttonText={
        <>
        <div className="absolute inset-0 bg-gradient-to-r from-[#25AFAA] to-[#4C054C] rounded-lg" />
              <div className="flex items-center px-8 py-2 rounded-[6px] relative group transition duration-200 hover:text-white bg-white dark:bg-black dark:text-white text-black dark:hover:bg-transparent  hover:bg-transparent">
                Start Learning
                <ChevronRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
        </>
      }
      buttonPath="usl"
    />
  );
};

export default UnsupervisedLearningCard;
