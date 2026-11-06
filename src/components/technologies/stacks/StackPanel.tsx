import React from 'react';
import type { Technology } from '../../../types/Technology';
import StackItem from './StackItem';

interface TstackItems {
    stackItems: Technology[],
    deleteInStack: (id:Technology['id']) => void
}

const StackPanel = ({stackItems, deleteInStack}:TstackItems) => {
    return (
        <div className='border border-gray-100 p-5 rounded-2xl'>
            <h2 className='font-bold text-2xl my-1.5'>Your Stack</h2>
            <p className='text-gray-500 text-xs mb-3'>{stackItems.length} Technologies Selected</p>
            {
                stackItems.map((stackItem:Technology)=><StackItem key={stackItem.id} stackItem={stackItem} deleteInStack={deleteInStack}></StackItem>)
            }
            <button className='w-full border rounded-2xl my-2 border-gray-200 py-2 text-pink-600 font-bold hover:text-pink-700 cursor-text hover:bg-gray-200 transition-all 300ms hover:-translate-y-1'>Remove All</button>
        </div>
    );
};

export default StackPanel;