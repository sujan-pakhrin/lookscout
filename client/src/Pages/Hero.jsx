

const Hero = () => {
  return (
    <div className='flex justify-center items-center bg-[#f8f9fb] h-[376px] md:h-[352px] lg:h-[404px]'>
      <div className='max-w-[343px] w-full flex flex-col justify-between gap-[32px] md:max-w-[672px] md:gap-0 lg:max-w-[640px] lg:gap-[16px]'>
        <span className='text-[14px] font-semibold uppercase leading-[20px] text-[#437EF7] tracking-[-0.1px] text-center'>
          1% Of The Industry
        </span>
        <span className="flex flex-col gap-[16px] md:gap-[24px]">
          <span className='text-center text-[36px] font-bold leading-[44px] text-[#272D37] tracking-[-0.72px] md:text-[52px] md:leading-[60px] md:tracking-[-0.6px]'>
            Hype got you here. <span className="lg:hidden">of it.</span><br className="hidden lg:flex"/> Stay for best ever help.
          </span>
          <span className='text-center text-[18px] leading-[26px] text-[#5F6D7E] tracking-[-0.1px]'>
            We’ve been told it is possible to
            revolutionize the payment industry. We
            have not reinvented the wheel, we
            decided to build upon it - successfully.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Hero