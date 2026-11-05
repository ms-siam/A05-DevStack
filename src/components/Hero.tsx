import banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <div className='grid grid-cols-2 container items-start px-3 my-7 mx-auto'>
            <div className="flex flex-col pt-20">
                <h2 className='text-6xl font-semibold'>Build Your Ideal</h2>
                <h2 className='text-6xl font-semibold mt-2'>
                    <span className="inline-block bg-linear-to-r from-[#ff4000] via-[#E5004F] to-[#8000FF] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2> 
                <p className='font-light my-5'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className='flex items-center mt-10 gap-5'>
                    <button className='bg-linear-to-r from-[#ff4000] via-[#E5004F] to-[#8000FF] text-white py-2 px-4 rounded-2xl'>Explore Technologies</button>
                    <button className="border border-gray-200 p-2 w-45 rounded-2xl">Learn More</button>
                </div>
            </div>

            <div className='mx-auto p-10'>
                <img src={banner} className='w-full max-w-md scale-[1.2] object-contain' alt="" />
            </div>
        </div>
    );
};

export default Hero;