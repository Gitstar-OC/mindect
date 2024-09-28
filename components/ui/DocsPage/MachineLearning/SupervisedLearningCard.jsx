import BaseCard from "@/components/ui/base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

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
    />
  );
};

export default SupervisedLearningCard;
