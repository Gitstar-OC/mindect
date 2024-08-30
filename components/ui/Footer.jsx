import { kiteOne, merienda, economica } from "@/lib/fonts";
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
            <Link href="/contribute" className="group relative">
              Contribute
              <div className="underlineEffect"></div>
            </Link>
            <Separator orientation="vertical" />
            <Link href="/support" className="group relative">
              Support
              <div className="underlineEffect"></div>
            </Link>
            <Separator orientation="vertical" />
            <Link href="/contact" className="group relative">
              Contact
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
