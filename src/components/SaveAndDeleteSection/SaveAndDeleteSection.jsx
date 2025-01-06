import React from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';
import { FaTrash } from 'react-icons/fa';
import Button from '../Button/Button';

const SaveAndDeleteSection = ({handleSave, handleRemove}) => {
    return (
        <div className="flex flex-row justify-end items-center space-x-2 mt-2">
        <DefaultButton handler={handleSave}>Save</DefaultButton>
        <Button handler={handleRemove} style={'bg-red-100 hover:bg-red-200 text-red-600 px-6 py-3 rounded-md'}><FaTrash/></Button>
    </div>
    );
};

export default SaveAndDeleteSection;