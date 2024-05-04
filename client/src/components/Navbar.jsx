import { useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import Logo from '../assets/CompanyLogo/CompanyLogo.svg';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-center h-[64px] border-b border-[#EAEBF0] bg-white sticky top-0 text-[#272D37] lg:h-[86px]'>
            <nav className='flex justify-between items-center max-w-[343px] w-full md:max-w-[704px] lg:max-w-[1280px] lg:px-[32px] relative'>
                <div className='flex items-center w-[128px] h-[32px] justify-between lg:w-full'>
                    <div className='flex gap-[64px]'>
                        <Link to='/'>
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <div className='hidden lg:flex items-center'>
                            <ul className='flex gap-[32px] font-semibold text-[15px] leading-[22px]'>
                                <Link to='/'>
                                    <li>Home</li>
                                </Link>

                                <li>Our Products</li>
                                <li className='flex gap-[8px] items-center'>
                                    <span>Resources</span>
                                    <FaChevronDown />
                                </li>
                                <Link to='/contact'>
                                    <li>Contacts</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden lg:flex items-center gap-2'>
                        <button className='px-[18px] py-[12px] font-semibold text-[15px] leading-[22px] text-[#437EF7] rounded-md'>Sign Up</button>
                        <button className='px-[18px] py-[12px] bg-[#437EF7] font-semibold text-[15px] leading-[22px] text-white rounded-md'>Log In</button>
                    </div>
                </div>
                <div className='lg:hidden'>
                    {open ?
                        <FaTimes className='text-xl h-[17px] w-[17px]' onClick={() => setOpen((prev) => !prev)} /> :
                        <FaBars className='text-xl h-[17px] w-[17px] font-thin' onClick={() => setOpen((prev) => !prev)} />}
                    {open &&
                        <div className="absolute top-[64px] right-0 bg-white flex justify-center items-center px-16 py-10 border rounded-xl border-[#EAEBF0]">
                            <ul className='flex flex-col  items-center gap-[48px] font-semibold text-[15px] leading-[22px]'>
                            <Link to='/'>
                                    <li>Home</li>
                                </Link>
                                <li>Our Products</li>
                                <li className='flex gap-[8px] items-center'>
                                    <span>Resources</span>
                                    <FaChevronDown />
                                </li>
                                <Link to='/contact'>
                                    <li>Contacts</li>
                                </Link>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
