import banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <div className='grid grid-cols-2 container my-27 mx-auto'>
            <div className="flex flex-col">
                <h2 className='text-5xl font-semibold'>Build Your Ideal</h2>
                <h2 className='text-5xl font-semibold mb-5'>
                    <span className="inline-block bg-linear-to-r from-[#ff4000] via-[#E5004F] to-[#8000FF] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>                <p className='font-light mb-10'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className='flex items-center gap-5'>
                    <button className='bg-linear-to-r from-[#ff4000] via-[#E5004F] to-[#8000FF] text-white p-2 rounded-2xl'>Explore Technologies</button>
                    <button className="border-1 border-gray-200 p-2 w-45 rounded-2xl">Learn More</button>
                </div>
            </div>

            <div className='mx-auto'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Hero;