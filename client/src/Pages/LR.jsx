import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const LR = () => {
  return (
    <div className='flex justify-center items-center h-[741px] text-[#272D37] md:h-[874px] lg:h-[688px]'>
      <div className='max-w-[343px] w-full md:max-w-[704px] lg:max-w-[1280px]'>
        <div className='flex flex-col gap-[32px] md:gap-[48px] lg:px-[32px] lg:flex-row lg:gap-[124px] lg:items-center'>
          <div className='flex flex-col gap-[32px] md:gap-[48px] lg:gap-[40px] '>
            <div className='flex flex-col gap-[24px] md:gap-[24px]'>
              <span className='flex flex-col lg:gap-[16px]'>
                <span className='font-semibold text-[28px] tracking-[-0.56px] leading-[36px] md:text-[32px] md:tracking-[-0.42px] md:leading-[42px]'>
                  Demonstrate branding consequently think outside
                </span>
                <span className='text-[16px] leading[24px] tracking-[-0.1px] text-[#5F6D7E] hidden lg:flex'>
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                </span>
              </span>
              <div className='flex flex-col gap-[10px] text-[16px] leading[24px] tracking-[-0.1px] text-[#5F6D7E]'>
                <span className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faCheck} className='text-[#437EF7]' />
                  <span>
                    Enterprise-grade security
                  </span>
                </span>
                <span className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faCheck} className='text-[#437EF7]' />
                  <span>
                    99.9% guaranteed uptime SLA
                  </span>
                </span>
                <span className='flex items-center gap-2'>
                  <FontAwesomeIcon icon={faCheck} className='text-[#437EF7]' />
                  <span>
                    Designated customer success team
                  </span>
                </span>
              </div>
            </div>
            <div>
              <button className='bg-[#437EF7] text-white flex items-center gap-3 px-[18px] py-[12px] rounded-md w-fit'>
                Start Now
                <FontAwesomeIcon icon={faArrowRight} className='h-[11.32px] w-[10px]' />
              </button>
            </div>
          </div>
          <div className="h-[343px] w-full flex justify-center items-end md:h-[460px]"
            style={{
              backgroundImage: `url('https://img.freepik.com/premium-photo/neat-organised-workspace-with-chair-lamp_23-2148592345.jpg?w=1380')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className='bg-white w-[308px] rounded-lg flex flex-col items-center mb-5 gap-2 py-4'>
              <span className='font-bold text-[16px] tracking-tight'>Check Us Out</span>
              <span className='text-center leading-[16px]'>
                <span className='bg-[#f7f6f6] px-[120px] py-[-2px] text-[10px]'></span><br />
                <span className='bg-[#f7f6f6] px-[70px] py-[-2px] text-[10px]'></span>
              </span>
              <button className='bg-[#437EF7] text-[10px] text-white px-10 py-2 rounded-[4px] mt-1'>
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LR