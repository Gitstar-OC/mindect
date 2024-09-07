import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/MainLogo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
  )
}

export default Logo