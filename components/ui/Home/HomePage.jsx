'use client';
import { useEffect, useState } from 'react';
import { kiteOne, merienda } from '@/lib/fonts';
import './homepage.css';
import Link from 'next/link';
import { Button, bgImages, words } from '@/lib/exports';
import Balancer from 'react-wrap-balancer';
import Footer from '@/components/ui/footer';

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

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
      } else if (isDeleting && text === '') {
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
      <div className="bg-gray-400 dark:bg-black">
        <div className="bg-container min-h-screen flex flex-col text-white">
          {bgImages.map((image, index) => (
            <div
              key={index}
              className={`bg-image pointer-events-none  ${bgImageIndex === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="flex-grow flex flex-col lg:items-start lg:justify-start lg:mt-16 lg:ml-20 items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-8 md:space-y-12 lg:space-y-16 mt-10 ">
              <header>
                <Balancer>
                  <span
                    className={`${kiteOne.className} text-black dark:text-white text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] pointer-events-none`}
                  >
                    Learn &nbsp;
                  </span>
                  <span
                    className={`${merienda.className} text-black dark:text-white  text-center animated-text text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] pointer-events-none`}
                  >
                    {text}
                    <span className="cursor-blink">|</span>
                  </span>
                </Balancer>
                <div
                  className={`${kiteOne.className} text-black dark:text-white z-10 sm:text-center lg:text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] pointer-events-none mb-20`}
                >
                  Anytime, Anywhere
                </div>
              </header>
              <Link href="/learn">
                <Button />
              </Link>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;


// import { useEffect, useState } from 'react';
// import { kiteOne, merienda } from '@/lib/fonts';
// import './homepage.css';
// import Link from 'next/link';
// import { Button, words } from '@/lib/exports';
// import Balancer from 'react-wrap-balancer';
// import Footer from '@/components/ui/footer';

// const HomePage = () => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [bgImageIndex, setBgImageIndex] = useState(0);
//   const [theme, setTheme] = useState('light'); // Default theme

//   const typingSpeed = isDeleting ? 100 : 200;

//   // Set theme on load and add MutationObserver for real-time updates
//   useEffect(() => {
//     const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
//     setTheme(currentTheme);

//     // Observe changes to the theme
//     const observer = new MutationObserver(() => {
//       const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
//       setTheme(newTheme);
//       setBgImageIndex(0); // Reset image index on theme change
//     });

//     observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % words.length;
//       const fullText = words[i];
//       setText(
//         isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
//       );

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => setIsDeleting(true), 500);
//       } else if (isDeleting && text === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     const typingInterval = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(typingInterval);
//   }, [text, isDeleting, loopNum]);

//   // Define background images for light and dark themes
//   const lightModeImages = [
//     '/lightmode/BgImage1.jpg',
//     '/lightmode/BgImage2.jpg',
//     '/lightmode/BgImage3.jpg',
//     '/lightmode/BgImage4.jpg',
//     '/lightmode/BgImage5.jpg',
//     '/lightmode/BgImage6.jpg',
//     '/lightmode/BgImage7.jpg',
//     '/lightmode/BgImage8.jpg'
//   ];
  
//   const darkModeImages = [
//     '/DarkMode/BgImage1.png',
//     '/DarkMode/BgImage2.png',
//     '/DarkMode/BgImage3.png',
//     '/DarkMode/BgImage4.png',
//     '/DarkMode/BgImage5.png',
//     '/DarkMode/BgImage6.png',
//     '/DarkMode/BgImage7.png',
//     '/DarkMode/BgImage8.png',
//     '/DarkMode/BgImage9.png',
//     '/DarkMode/BgImage10.png',
//     '/DarkMode/BgImage11.png',
//     '/DarkMode/BgImage12.png'
//   ];

//   // Update bgImageIndex and switch images based on theme
//   useEffect(() => {
//     const images = theme === 'dark' ? darkModeImages : lightModeImages;

//     const backgroundChangeInterval = setInterval(() => {
//       setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 7000);

//     return () => clearInterval(backgroundChangeInterval);
//   }, [theme]);

//   return (
//     <>
//       <div className="bg-gray-400 dark:bg-black">
//         <div className="bg-container min-h-screen flex flex-col text-white">
//           {(theme === 'dark' ? darkModeImages : lightModeImages).map((image, index) => (
//             <div
//               key={index}
//               className={`bg-image pointer-events-none ${bgImageIndex === index ? 'active' : ''}`}
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           ))}
//           <div className="flex-grow flex flex-col lg:items-start lg:justify-start lg:mt-16 lg:ml-20 items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="space-y-8 md:space-y-12 lg:space-y-16 mt-10 ">
//               <header>
//                 <Balancer>
//                   <span
//                     className={`${kiteOne.className} text-black dark:text-white text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] pointer-events-none`}
//                   >
//                     Learn &nbsp;
//                   </span>
//                   <span
//                     className={`${merienda.className} text-black dark:text-white text-center animated-text text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] pointer-events-none`}
//                   >
//                     {text}
//                     <span className="cursor-blink">|</span>
//                   </span>
//                 </Balancer>
//                 <div
//                   className={`${kiteOne.className} text-black dark:text-white z-10 sm:text-center lg:text-start text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] pointer-events-none mb-20`}
//                 >
//                   Anytime, Anywhere
//                 </div>
//               </header>
//               <Link href="/learn">
//                 <Button />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default HomePage;
