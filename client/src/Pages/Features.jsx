// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EWO from '../assets/FeaturesIcon/EWO.svg'
import SP from '../assets/FeaturesIcon/SP.svg'
import MA from '../assets/FeaturesIcon/MA.svg'
import FC from '../assets/FeaturesIcon/FC.svg'
import EI from '../assets/FeaturesIcon/EI.svg'
import WB from '../assets/FeaturesIcon/WB.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Features = () => {
  return (
    <div className='flex justify-center items-center h-[1474px] text-[#272D37] md:h-[908px] lg:h-[454px]'>
      <div className='flex flex-col max-w-[339px] w-[100%] gap-[32px] md:max-w-[704px] lg:gap-[64px] lg:max-w-[1280px]'>
        <div className='flex justify-center flex-col items-center lg:gap-[8px]'>
          <span className='font-bold text-[24px] leading-[32px] tracking-[-0.48px] text-[#272D37]'>
            Messaging for all
          </span>
          <span className='text-[16px] leading-[24px] tracking-[-0.1px] hidden lg:flex'>
            User generated content in real-time will have multiple touchpoints for offshoring.
          </span>
        </div>
        <div className='flex flex-col gap-[40px] md:flex-row'>
          <div className='flex flex-col gap-[40px] lg:px-[32px] lg:flex-row lg:gap-[32px]'>
            <div className='flex flex-col gap-[16px]'>
              <div className='bg-[#437EF7] h-[48px] w-[48px] flex items-center justify-center rounded-[50%]'>
                <img src={EWO} alt="" className='h-[24px] w-[32px]' />
              </div>
              <span className='flex flex-col gap-[8px]'>
                <span className='font-semibold text-[20px] tracking-[-0.4px] leading-[28px]'>
                  Easier Work Organization
                </span>
                <span className='text-[#5F6D7E] font-regular text-[16px] tracking-[-0.32px] leading-[24px]'>
                  Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.
                </span>
              </span>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <div className='bg-[#437EF7] h-[48px] w-[48px] flex items-center justify-center rounded-[50%]'>
                <img src={SP} alt="" className='h-[24px] w-[32px]' />
              </div>

              <span className='flex flex-col gap-[8px]'>
                <span className='font-semibold text-[20px] tracking-[-0.4px] leading-[28px]'>
                  Streamlined Processes
                </span>
                <span className='text-[#5F6D7E] font-regular text-[16px] tracking-[-0.32px] leading-[24px]'>
                  Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.
                </span>
              </span>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <div className='bg-[#437EF7] h-[48px] w-[48px] flex items-center justify-center rounded-[50%]'>
                <img src={MA} alt="" className='h-[24px] w-[32px]' />
              </div>
              <span className='flex flex-col gap-[8px]'>
                <span className='font-semibold text-[20px] tracking-[-0.4px] leading-[28px]'>
                  Marketing Analytics
                </span>
                <span className='text-[#5F6D7E] font-regular text-[16px] tracking-[-0.32px] leading-[24px]'>
                  Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.
                </span>
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-[40px] lg:hidden'>
            <div className='flex flex-col gap-[16px]'>
              <div className='bg-[#437EF7] h-[48px] w-[48px] flex items-center justify-center rounded-[50%]'>
                <img src={FC} alt="" className='h-[24px] w-[32px]' />
              </div>
              <span className='flex flex-col gap-[8px]'>
                <span className='font-semibold text-[20px] tracking-[-0.4px] leading-[28px]'>
                  Fast Connection
                </span>
                <span className='text-[#5F6D7E] font-regular text-[16px] tracking-[-0.32px] leading-[24px]'>
                  Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.
                </span>
              </span>
              <span className=' text-[#437EF7] flex items-center gap-3'>
                <span className='text-[15px] font-semibold leading-[22px]'>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className='w-[11.5px] h-5' />
              </span>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <div className='bg-[#437EF7] h-[48px] w-[48px] flex items-center justify-center rounded-[50%]'>
                <img src={EI} alt="" className='h-[24px] w-[32px]' />
              </div>
              <span className='flex flex-col gap-[8px]'>
                <span className='font-semibold text-[20px] tracking-[-0.4px] leading-[28px]'>
                  Easier Integrations
                </span>
                <span className='text-[#5F6D7E] font-regular text-[16px] tracking-[-0.32px] leading-[24px]'>
                  Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.
                </span>
              </span>
              <span className=' text-[#437EF7] flex items-center gap-3'>
                <span className='text-[15px] font-semibold leading-[22px]'>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className='w-[11.5px] h-5' />
              </span>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <div className='bg-[#437EF7] h-[48px] w-[48px] flex items-center justify-center rounded-[50%]'>
                <img src={WB} alt="" className='h-[24px] w-[32px]' />
              </div>
              <span className='flex flex-col gap-[8px]'>
                <span className='font-semibold text-[20px] tracking-[-0.4px] leading-[28px]'>
                  Workflow Builder
                </span>
                <span className='text-[#5F6D7E] font-regular text-[16px] tracking-[-0.32px] leading-[24px]'>
                  Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.
                </span>
              </span>
              <span className=' text-[#437EF7] flex items-center gap-3'>
                <span className='text-[15px] font-semibold leading-[22px]'>Learn More</span>
                <FontAwesomeIcon icon={faArrowRight} className='w-[11.5px] h-5' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features