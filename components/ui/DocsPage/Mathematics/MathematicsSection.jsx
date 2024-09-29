import CalculusCard from "./CalculusCard"
import LinearAlgebraCard from "./LinearAlgebraCard"
import ProbabilityCard from "./ProbabilityCard";

const MathematicsSection = () => {
  return (
    <div className="xl:mx-8 bg-gray-50/50 dark:bg-zinc-950/70 rounded-xl flex flex-col mt-10 mb-10">
      <div className="text-[26px] md:text-[36px] lg:text-[40px] text-black font-light dark:text-white text-center mt-6">
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

