import BaseCard from "../base-card";


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
      buttonPath="algs"
    />
  );
};

export default LearningAlgorithmCard;
