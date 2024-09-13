import Image from 'next/image'


const Logo = () => {
  return (
    <Image
      src="/TransparentLogo.png"
      width={40}
      height={30}
      alt="Picture of the author"
      className='group-hover:opacity-100  opacity-80 size-5 [.uwu_&]:hidden [header_&]:size-10'
    /> 
  )
}

export default Logo