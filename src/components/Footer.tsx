import logo from '../assets/logo-text.png';

const linkStyle = 'w-fit select-none text-[15px] text-gray-500 hover:text-pink-500 cursor-text';
const headingStyle = 'text-4 font-semibold text-gray-900 uppercase';

const Footer = () => {
    return (
        <footer className='container mx-auto mt-16 mb-12'>
            <div className="grid gap-10 p-2 grid-cols-5 mb-10">
                <div className="col-span-2 flex flex-col justify-start gap-8">
                    <img src={logo} alt="" className='w-32' />
                    <p className='w-120'>Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className='flex justify-start gap-5'>
                        <a href="http://www.github.com/ms-siam" className={linkStyle}>GitHub</a>
                        <a href="http://www.x.com" className={linkStyle}>Twitter</a>
                        <a href="http://www.linkedin.com" className={linkStyle}>LinkedIn</a>
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
            <div></div>
        </footer>
    );
};

export default Footer;