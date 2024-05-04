import { FaChevronDown } from "react-icons/fa"


const WebTabel = () => {
  return (
    <div className='flex justify-center h-[744px] items-center text-[#272D37] md:h-[708px] lg:h-[788px]'>
      <div className='flex flex-col gap-[32px] max-w-[343px] w-full md:max-w-[704px] lg:max-w-[1280px] lg:px-[32px] lg:gap-[64px]'>
        <div className='flex flex-col text-center gap-[12px] lg:gap-[16px] items-center'>
          <span className='font-bold text-[24px] leading-[32px] tracking-[-0.48px] md:text-[32px] md:leading-[40px] md:tracking-[-0.8px]'>
            Frequently asked questions
          </span>
          <span className='text-[16px] leading-[24px] tracking-[-0.1px] text-[#5F6D7E] lg:max-w-[704px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </span>
        </div>
        <div className='border border-[#EAEBF0] rounded-md '>
          <div className='flex items-center justify-between py-[16px] px-[32px] border-b border-[#EAEBF0] h-[92px]'>
            <span className='flex flex-col'>
              <span className='font-medium text-[18px] leading-[28px] tracking-[-0.1px]'>
                Authentification Issues
              </span>
              <span className='text-[16px] leading-[24px] tracking-[-0.1px] text-[#5F6D7E]'>
                Porttitor nec est nisi, id nunc.
              </span>
            </span>
            <span className='px-[12px] py-[4px] font-medium bg-[#F5FAFF] rounded-md text-[#437EF7]'>
              New
            </span>
          </div>
          <div className='flex items-center py-[16px] px-[32px] border-b border-[#EAEBF0]  h-[80px] lg:justify-between'>
            <span className='flex flex-col'>
              <span className='font-medium text-[16px] leading-[28px] tracking-[-0.1px]'>
                Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.
              </span>
            </span>
            <span className="lg:flex text-[#5F6D7E] font-medium gap-[40px] text-[16px] leading-[24px] tracking-[-0.1px] items-center hidden ">
              <span>Updated last week</span>
              <FaChevronDown />
            </span>
          </div>
          <div className='flex items-center py-[16px] px-[32px] border-b border-[#EAEBF0]  h-[80px] lg:justify-between'>
            <span className='flex flex-col'>
              <span className='font-medium text-[16px] leading-[24px] tracking-[-0.1px]'>
                Cras vitae, scelerisque tortor augue.
              </span>
            </span>
            <span className="lg:flex text-[#5F6D7E] font-medium gap-[40px] text-[16px] leading-[24px] tracking-[-0.1px] items-center hidden ">
              <span>Updated last week</span>
              <FaChevronDown />
            </span>
          </div>
          <div className='flex items-center py-[16px] px-[32px] border-b border-[#EAEBF0]  h-[80px] lg:justify-between'>
            <span className='flex flex-col'>
              <span className='font-medium text-[16px] leading-[24px] tracking-[-0.1px]'>
                Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.
              </span>
            </span>
            <span className="lg:flex text-[#5F6D7E] font-medium gap-[40px] text-[16px] leading-[24px] tracking-[-0.1px] items-center hidden ">
              <span>Updated last week</span>
              <FaChevronDown />
            </span>
          </div>
          <div className='flex items-center py-[16px] px-[32px] border-b border-[#EAEBF0]  h-[80px] lg:justify-between'>
            <span className='flex flex-col'>
              <span className='font-medium text-[16px] leading-[24px] tracking-[-0.1px]'>
                Pretium ultricies donec non mollis senectus lectus libero tellus.
              </span>
            </span>
            <span className="lg:flex text-[#5F6D7E] font-medium gap-[40px] text-[16px] leading-[24px] tracking-[-0.1px] items-center hidden ">
              <span>Updated last week</span>
              <FaChevronDown />
            </span>
          </div>
          <div className='flex items-center py-[16px] px-[32px] h-[80px] lg:justify-between'>
            <span className='flex flex-col'>
              <span className='font-medium text-[16px] leading-[24px] tracking-[-0.1px]'>
                Elit massa amet aenean ultrices vitae placerat augue.
              </span>
            </span>
            <span className="lg:flex text-[#5F6D7E] font-medium gap-[40px] text-[16px] leading-[24px] tracking-[-0.1px] items-center hidden ">
              <span>Updated last week</span>
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebTabel