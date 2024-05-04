import Manager from '../assets/Team/pic2.png';
import LeadDesigner from '../assets/Team/pic1.png';
import UXUIDesigner from '../assets/Team/pic3.png';
import { } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <div className='flex items-center justify-center h-[1461px] text-[#272D37] md:h-[1039px] lg:h-[750px]'>
      <div className='max-w-[311px] w-full md:max-w-[704px] flex flex-col gap-[32px] md:gap-[40px] lg:gap-[64px] lg:max-w-[1280px] items-center'>
        <div className='text-center flex flex-col gap-[12px] max-w-[800px] w-full'>
          <span className=' font-bold text-[24px] leading-[32px] tracking-[-0.48px] md:text-[32px] md:leading-[40px] md:tracking-[-0.8px]'>
            The Core of Our Team
          </span>
          <span className='text-[#5F6D7E] text-[16px] leading-[24px] tracking-[-0.1px]'>
            Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.
          </span>
        </div>
        <div className='grid grid-col gap-[32px] md:grid-cols-2 lg:px-[32px] lg:grid-cols-3'>
          <div className='w-full flex flex-col gap-[16px]'>
            <img src={Manager} alt="" className='w-full h-[282px] object-cover rounded-md' />
            <div className='flex flex-col gap-[12px]'>
              <span className='flex flex-col'>
                <span className=' font-semibold text-[20px] leading-[28px] tracking-[-0.4px]'>Morgan Drew</span>
                <span className='text-[16px] leading-[24px] tracking-[-0.1px] text-[#5F6D7E]'>Manager</span>
              </span>
              <div className='flex gap-[16px] '>
                <FaTwitter className='w-[20px] h-[20px]' />
                <FaFacebook className='w-[20px] h-[20px]' />
                <FaLinkedin className='w-[20px] h-[20px]' />
                <FaTelegram className='w-[20px] h-[20px]' />
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col gap-[16px]'>
            <img src={LeadDesigner} alt="" className='w-full h-[282px] object-cover rounded-md' />
            <div className='flex flex-col gap-[12px]'>
              <span className='flex flex-col'>
                <span className=' font-semibold text-[20px] leading-[28px] tracking-[-0.4px]'>Jeffery Walker</span>
                <span className='text-[16px] leading-[24px] tracking-[-0.1px] text-[#5F6D7E]'>Lead Designer</span>
              </span>
              <div className='flex gap-[16px] '>
                <FaTwitter className='w-[20px] h-[20px]' />
                <FaFacebook className='w-[20px] h-[20px]' />
                <FaLinkedin className='w-[20px] h-[20px]' />
                <FaTelegram className='w-[20px] h-[20px]' />
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col gap-[16px]'>
            <img src={UXUIDesigner} alt="" className='w-full h-[282px] object-cover rounded-md' />
            <div className='flex flex-col gap-[12px]'>
              <span className='flex flex-col'>
                <span className=' font-semibold text-[20px] leading-[28px] tracking-[-0.4px]'>Andrew Steve</span>
                <span className='text-[16px] leading-[24px] tracking-[-0.1px] text-[#5F6D7E]'>UI/UX Designer</span>
              </span>
              <div className='flex gap-[16px] '>
                <FaTwitter className='w-[20px] h-[20px]' />
                <FaFacebook className='w-[20px] h-[20px]' />
                <FaLinkedin className='w-[20px] h-[20px]' />
                <FaTelegram className='w-[20px] h-[20px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection