import BaseCard from "@/components/ui/base-card";

const UnsupervisedLearningCard = () => {
  const steps = [
    "Anomaly Detection",
    "Clustering",
    "K Means Algorithm",
    "Gaussian Normal Distribution",
    "Collaborative Filtering",
    "Content-based Filtering",
    "Continuous State Space",
    "Principal Component Analysis",
    "Reinforcement Learning",
    "State Action Value Function"
  ];

  return (
    <BaseCard
      status="In Progress"
      heading="Unsupervised Learning"
      steps={steps}
      statusStyle="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    />
  );
};

export default UnsupervisedLearningCard;
