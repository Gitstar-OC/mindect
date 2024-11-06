// this file is used as a base card for components in the /docs page to resolve reuse of code

import { ChevronRightIcon } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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

const BaseCard = ({
  status,
  heading,
  steps = [],
  className,
  statusStyle,
  subheading,
  buttonText,
  buttonStyle,
  buttonPath,
  isDisabled,
  extraSteps = [],
  colors
}) => {
  return (
    <>
      {/* <div className="flex relative flex-col mx-auto py-2 px-2 rounded-xl items-center sm:mt-4 justify-center overflow-hidden border bg-background md:shadow-xl"> */}
      <ShineBorder className="relative flex-col md:w-[80vw] sm:w-[80vw] xl:mt-0 rounded-3xl xl:w-[22rem] xl:h-[29rem] mx-auto  items-center sm:mt-4 justify-center overflow-hidden border bg-background md:shadow-xl" 
       color={[`${colors}`]}  > 
           {/* <span 
            className={cn(
              "text-xs font-medium  px-2.5 py-0.5 rounded-full relative",
              statusStyle
            )}
          >
            {status}
          </span> */}
          <div>
          <p className="text-xl font-bold ml-6 text-black dark:text-white break-words lg:whitespace-normal">
            {heading}
          </p>
          <div className="dark:text-neutral-300 ml-6 text-gray-700 mt-2 relative ">
            {subheading}
            <ul className="list-none mt-2 ml-4 mr-10 grid grid-cols-1 xl:grid-cols-1 md:grid-cols-2 gap-x-4">
              {steps.map((step, index) => (
                <Step key={index} title={step} />
              ))}

              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className="mt-2 cursor-default">
                    .. And More <Info className="inline size-4" />
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  {extraSteps.map((step, index) => (
                    <Step key={index} title={step} />
                  ))}
                </HoverCardContent>
              </HoverCard>
            </ul>
          </div>
          <Link
            href={`learn/${buttonPath}`}
            passHref
            className="flex justify-center"
          >
            <button
              className={cn("relative p-[3px] mt-6 mb-6", buttonStyle)}
              disabled={isDisabled}
            >
              <div className="absolute inset-0 dark:border-white dark:border-[0.01px] border-white bg-gradient-to-r rounded-lg" />
              <div className="flex items-center px-8 py-2 rounded-[6px] text-black dark:text-white relative group transition duration-200 ">
                Start Learning
                <ChevronRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              {/* {buttonText} */}
            </button>
            {console.log(buttonPath)}
          </Link>
          </div>
         </ShineBorder>
      {/* </div> */}
    </>
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

export default BaseCard;
