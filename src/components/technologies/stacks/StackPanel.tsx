import React from 'react';
import type { Technology } from '../../../types/Technology';
import StackItem from './Stackitem';

interface TstackItems {
    stackItems: Technology[]
}

const StackPanel = ({stackItems}:TstackItems) => {
    return (
        <div className='border border-gray-100 p-5'>
            <h2>Your Stack</h2>
            <p>N Technologies Selected</p>
            {
                stackItems.map((stackItem:Technology)=><StackItem key={stackItem.id} stackItem={stackItem}></StackItem>)
            }
            <button className='w-full'>Remove All</button>
        </div>
    );
};

export default StackPanel;