import Image from 'next/image'
import { economica } from "@/lib/fonts"

const Logo = () => {
  return (
    <span className='flex group'>
    <Image
      src="/Logo.png"
      width={46}
      height={28}
      alt="Picture of the author"
      className='group-hover:opacity-100  opacity-80'
    /> 
    <span className='relative'>
    <p className={`${economica.className} text-[26px] mt-2 ml-1 text-transparent bg-clip-text bg-[linear-gradient(180deg,_#25AFAA_0%,_#4C054C_100%)] opacity-80 group-hover:opacity-100`} >LearnAI </p>
    <span className="underlineEffect"></span>
    </span>
    </span>
  )
}

export default Logo