import banner from '../assets/banner-stack.png'
import '../App.css'
const Hero = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 container md:items-start px-4 md:px-3 md:my-7 mx-auto'>
            <div className="flex flex-col items-center md:items-start pt-8 md:pt-20">
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-center md:text-left'>Build Your Ideal</h2>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-semibold mt-2 text-center md:text-left'>
                    <span className="inline-block bg-linear-to-r from-[#ff4000] via-[#E5004F] to-[#8000FF] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2> 
                <p className='font-light my-5 text-center md:text-left'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p >
                <div className='flex items-center justify-center md:justify-start mt-6 md:mt-10 gap-3 md:gap-5'>
                    <button className='btn-gradient w-fit'>Explore Technologies</button>
                    <button className="border border-gray-200 p-2 w-45 rounded-2xl hover:text-pink-500 hover:-translate-y-1 duration-300 transition-all ">Learn More</button>
                </div>
            </div>

            <div className='mx-auto p-4 md:p-10'>
                < img src={banner} className='w-full max-w-md scale-100 md:scale-[1.2] object-contain' alt="" />
            </div>
        </div>
    )
;
};

export default Hero;