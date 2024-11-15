import AdvancedLearningAlgorithmCard from "./LearningAlgortihmCard";
import SupervisedLearningCard from "./SupervisedLearningCard";
import UnsupervisedLearningCard from "./UnsupervisedLearningCard";

const MachineLearningSection = () => {
  return (
    <div className="lg:mx-8 bg-gradient-radial bg-gradient-to-b from-blue-50 via-blue-200 bg-gradient-radial dark:from-purple-900/10 dark:via-blue-600/20   rounded-xl flex flex-col mt-10 mb-10" id="machine-learning">
      <div className="text-[26px] md:text-[34px] lg:text-[38px] text-black font-light dark:text-white text-center mt-6">
        Machine Learning
      </div>
      <div className="text-center text-balance text-[16px] md:text-[18px] lg:text-[20px] text-gray-800 dark:text-neutral-300 xl:mx-[10rem] mt-3">
        Well, it's the second easiest thing next to calculus.
        Hope reading this you know and gain more insights about machines. Sorry,
        not sorry :)
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 items-center mt-12 mx-6 xl:mx-10 mb-8">
        <AdvancedLearningAlgorithmCard />
        <SupervisedLearningCard />
        <UnsupervisedLearningCard />
      </div>
    </div>
  );
};

export default MachineLearningSection;
