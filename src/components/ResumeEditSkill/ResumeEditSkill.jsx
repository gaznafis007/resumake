import React, { useContext } from 'react';
import Button from '../Button/Button';
import { FaTrash } from 'react-icons/fa';
import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import DefaultButton from '../DefaultButton/DefaultButton';
import { useDispatch } from 'react-redux';
import { updateSkills } from '@/redux/features/skillSlice';

const ResumeEditSkill = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext);
    const dispatch = useDispatch();
    const handleSave = () =>{
        setSectionCollapse('')
    }
    const handleUpdateSkills = (field, value) =>{
        dispatch(updateSkills({field, value}))
    }
    const handleDeleteSkills = (field) =>{
        const value = ''
        dispatch(updateSkills({field, value}))
    }
    return (
        <div className='mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800 capitalize">edit your skills</h2>
            <div className="flex flex-col space-y-2 mt-3">
                <div className="flex flex-row justify-between items-center">
                <label className='text-purple-800 capitalize'>enter your <span className='font-semibold'><i>expertise</i></span></label>
                <Button handler={handleDeleteSkills} params={'expertise'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
                </div>
                <textarea onChange={(event) => handleUpdateSkills('expertise', event.target.value)} type='text' className='border border-purple-800 bg-purple-300 p-6 rounded-lg text-purple-800'></textarea>
            </div>
            <div className="flex flex-col space-y-2 mt-3">
            <div className="flex flex-row justify-between items-center">
                <label className='text-purple-800 capitalize'>enter your <span className='font-semibold'><i>comfortable</i></span> skills</label>
                <Button handler={handleDeleteSkills} params={'comfortable'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
                </div>
                <textarea onChange={(event) => handleUpdateSkills('comfortable', event.target.value)} type='text' className='border border-purple-800 bg-purple-300 p-6 rounded-lg text-purple-800'></textarea>
            </div>
            <div className="flex flex-col space-y-2 mt-3 mb-3">
            <div className="flex flex-row justify-between items-center">
                <label className='text-purple-800 capitalize'>enter your <span className='font-semibold'><i>familiar</i></span> technologies</label>
                <Button handler={handleDeleteSkills} params={'familiar'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
                </div>
                <textarea onChange={(event) => handleUpdateSkills('familiar', event.target.value)} type='text' className='border border-purple-800 bg-purple-300 p-6 rounded-lg text-purple-800'></textarea>
            </div>
            <DefaultButton handler={handleSave}>Save</DefaultButton>
        </div>
    );
};

export default ResumeEditSkill;