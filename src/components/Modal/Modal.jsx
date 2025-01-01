import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({open, setOpen, children, position}) => {
    return (
        <div className={`rounded-md bg-white fixed ${position} p-8 shadow-md`}>
            <div className='mr-auto'>
            <RxCross2 onClick={() =>setOpen(false)} className="text-3xl mb-4 text-violet-800"/>
            </div>
            {children}
        </div>
    );
};

export default Modal;