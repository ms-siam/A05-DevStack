import React from 'react';
import { IoMdClose } from "react-icons/io";
import type { Technology } from '../../../types/Technology';
interface TstackItems{
    stackItems: Technology
}

const StackItem = (stackItem:TstackItems) => {
    return (
        <div>
            <img src="" alt="" />
            <div>
                <h2></h2>
                <p></p>
            </div>
            <button><IoMdClose className="scale-125" /></button>
        </div>
    );
};

export default StackItem;