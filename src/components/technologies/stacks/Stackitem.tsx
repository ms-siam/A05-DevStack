import React from 'react';
import { IoMdClose } from "react-icons/io";
import type { Technology } from '../../../types/Technology';
interface TstackItems{
    stackItem: Technology;
}

const StackItem = ({stackItem}:TstackItems) => {
    console.log(stackItem)
    console.log("StackItem received:", stackItem);

    return (
        <div>
            <img src={stackItem.icon} alt={stackItem.name} className='w-12 h-12' />
            <div>
                <h2>we</h2>
                <p></p>
            </div>
            <button><IoMdClose className="scale-125" /></button>
        </div>
    );
};

export default StackItem;