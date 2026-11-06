import type { Technology } from '../../../types/Technology';
import StackItem from './StackItem';

interface TstackItems {
    stackItems: Technology[],
    deleteInStack: (id: Technology['id']) => void,
    removeAllFromStack: () => void
}

const StackPanel = ({ stackItems, deleteInStack, removeAllFromStack }: TstackItems) => {
    return (
        <div className='border border-gray-100 p-5 rounded-2xl'>
            <h2 className='font-bold text-2xl my-1.5'>Your Stack</h2>
            <p className='text-gray-500 text-xs mb-3'>{stackItems.length} Technologies Selected</p>
            {stackItems.length > 0 ? (
                <>
                    {
                        stackItems.map((stackItem: Technology) => <StackItem key={stackItem.id} stackItem={stackItem} deleteInStack={deleteInStack}></StackItem>)
                    }
                    <button onClick={() => { removeAllFromStack() }}
                        className='w-full border rounded-2xl my-2 border-gray-200 py-2 text-pink-600 font-bold hover:text-pink-700 cursor-text hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1'>Remove All</button>
                </>
            ) : (
                <div className='flex flex-col justify-center items-center mt-8 py-10 px-4 mb-4 border border-dashed border-gray-300 rounded-2xl text-center'>
                    <h3 className='font-semibold text-lg xl:text-xl text-gray-500'>Your Stack Is Empty</h3>
                    <p className='font-light text-gray-400 mt-3'>Add technologies to build your stack</p >
                </div>
            )}
        </div>
    );
};

export default StackPanel;