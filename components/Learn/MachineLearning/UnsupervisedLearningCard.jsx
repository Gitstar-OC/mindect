import BaseCard from "../base-card";

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
      buttonPath="usl"
    />
  );
};

export default UnsupervisedLearningCard;
