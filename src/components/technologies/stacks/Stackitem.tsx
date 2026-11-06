import React from 'react';
import { IoMdClose } from "react-icons/io";
import type { Technology } from '../../../types/Technology';
interface TstackItems{
    stackItem: Technology;
}

const StackItem = ({stackItem}:TstackItems) => {

    return (
        <div className='flex justify-between'>
            <img src={stackItem.icon} alt={stackItem.name} className='w-12 h-12' />
            <div>
                <h2>{stackItem.name}</h2>
                <p>{stackItem.category}</p>
            </div>
            <button><IoMdClose className="scale-125" /></button>
        </div>
    );
};

export default StackItem;