import Image from "next/image";
import { economica } from "@/lib/fonts";

const Logo = () => {
  return (
    <>
      <header className="inline-flex items-center gap-[4px] font-semibold group"> 
      <Image
        src="/TransparentLogo.png"
        width={40}
        height={30}
        alt="Picture of the author"
        className="size-8 [.uwu_&]:hidden [header_&]:size-8 animate-spin"
      />
      <span
        className={`${economica.className} group-hover:opacity-100 opacity-80 gap-0 [.uwu_&]:hidden max-md:[header_&]:hidden`}
      >
        Mindect
      </span>
      </header>
    </>
  );
};

export default Logo;
