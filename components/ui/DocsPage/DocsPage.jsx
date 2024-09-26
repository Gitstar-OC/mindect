"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Spotlight } from "@/components/ui/spotlight";
import Balancer from 'react-wrap-balancer'

const DocsPage = () => {
  return (
    <AuroraBackground className=" justify-start">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 px-4 mt-10 "
      >
        <div className="text-[64px] text-black font-light dark:text-white text-center ">
         {/* <i>  */}
          What would you like to learn today ?
          {/* </i> */}
        </div>
        <Balancer >
        <div
          className={`text-balance dark:text-neutral-200 mx-10 text-center  text-black text-[26px] font-normal`}       >
           <span className="text-balance">I first thought about teaching literature and arts. </span>
           <br></br>But the thing is
          they are kind of hard, so here some easy topics for you to learn
          from!
        </div>
        </Balancer>
        {/* add tooltip as don't take it seriously */}
      </motion.div>
    </AuroraBackground>
  );
};

export default DocsPage;

// const DocsPage = () => {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
//         <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//           Spotlight <br /> is the new trend.
//         </h1>
//         <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
//           Spotlight effect is a great way to draw attention to a specific part
//           of the page. Here, we are drawing the attention towards the text
//           section of the page. I don&apos;t know why but I&apos;m running out of
//           copy.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DocsPage;

