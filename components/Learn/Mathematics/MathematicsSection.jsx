import CalculusCard from "./CalculusCard"
import LinearAlgebraCard from "./LinearAlgebraCard"
import ProbabilityCard from "./ProbabilityCard";

const MathematicsSection = () => {
  return (
    <div className="xl:mx-8 bg-gradient-radial bg-gradient-to-b from-purple-100 via-purple-300 bg-gradient-radial dark:from-purple-900/10 dark:via-purple-600/20 rounded-xl flex flex-col mt-10 mb-10">
      <div className="text-[26px] md:text-[34px] lg:text-[38px] text-black font-light dark:text-white text-center mt-6">
        Mathematics
      </div>
      <div className="text-center text-balance text-[16px] md:text-[18px] lg:text-[20px] text-gray-800 dark:text-neutral-300  mt-3">
        Oh! Common, You got it don’t you? Everybody know how cool and easy it is
        to study mathematics. There a little thing to worry about, it is in
        python. Have Fun.
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 items-center mt-12 mx-6 xl:mx-10 mb-8">
        <CalculusCard />
        <LinearAlgebraCard />
        <ProbabilityCard />
      </div>
    </div>
  );
};

export default MathematicsSection;

// previous color bg-gradient-conic from-purple-200 via-pink-200 to-blue-200  bg-gradient-to-b dark:bg-gradient-to-b dark:bg-gradient-conic dark:from-purple-500/50 dark:via-pink-600/50 dark:to-blue-700/50

