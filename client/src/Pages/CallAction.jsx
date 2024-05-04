

const CallAction = () => {
  return (
    <div className='flex items-center justify-center h-[362px] bg-[#2B63D9] md:h-[270px] lg:h-[318px]'>
      <div className='max-w-[343px] w-full flex flex-col gap-[16px] md:gap-[32px] md:max-w-[704px]'>
        <div className='text-center flex flex-col gap-[8px] text-white'>
          <span className='font-semibold text-[14px] leading-[20px] tracking-[-0.1px]'>
            1% OF THE INDUSTRY
          </span>
          <span className='font-bold text-[28px] leading-[36px] tracking-[-0.48px] md:text-[32px] md:leading-[42px] md:tracking-[-0.42px]'>
            Welcome to your new digital reality that <br/> which will rock your world truly at all.
          </span>
        </div>
        <div className='w-full flex flex-col gap-[16px] md:flex-row items-center md:justify-center'>
          <button className='w-full md:w-[109px] bg-white py-[12px] rounded-md font-semibold text-[15px] text-[#437EF7] leading-[22px]'>Sign up</button>
          <button className='w-full md:w-[109px] bg-[#437EF7] py-[12px] rounded-md font-semibold text-[15px] text-white leading-[22px]'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default CallAction