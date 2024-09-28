import BaseCard from "@/components/ui/base-card";

const AdvancedLearningAlgorithmCard = () => {
  const steps = [
    "Tensorflow Implementation",
    "Vectorization",
    "Activation Function",
    "Bias and Variance",
    "Back Propagation",
    "Multiclass Classification",
    "Decision Trees, Trees Learning",
    "Tree Ensembles",
    "Neural Network Intuition",
    "Skewed Datasets"
  ];

  return (
    <BaseCard
      status="In Progress"
      heading="Learning Algorithms"
      steps={steps}
      statusStyle="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    />
  );
};

export default AdvancedLearningAlgorithmCard;