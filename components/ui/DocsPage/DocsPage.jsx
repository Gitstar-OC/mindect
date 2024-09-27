"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
// import { Spotlight } from "@/components/ui/spotlight";
import Footer from "../Footer";

const DocsPage = () => {
  return (
    <>
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
        <div
          className={`text-balance dark:text-neutral-200 lg:mx-60 text-center  text-black text-[26px] font-normal`}       >
           {/* <span className="text-balance"> */}
            I first thought about teaching literature and arts. 
            <br></br>
            But the thing is those topics are kind of hard, so here some easy topics for you to learn from!
        </div>
        {/* add tooltip as don't take it seriously */}
      </motion.div>
    </AuroraBackground>
    <Footer />
    </>
  );
};

export default DocsPage;

