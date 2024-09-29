import { kiteOne } from "@/lib/fonts";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./homepage.css";

const Button = () => {
  return (
    <div className="text-center lg:text-start mt-6">
      <button className="text-[20px] sm:text-[24px] md:text-[30px] bg-neutral-100 dark:bg-zinc-900 rounded-[40px] border-[2px] border-[#4C054C] button hover:bg-white dark:hover:bg-black p-2 pl-6 pr-4">
        <span
          className={`${kiteOne.className} text-[20px] sm:text-[22px] md:text-[24px] relative text-black dark:text-white `}
        >
          Get Started
        </span>
        <div className="icon">
          <span>
            <FaArrowLeftLong className="text-[#4C054C]" />
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
