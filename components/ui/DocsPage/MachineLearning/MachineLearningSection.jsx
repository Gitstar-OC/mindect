import AdvancedLearningAlgorithmCard from "./LearningAlgortihmCard";
import SupervisedLearningCard from "./SupervisedLearningCard";
import UnsupervisedLearningCard from "./UnsupervisedLearningCard";

const MachineLearningSection = () => {
  return (
    <div className="lg:mx-10 bg-gray-50/50 dark:bg-zinc-950/60 rounded-3xl flex flex-col mt-10 mb-10">
      <div className="text-[26px] md:text-[36px] lg:text-[40px] text-black font-light dark:text-white text-center mt-6">
        Machine Learning
      </div>
      <div className="text-center text-balance text-[16px] md:text-[18px] lg:text-[20px] text-black dark:text-neutral-200 xl:mx-[23rem] mt-3">
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
