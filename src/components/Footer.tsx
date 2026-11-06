import logo from '../assets/logo-text.png';
import { FaRegCopyright } from "react-icons/fa";


const linkStyle = 'w-fit select-none text-[15px] text-gray-500 hover:text-pink-500 cursor-pointer';
const socialStyle = 'w-fit select-none text-[15px] text-black hover:text-pink-500 cursor-pointer';
const headingStyle = 'text-4 font-semibold text-gray-900 uppercase';

const Footer = () => {
    return (
        <footer className='container mx-auto mt-16 mb-12'>
            <div className="grid gap-10 p-2 grid-cols-5 mb-10">
                <div className="col-span-2 flex flex-col justify-start gap-8">
                    <img src={logo} alt="" className='w-32' />
                    <p className='w-120 text-gray-500'>Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className='flex justify-start gap-5'>
                        <a href="http://www.github.com/ms-siam" className={socialStyle}>GitHub</a>
                        <a href="http://www.x.com" className={socialStyle}>Twitter</a>
                        <a href="http://www.linkedin.com" className={socialStyle}>LinkedIn</a>
                    </div>
                </div>

                <div className="col-span-1">
                    <h3 className={headingStyle}>Product</h3>
                    <div className='flex flex-col gap-3 mt-4'>
                        <a href="/" className={linkStyle}>Home</a>
                        <a href="/technologies" className={linkStyle}>Technologies</a>
                        <a href="#" className={linkStyle}>Projects</a>
                    </div>
                </div>

                <div className="col-span-1">
                    <h3 className={headingStyle}>Company</h3>
                    <div className='flex flex-col gap-3 mt-4'>
                        <a href="#" className={linkStyle}>About</a>
                        <a href="#" className={linkStyle}>Contact</a>
                        <a href="#" className={linkStyle}>Careers</a>
                    </div>
                </div>

                <div className="col-span-1">
                    <h3 className={headingStyle}>Legal</h3>
                    <div className='flex flex-col gap-3 mt-4'>
                        <a href="#" className={linkStyle}>Privacy Policy</a>
                        <a href="#" className={linkStyle}>Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className='divider mb-5'></div>
            <div className='flex justify-between'>
                <p className='text-gray-500 text-3 flex items-center gap-1'><FaRegCopyright className='text-gray-500 inline' /> 2026 DevStack. All Rights Reserved</p>
                <div className='flex gap-4'>
                    <a href="#" className={linkStyle}>Privacy</a>
                    <a href="#" className={linkStyle}>Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;