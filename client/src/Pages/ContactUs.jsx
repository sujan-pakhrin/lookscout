import { useState } from 'react'


const ContactUs = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [message,setMessage] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res=await fetch('api/contact/add',
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            }          
        )
        const data=await res.json();
        if(data.success===false){
            setError(data.message)
        }
        setMessage(data.message)
        console.log(data);       
    }
    return (
        <div className='flex items-center justify-center h-[903px] bg-[#151B28] text-[#F9F9F9] md:h-[833px]'>
            <div className="max-w-[343px] w-full flex flex-col items-center gap-[48px] md:max-w-[704px] md:gap-[32px] lg:max-w-[1280px] lg:mx-[32px]">
                <div className='flex flex-col gap-[8px] lg:max-w-[800px]'>
                    <span className="text-[24px] font-bold leading-[32px] tracking-[-0.48px] text-center md:text-[32px] md:leading-[32px] md:tracking-[-0.62px]">
                        Get In Touch With Us
                    </span>
                    <span className="text-[16px] leading-[24px] tracking-[-0.1px] text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </span>
                </div>
                <div className='md:bg-[#1C2534] w-full flex items-center justify-center h-[553px] md:border-[1px] md:border-[#252D3C] md:rounded-[8px] lg:max-w-[1280px] lg:px-[32px]'>
                    <div className='flex flex-col gap-[16px] md:max-w-[640px] lg:max-w-[1152px] w-full'>
                        <div className="flex gap-[16px] flex-col md:flex-row md:justify-between">
                            <div className="flex flex-col gap-[8px] md:w-[704px] lg:w-[1280px] w-full">
                                <span className="text-[14px] leading-[20px] tracking-[-0.28px]">First Name</span>
                                <input
                                    id='firstName'
                                    type="text"
                                    className='outline-none text-[15px] leading-[22px] tracking-[-0.1px] text-[#A5ACBA] bg-[#2C3444] px-[16px] py-[12px] rounded-md w-full md:w-[100%] lg:w-[100%]'
                                    placeholder='Input'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-[8px] md:w-[704px] lg:w-[1280px] w-full">
                                <span className="text-[14px] leading-[20px] tracking-[-0.28px]">Email address</span>
                                <input
                                    id="email"
                                    type="text"
                                    className='outline-none text-[15px] leading-[22px] tracking-[-0.1px] text-[#A5ACBA] bg-[#2C3444] px-[16px] py-[12px] rounded-md w-full md:w-[100%] lg:w-[100%]'
                                    placeholder='Input'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex gap-[16px] flex-col md:flex-row md:justify-between">
                            <div className="flex flex-col gap-[8px] md:w-[704px] lg:w-[1280px] w-full">
                                <span className="text-[14px] leading-[20px] tracking-[-0.28px]">Phone Numper</span>
                                <input
                                    id="phone"
                                    type="number"
                                    min='0'
                                    className='outline-none text-[15px] leading-[22px] tracking-[-0.1px] text-[#A5ACBA] bg-[#2C3444] px-[16px] py-[12px] rounded-md w-full  md:w-[100%] lg:w-[100%]'
                                    placeholder='+000'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-[8px] md:w-[704px] lg:w-[1280px] w-full">
                                <span className="text-[14px] leading-[20px] tracking-[-0.28px]">Get In Touch With Us</span>
                                <select
                                    id='touchWith'
                                    type="text"
                                    className='outline-none font-semibold text-[15px] text-white leading-[22px] bg-[#2C3444] px-[16px] py-[12px] rounded-md w-full  md:w-[100%] lg:w-[100%]'
                                    onChange={handleChange}
                                >
                                    <option>Developers</option>
                                    <option>Channels</option>
                                    <option>Scale</option>
                                    <option>Leadership</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-top h-[145px]">
                            <span className="text-[14px] leading-[20px] tracking-[-0.28px] ">Message</span>
                            <textarea
                                id="message"
                                type="text"
                                className=' resize-none h-full align-top outline-none text-[15px] leading-[22px] tracking-[-0.1px] text-[#A5ACBA] bg-[#2C3444] px-[16px] py-[12px] rounded-md w-full'
                                placeholder='Hi! We are Lookscout...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className=" ">
                            <div className='flex items-center gap-[10px]'>
                                <input
                                    type="checkbox"
                                    className="bg-[#437EF7] "
                                />
                                <span className="text-[16px] leading-[24px] tracking-[-0.1px]">I agree with Lookscout Privacy Policy</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <button
                                onClick={handleSubmit}
                                className='py-[12px] w-full bg-[#437EF7] rounded-md font-semibold text-[15px] leading[22px] md:w-[88px]'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs