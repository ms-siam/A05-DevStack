import { IoMdClose } from "react-icons/io";
import type { Technology } from '../../../types/Technology';
interface TstackItems {
    stackItem: Technology;
    deleteInStack: (id:Technology['id']) => void

}

const StackItem = ({ stackItem, deleteInStack }: TstackItems) => {

    return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-xl mb-3">
        
        <div className='flex items-center gap-4'>
            <img src={stackItem.icon} alt={stackItem.name} className='w-10 h-10 object-contain' />
            
            <div className='flex flex-col'>
                <h2 className='text-lg font-bold text-slate-800'>{stackItem.name}</h2>
                <p className='text-sm text-slate-400 font-medium'>{stackItem.category}</p>
            </div>
        </div>

        <button className='text-slate-400 hover:text-slate-800 transition-colors p-2 cursor-pointer'
        onClick={()=> deleteInStack(stackItem.id)}>
            <IoMdClose className="text-2xl" />
        </button>

    </div>
);
};

export default StackItem;