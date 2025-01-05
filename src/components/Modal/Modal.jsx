import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({open, setOpen, children, position, index}) => {
    return (
        <div className={`rounded-md bg-white fixed ${position} p-8 shadow-md ${index} overflow-auto`}>
            <div className='mr-auto flex justify-end'>
            <RxCross2 onClick={() =>setOpen(false)} className="text-3xl mb-4 text-violet-800 cursor-pointer"/>
            </div>
            {children}
        </div>
    );
};

export default Modal;