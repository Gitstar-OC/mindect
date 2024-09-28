import AdvancedLearningAlgorithmCard from "./AdvancedLearningAlgortihmCard";
import SupervisedLearningCard from "./SupervisedLearningCard";
import UnsupervisedLearningCard from "./UnsupervisedLearningCard";

const MachineLearningSection = () => {
  return (
    <div className="lg:mx-10 bg-gray-50 dark:bg-zinc-950/60 rounded-3xl flex flex-col mt-10 mb-10">
      <div className="text-[26px] md:text-[36px] lg:text-[40px] text-black font-light dark:text-white text-center mt-6">
        Machine Learning
      </div>
      <div className="text-center text-[16px] md:text-[18px] lg:text-[20px] text-black dark:text-neutral-200 lg:mx-60 mt-3">
        I first thought about teaching literature and arts.
        <br />
        But the thing is those topics are kind of hard, so here are some easy
        topics for you to learn from!
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 items-center mt-12 mx-6  xl:mx-10 mb-8">
        <AdvancedLearningAlgorithmCard />
        <SupervisedLearningCard />
        <UnsupervisedLearningCard />
      </div>
    </div>
  );
};

export default MachineLearningSection;
