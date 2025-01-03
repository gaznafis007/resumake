"use client"
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import DefaultButton from '../DefaultButton/DefaultButton';
import { MdDone } from "react-icons/md";
import { RiFileDownloadFill } from "react-icons/ri";

const ResumeTitle = () => {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState('Resume No. 1')
    const handleEditTitle = (event) =>{
        event.preventDefault();
        const newTitle = event.target.title.value;
        setTitle(newTitle);
        setEdit(false);
    }
    return (
        <section className='w-full bg-white p-4 rounded-lg flex flex-row justify-between'>
            <div className='flex flex-row space-x-2 items-center'>
            {
                edit ? (
                    <>
                        <form onSubmit={handleEditTitle} className="flex flex-row space-x-2">
                            <input type="text" name="title" placeholder='your resume title' className='p-3 border text-slate-800 border-slate-800 rounded-lg' />
                            <DefaultButton btnType={'submit'}><MdDone className='text-xl'/></DefaultButton>
                        </form>
                    </>
                ) : <h1 className="text-slate-800 text-2xl font-semibold">{title}</h1>
            }
            {
                !edit && <FaEdit onClick={() => setEdit(true)} className='text-slate-400 cursor-pointer'/>
            }
            </div>
            <DefaultButton>
                <div className="flex flex-row space-x-2 items-center">
                    <RiFileDownloadFill/>
                    <h2>Download</h2>
                </div>
            </DefaultButton>
        </section>
    );
};

export default ResumeTitle;