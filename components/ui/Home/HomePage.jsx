'use client';
import { useEffect, useState } from 'react';
import { kiteOne, merienda } from '@/lib/fonts';
import './homepage.css';
import Link from 'next/link';
import { Button, Footer, Loader, bgImages, words } from '@/lib/exports';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const typingSpeed = isDeleting ? 100 : 200;

  useEffect(() => {
    if (!loading) {
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
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      };

      const typingInterval = setTimeout(handleTyping, typingSpeed);

      return () => clearTimeout(typingInterval);
    }
  }, [text, isDeleting, loopNum, loading]);

  useEffect(() => {
    if (!loading) {
      const backgroundChangeInterval = setInterval(() => {
        setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
      }, 7000);

      return () => clearInterval(backgroundChangeInterval);
    }
  }, [loading]);

  if (loading) {
    return <Loader setLoading={setLoading} />;
  }

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
            <div className="space-y-8 md:space-y-12 lg:space-y-16 mt-10 ">
              <header>
                <span
                  className={`${kiteOne.className} text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] pointer-events-none`}
                >
                  Learn &nbsp;
                </span>
                <span
                  className={`${merienda.className} text-center animated-text text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] pointer-events-none`}
                >
                  {text}
                  <span className="cursor-blink">|</span>
                </span>

                <div
                  className={`${kiteOne.className} sm:text-center lg:text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] pointer-events-none mb-20`}
                >
                  Anytime, Anywhere
                </div>
              </header>
              <Link href="/docs">
                <Button />
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;