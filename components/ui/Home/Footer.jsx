import { kiteOne,  economica } from "@/lib/fonts";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center  lg:ml-24 mt-auto mb-4 mx-4 md:mx-0">
        {" "}
        <div className="text-center md:text-left">
          <div
            className={`${kiteOne.className} text-[24px] sm:text-[26px] md:text-[30px] lg:text-[30px] pointer-events-none`}
          >
            Made with ❤️ by OC
          </div>

          <div
            className={`${economica.className} flex flex-wrap justify-center md:justify-start items-center space-x-4 mt-4 text-[14px] sm:text-[16px] md:text-[18px]`}
          >
            <a href="https://github.com/gitstar-oc/learnai" target="_blank" className="group relative">
              Contribute
              <div className="underlineEffect"></div>
            </a>
            <Separator orientation="vertical" />
            <a href="https://github.com/gitstar-oc/learnai" className="group relative" target="_blank">
              Support
              <div className="underlineEffect"></div>
            </a>
            <Separator orientation="vertical" />
            <Link href="/contact" className="group relative">
              Resources {/**Contact */} 
              <div className="underlineEffect"></div>
            </Link>
            <Separator orientation="vertical" />
            <Link href="/about" className="group relative">
              About
              <div className="underlineEffect"></div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
