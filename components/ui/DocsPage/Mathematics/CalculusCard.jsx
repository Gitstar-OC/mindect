import BaseCard from "@/components/ui/base-card";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const CalculusCard = () => {
  const steps = [
    "Differentiation in Python",
    "Classification with Perceptron",
    "Optimizing Functions of One Variable",
    "Neural Network with Two Layers",
    "Optimization Using Gradient Descent (OUGD)",
    "OUGD in One Variable",
    "OUGD in Two Variable",
    "Regression with Perceptron",
    "Optimization Using Newton's Method",
    "OUGD: Linear Regression",
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
      heading="Calculus"
      steps={steps}
      subheading="Here's what you will learn:"
      statusStyle=""
      buttonText={
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#25AFAA] to-[#4C054C]  rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white">
            Coming Soon!!
          </div>
        </>
      }
      buttonPath=""
      buttonStyle="cursor-not-allowed"
      isDisabled={true}
    />
  );
};

export default CalculusCard;
