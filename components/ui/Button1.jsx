import { kiteOne} from '@/lib/fonts';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Button1 = () => {
    return (
    <div className="text-center lg:text-start mt-6">
              <button className="group relative bg-gradient-to-r from-[#3A3FBB]/50 to-[#B26363]/50 text-[20px] sm:text-[24px] md:text-[30px] rounded-[50px] border-2 border-[#3A3FB1]  pl-4 pr-6 transition-transform">
                <span
                  className={`${kiteOne.className} text-[20px] sm:text-[22px] md:text-[24px] relative`}
                >
                  Get Started
                  <div className="underlineEffect"></div>
                </span>{' '}
                <FaLongArrowAltRight className="inline block ml-0 transform transition-transform duration-200 group-hover:translate-x-2" />
              </button>
            </div>
    )
}

export default Button1;