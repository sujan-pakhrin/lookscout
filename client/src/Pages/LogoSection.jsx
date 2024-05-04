
import Twilio from '../assets/BrandLogo/Twilio.svg'
import Slack from '../assets/BrandLogo/Slack.svg'
import Google from '../assets/BrandLogo/Google.svg'
import Mailchimp from '../assets/BrandLogo/Mailchimp.svg'
import PayPal from '../assets/BrandLogo/PayPal.svg'
import Pinterest from '../assets/BrandLogo/Pinterest.svg'

const LogoSection = () => {
  return (
    <div className='flex justify-center items-center bg-[#2B63D9] h-[416px] md:h-[176px]'>
      <div className="max-w-[343px] w-full grid items-center grid-col gap-[32px] md:grid-cols-4 md:max-w-[704px]">
        <div className='flex w-full items-center justify-center'>
          <img src={Twilio} alt="Twilio" />
        </div>
        <div className='flex w-full items-center justify-center'>
          <img src={Slack} alt="Slack" />
        </div>
        <div className='flex w-full items-center justify-center'>
          <img src={Google} alt="Google" />
        </div>
        <div className='flex w-full items-center justify-center'>
          <img src={PayPal} alt="PayPal" />
        </div>
        <span className='hidden md:flex'></span>
        <div className='flex w-full items-center justify-center'>
          <img src={Pinterest} alt="Pinterest" />
        </div>
        <div className='flex w-full items-center justify-center'>
          <img src={Mailchimp} alt="Mailchimp" />
        </div>
      </div>
    </div>
  )
}

export default LogoSection 