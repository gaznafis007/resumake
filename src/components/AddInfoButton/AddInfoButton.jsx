import React from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';
import { FaPlus } from 'react-icons/fa';

const AddInfoButton = ({title, handler}) => {
    return (
        <DefaultButton handler={handler} optionalStyle={'mt-2'}>
        <div className="flex flex-row justify-center items-center space-x-2">
          <FaPlus />
          <p>{title}</p>
        </div>
      </DefaultButton>
    );
};

export default AddInfoButton;