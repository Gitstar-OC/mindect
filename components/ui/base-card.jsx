"use client"

import { ChevronRightIcon, Info } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ShineBorder from "@/components/ui/shine-border"
import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const CheckIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-4 w-4 mt-1 flex-shrink-0", className)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" />
    </svg>
  )
}

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
  colors,
  iconColor = "text-blue-500"
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <ShineBorder
        className={cn(
          "relative flex-col w-full md:w-[90vw] lg:w-[80vw] xl:w-[22rem] mx-auto",
          "rounded-3xl overflow-hidden border bg-background shadow-xl",
          "h-auto min-h-[24rem] sm:min-h-[26rem] md:min-h-[28rem] lg:min-h-[29rem]",
          "my-4 sm:my-6 md:my-2",
          className
        )}
        color={[`${colors}`]}
      >
        <div className="p-6">
          <p className="text-xl font-bold text-black dark:text-white break-words">
            {heading}
          </p>
          <div className="dark:text-neutral-300 text-gray-700 mt-2 relative">
            {subheading}
            <ul className="list-none mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-4 gap-y-[2px]">
              {steps.map((step, index) => (
                <Step key={index} title={step} color={iconColor} />
              ))}
            </ul>
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="mt-4 inline-block cursor-default">
                  .. And More <Info className="inline size-4" />
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <ul className="list-none grid grid-cols-1 gap-y-2">
                  {extraSteps.map((step, index) => (
                    <Step key={index} title={step} color={iconColor} />
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex justify-center mt-6">
            <Link href={`learn/${buttonPath}`} passHref>
              <button
                className={cn(
                  "relative p-[3px] group",
                  buttonStyle
                )}
              >
                <div className="absolute inset-0 dark:border-white dark:border-[0.01px] border-white bg-gradient-to-r rounded-lg" />
                <div className="flex items-center px-8 py-2 rounded-[6px] text-black dark:text-white relative transition duration-200">
                  Start Learning
                  <ChevronRightIcon className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </ShineBorder>
    </motion.div>
  )
}

const Step = ({ title, color = "text-blue-500" }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon className={color} />
      <p className="dark:text-neutral-200 text-gray-900 break-words">
        {title}
      </p>
    </li>
  )
}

export default BaseCard