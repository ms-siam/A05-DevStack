import type { Technology } from '../../types/Technology';
import { FaStar } from "react-icons/fa";
import './TechnologyCard.css'
interface TechnologyCardProps {
    Technology: Technology;
    isInStack: boolean;
    onAdd: (Technology: Technology) => void;
}
const TechnologyCard = ({ Technology, isInStack, onAdd }: TechnologyCardProps) => {




    return (
        <div className={`border-2 rounded-2xl p-5 shadow-sm transition-all duration-300 ${isInStack
            ? 'border-purple-500'
            : 'border-gray-50 hover:shadow-xl hover:-translate-y-1'
            }`}>
            <div className='flex justify-between items-center my-4'>
                <img src={Technology.icon} alt={Technology.name} className='w-12 h-12' />
                <span className='bg-gray-100 py-2 px-4 text-pink-500 rounded-full'>{Technology.badge}</span>
            </div>
            <h2 className='font-bold text-2xl my-3'>{Technology.name}</h2>
            <p className='my-3'>{Technology.description}</p>
            <div className='my-4 flex flex-wrap justify-between items-center gap-2'>
                <span className='badge text-3 p-4 bg-gray-100'>{Technology.category}</span>
                <span className='text-xs text-gray-500 whitespace-nowrap'>{Technology.difficulty}</span>
                <span className='flex items-center gap-1 whitespace-nowrap'><FaStar className='text-amber-300' />{Technology.rating}</span>
            </div>
            <button
                disabled={isInStack}
                onClick={() => onAdd(Technology)}
                className={`btn-gradient relative w-full mt-5 mb-2 ${isInStack
                    ? 'cursor-not-allowed after:content-[""] after:absolute after:inset-0 after:rounded-2xl after:bg-white/50'
                    : ''
                    }`}
            >
                {isInStack ? '✓ Added to Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechnologyCard;