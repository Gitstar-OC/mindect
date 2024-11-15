import { motion } from "framer-motion";
import Link from "next/link";


const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-52">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }} // a component section with a search box with placeholder as what would you like to learn and various options will be in it!
          className="text-3xl sm:text-4xl lg:text-5xl  text-center text-balance leading-tight mb-6" // complete details, optin to download jupyter notebooks, codebase available, can report an issue
        >
          Learn concepts underlying AI, ML and Mathematics from the comfort of
          your zone!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-xl text-center mb-8 max-w-3xl mx-auto"
        >
          Unlock the power of AI, ML, and Deep Learning with our comprehensive,
          cutting-edge courses designed for the innovators of tomorrow.
        </motion.p>
        <Link href="/learn">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex justify-center"
          >
            <button className="px-8 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              Start Learning
            </button>
          </motion.div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
