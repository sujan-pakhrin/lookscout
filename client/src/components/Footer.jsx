import { FaApple, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import CompanyLogo from '../assets/CompanyLogo/CompanyLogo.svg'
import Hexagon from '../assets/FooterIcon/Footer.svg'
const Footer = () => {
  return (
    <div className="flex justify-center items-center h-[748px] md:h-[592px] lg:h-[496px]">
      <div className="max-w-[343px] w-full md:max-w-[704px] lg:max-w-[1280px] lg:px-[32px]">
        <div className=' grid grid-col gap-[24px] md:gap-[32px] text-[##272D37] relative lg:gap-[64px]'>
          <div className='flex flex-col gap-[32px] lg:flex-row lg:justify-between'>
            <div className='flex justify-between md:gap-[64px]'>
              <div className='flex flex-col gap-[16px] md:w-[448px] lg:w-fit'>
                <div className='flex flex-col w-[160px] h-[40px]'>
                  <img src={CompanyLogo} alt="" className='w-[150px]' />
                </div>
                <div className='flex flex-col gap-[24px] md:max-w-[247px]'>
                  <span className='text-[16px] leading-[24px] tracking-[-0.1px] text-[#5F6D7E]'>
                    Generate outside the box thinking with the possibility to targtet the low.
                  </span>
                  <div className='w-full flex justify-around md:absolute md:bottom-0 md:right-0 md:justify-between md:max-w-[168px] lg:static '>
                    <FaFacebook className='w-[24px] h-[24px]' />
                    <FaGoogle className='w-[24px] h-[24px]' />
                    <FaApple className='w-[24px] h-[24px]' />
                    <FaInstagram className='w-[24px] h-[24px]' />
                  </div>
                </div>
              </div>
              {/** For Tab */}
              <div className='md:flex gap-[16px] flex-col hidden lg:hidden md:w-[192px]'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  About Us
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>Our Competition</li>
                  <li>Channels</li>
                  <li>Scale</li>
                  <li>Watch the Demo</li>
                </ul>
              </div>
            </div>
            <div className='md:flex md:gap-[64px] hidden lg:hidden'>
              <div className='flex gap-[16px] flex-col md:w-[192px]'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Products
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>Features</li>
                  <li>Integrations</li>
                  <li>Enterprise</li>
                  <li>Solutions</li>
                </ul>
              </div>
              <div className='flex gap-[16px] flex-col md:w-[192px]'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Resources
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>Partners</li>
                  <li>Developers</li>
                  <li>Community</li>
                  <li>Apps</li>
                </ul>
              </div>
              <div className='flex gap-[16px] flex-col'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Company
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>About Us</li>
                  <li>Leadership</li>
                  <li>News</li>
                </ul>
              </div>
            </div>
            <div className='grid gap-x-[64px] gap-y-[24px] grid-cols-2 md:hidden lg:flex lg:justify-between lg:gap-[100px]'>
              <div className='flex gap-[16px] flex-col w-fit'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Products
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>Features</li>
                  <li>Solutions</li>
                  <li>Integrations</li>
                  <li>Enterprise</li>
                  <li>Solutions</li>
                </ul>
              </div>
              <div className='flex gap-[16px] flex-col w-fit'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Resources
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>Partners</li>
                  <li>Community</li>
                  <li>Developers</li>
                  <li>App</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className='flex gap-[16px] flex-col w-fit'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Why Choose Us?
                </span>
                <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>Channels</li>
                  <li>Scale</li>
                  <li>Watch the Demo</li>
                  <li>Our Competition</li>
                </ul>
              </div>
              <div className='flex gap-[16px] flex-col w-fit'>
                <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                  Company
                </span>
                <ul className='flex flex-col gap-[12px] text-[#5F6D7E] text-[16px] font-medium leading-[24px] tracking-[-0.1px]'>
                  <li>About Us</li>
                  <li>News</li>
                  <li>Leadership</li>
                  <li>Media Kit</li>
                </ul>
              </div>
            </div>
          </div>
          {/** For Mobile */}
          {/* <div className='grid gap-x-[64px] gap-y-[24px] grid-cols-2 md:hidden lg:flex lg:justify-between'>
            <div className='flex gap-[16px] flex-col w-fit'>
              <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                Products
              </span>
              <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                <li>Features</li>
                <li>Solutions</li>
                <li>Integrations</li>
                <li>Enterprise</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div className='flex gap-[16px] flex-col w-fit'>
              <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                Resources
              </span>
              <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                <li>Partners</li>
                <li>Community</li>
                <li>Developers</li>
                <li>App</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='flex gap-[16px] flex-col'>
              <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                Why Choose Us?
              </span>
              <ul className='flex flex-col gap-[12px] text-[16px] text-[#5F6D7E] font-medium leading-[24px] tracking-[-0.1px]'>
                <li>Channels</li>
                <li>Scale</li>
                <li>Watch the Demo</li>
                <li>Our Competition</li>
              </ul>
            </div>
            <div className='flex gap-[16px] flex-col'>
              <span className='text-[16px] font-semibold leading-[24px] tracking-[-0.1px]'>
                Company
              </span>
              <ul className='flex flex-col gap-[12px] text-[#5F6D7E] text-[16px] font-medium leading-[24px] tracking-[-0.1px]'>
                <li>About Us</li>
                <li>News</li>
                <li>Leadership</li>
                <li>Media Kit</li>
              </ul>
            </div>
          </div> */}
          <div className='w-full flex flex-col justify-center gap-[8px] md:gap-[16px]'>
            <div className='flex flex-col justify-center items-center '>
              <div className='flex justify-center items-center bg-[#F5FAFF] h-[40px] w-[40px] p-[8px] rounded-[50%]'>
                <img src={Hexagon} alt="icon" />
              </div>
            </div>
            <span className='text-[#5F6D7E] text-[16px] leading-[24px] tracking-[-0.1px] text-center md:text-left lg:text-center'>
              © 2023 Lookscout. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer