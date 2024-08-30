'use client';
import { useEffect, useState } from "react";
import { kiteOne, merienda } from "@/lib/fonts";
import "./animation.css";
import Footer from "./Footer";
import Button from "./Button2";
import Link from "next/link";

const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const words = [
    "Machine Learning", "Deep Learning", "Supervised Learning",
    "Unsupervised Learning", "Gradient Descent", "Clustering",
    "Anamoly Detection", "Reinforcement Learning", "Back Propagation",
    "Multiclass Classification", "Activation Function",
    "Vectorization", "Bias and Variance", "Development Processes",
    "Decision Trees", "Regression Model", "Cost Function",
  ];

  const bgImages = [
    "./FinalImages/BgImage1.png", "./FinalImages/BgImage2.png", "./FinalImages/BgImage3.png",
    "./FinalImages/BgImage4.png", "./FinalImages/BgImage5.png", "./FinalImages/BgImage6.png",
    "./FinalImages/BgImage7.png", "./FinalImages/BgImage8.png", "./FinalImages/BgImage9.png",
    "./FinalImages/BgImage10.png", "./FinalImages/BgImage11.png", "./FinalImages/BgImage12.png",
    "./FinalImages/BgImage13.png",
  ];

  const typingSpeed = isDeleting ? 100 : 200;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const backgroundChangeInterval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 7000);

    return () => clearInterval(backgroundChangeInterval);
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="bg-container min-h-screen flex flex-col text-white">
          {bgImages.map((image, index) => (
            <div
              key={index}
              className={`bg-image pointer-events-none ${bgImageIndex === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="flex-grow flex flex-col lg:items-start lg:justify-start lg:mt-16 lg:ml-20 items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-8 md:space-y-12 lg:space-y-16 mt-10 pointer-events-none">
              <div className="">
                <span
                  className={`${kiteOne.className} text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px]`}
                >
                  Learn &nbsp;
                </span>
                <span
                  className={`${merienda.className} text-center animated-text text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px]`}
                >
                  {text}
                  <span className="cursor-blink">|</span>
                </span>

                <div
                  className={`${kiteOne.className} sm:text-center lg:text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px]`}
                >
                  Anytime, Anywhere
                </div>
              </div>
              {/* <Link href="/docs"> */}
              <Button className="mt-8"/>
              {/* </Link> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
