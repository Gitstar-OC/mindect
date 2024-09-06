"use client";
import { useEffect } from "react";
import baffle from "baffle";
import { economica } from "@/lib/fonts";

const LoadingComponent = ({ setLoading }) => {
  useEffect(() => {
    const text = baffle(".data");
    text.set({
      characters: "zpxzVpasdfh86136░█▒ ░░░█▓ >░░ ▓/▒█▓ █ █>█▒sayg▒ ░░░█▓ >yf",
      speed: 190,
    });
    text.start();
    text.reveal(8000);

    const text1 = baffle(".quote");
    text1.set({
      characters: "qwertyuiopasdfgh8613611888",
      speed: 170,
    });
    text1.start();
    text1.reveal(5500);

    const timeout = setTimeout(() => {
      // Trigger the transition to hide the loading screen
      setLoading(false);
    }, 4000); // 9 seconds for the loading animation

    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <div
      className="loading-container bg-black w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden fixed"
      style={{ transition: "opacity 1s ease-out" }}
    >
      {" "}
      <div className="relative">
        <div
          className={`${economica.className} data text-4xl text-white text-center`}
        >
          Learn Ai
        </div>
        <div className={`quote  text-white text-xl font-thin text-center`}>
          by Theme-Verse
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
