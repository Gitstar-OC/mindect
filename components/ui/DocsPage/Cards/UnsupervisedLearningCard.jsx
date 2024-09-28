import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

const UnsupervisedLearningCard = () => {
  return (
    <CardSpotlight className="w-full max-w-xs sm:max-w-[80vw] sm:mt-6 xl:mt-0 xl:w-96 mx-auto relative">
      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 relative">
        In Progress
      </span>
      <p className="text-xl font-bold relative z-20 mt-2 text-black dark:text-white break-words lg:whitespace-normal">
        Unsupervised Learning
      </p>
      <div className="dark:text-neutral-300 text-gray-700 mt-4 relative z-20">
        Here's what you will learn:
        <ul className="list-none mt-2 grid grid-cols-1 xl:grid-cols-1 md:grid-cols-2 gap-x-4">
          <Step title="Anomaly Detection" />
          <Step title="Clustering" />          
          <Step title="K Means Algorithm" /> 
          <Step title="Gaussian Normal Distribution" />          
          <Step title="Collaborative Filtering" />
          <Step title="Content-based Filtering" />
          <Step title="Continuous State Space" />
          <Step title="Principal Component Analysis" />
          <Step title="Reinforcement Learning" />
          <Step title="State Action Value Function " />
          <span>... And More </span> 
        </ul>
      </div>
    </CardSpotlight>
  );
};

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="dark:text-neutral-200 text-gray-900 break-words lg:whitespace-normal">
        {title}
      </p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" />
    </svg>
  );
};

export default UnsupervisedLearningCard;
