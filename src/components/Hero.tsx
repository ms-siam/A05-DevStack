import banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <div className='grid grid-cols-2 container my-15 mx-auto'>
            <div className="flex flex-col">
                <h2>Build Your Ideal</h2>
                <h2>Development Stack</h2>
                <p>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className='flex justify-around items-center gap-5'>
                <button className='btn btn-secondary rounded-2xl'>Explore Technologies</button>
                <button className="btn rounded-2xl">Learn More</button>
            </div>
            </div>

            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Hero;