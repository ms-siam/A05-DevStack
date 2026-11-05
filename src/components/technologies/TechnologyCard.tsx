import type { Technology } from '../../types/Technology';
import { FaStar } from "react-icons/fa";


const TechnologyCard = ({Technology}:{Technology:Technology}) => {
    return (
        <div className='border-2 border-gray-50 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
            <div className='flex justify-between items-center my-2'>
                <img src={Technology.icon} alt={Technology.name} className='w-12 h-12' />
                <span className='bg-gray-100 py-2 px-4 text-pink-500 rounded-full'>{Technology.badge}</span>
            </div>
            <h2 className='font-bold text-2xl my-2'>{Technology.name}</h2>
            <p className='my-2'>{Technology.description}</p>
            <div className='my-2 flex justify-between items-center'>
                <span className='badge p-4 bg-gray-100'>{Technology.category}</span>
                <span className=''>{Technology.difficulty}</span>
                <span className='flex items-center justify-between'><FaStar className='text-amber-300' />{Technology.rating}</span>
            </div>
            <button className='w-full font-semibold bg-linear-to-r from-[#ff4000] via-[#E5004F] to-[#8000FF] text-white hover:bg-linear-to-r hover:from-[#f05a28] hover:via-[#e42769] hover:to-[#923aea] hover:text-white py-2 px-4 rounded-2xl hover:-translate-y-0.5 hover:transition-all duration-300'>Add to Stack</button>
        </div>
    );
};

export default TechnologyCard;