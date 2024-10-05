import "./style.css";
import { TbSettings } from "react-icons/tb";
import {cn} from "@/lib/utils"

const Appearance = ({className}) => {
  return (
    <span className={cn(`opacity-60 hover:opacity-100 cursor-pointer group text-xs flex`, className)}>
      <TbSettings className={(`size-3 mt-[1px] mr-1 transition-transform duration-300 ease-in-out group-hover:rotate-[360deg] group-hover:scale-125`)} />
      Change Appearance
    </span>
  );
};

export default Appearance;

// article > h1 
// article > p 
// article > div > h1
// article > div > h2
// article > div > h3 
// article > div > h4
// article > div > h5 
// article > div > h6
// article > div > p
// article > div > div