import BaseCard from "../base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const CalculusCard = () => {
  const steps = [
    "Differentiation in Python",
    "Classification with Perceptron",
    "Optimizing Functions of One Variable",
    "Neural Network with Two Layers",
    "Optimization Using Gradient Descent",
    "Optimization Using Newton's Method",    
  ];
  const extraSteps = [
    "Regression with Perceptron",
    "OUGD in One Variable",
    "OUGD in Two Variable",
    "OUGD: Linear Regression",
    ,
  ]

  return (
    <BaseCard
      status={
        <AnimatedGradientText className="relative inline">
          <span className="text-xs animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
            Coming Soon!!
          </span>
        </AnimatedGradientText>
      }
      heading="Calculus"
      steps={steps}
      extraSteps={extraSteps}
      subheading="Here's what you will learn:"
      statusStyle=""

      buttonPath="calculus"
      iconColor="text-purple-500"
    />
  );
};

export default CalculusCard;
