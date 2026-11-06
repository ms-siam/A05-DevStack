import React from 'react';
import type { Technology } from '../../../types/Technology';
import StackItem from './StackItem';

interface TstackItems {
    stackItems: Technology[],
    deleteInStack: (id:Technology['id']) => void
}

const StackPanel = ({stackItems, deleteInStack}:TstackItems) => {
    return (
        <div className='border border-gray-100 p-5'>
            <h2>Your Stack</h2>
            <p>{stackItems.length} Technologies Selected</p>
            {
                stackItems.map((stackItem:Technology)=><StackItem key={stackItem.id} stackItem={stackItem} deleteInStack={deleteInStack}></StackItem>)
            }
            <button className='w-full'>Remove All</button>
        </div>
    );
};

export default StackPanel;