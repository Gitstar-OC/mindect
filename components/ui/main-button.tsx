import { cn } from "@/lib/utils";
import { useState } from "react";

interface MainButtonProps {
    Label: string;
}

const MainButton: React.FC<MainButtonProps> = ({Label}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <button
    className={cn("relative p-[3px] group")}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="absolute inset-0 dark:border-white border-[0.01px]  border-black bg-gradient-to-r rounded-lg" />
    <div className="flex items-center px-8 py-2 rounded-[6px] text-black dark:text-white relative transition duration-200">
      {Label}
      <div className="relative ml-2 w-5 h-5">
        <svg
          className={cn(
            "absolute top-0 left-0 w-5 h-5 transition-all duration-300 ease-in-out",
            isHovered ? "translate-x-1" : ""
          )}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className={cn(
            "absolute top-0 left-0 w-6 h-5 transition-all duration-300 ease-in-out",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 8H11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  </button>
  )
}

export default MainButton