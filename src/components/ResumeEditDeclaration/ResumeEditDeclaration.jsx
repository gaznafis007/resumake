import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import { removeDeclaration, updateDeclaration } from '@/redux/features/declarationSlice';
import React, { useRef } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { FaTrash } from 'react-icons/fa';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';
const ResumeEditDeclaration = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext)
    const declaration = useSelector((state) =>state.declaration);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null)
    const handleSave = () =>{
        setSectionCollapse('');
    }
    const handleDelete = () =>{
        dispatch(removeDeclaration())
    }
    const handleUpdateDeclaration = (field, value) =>{
        dispatch(updateDeclaration({field, value}))
    }
    const handleDeleteItem = (field) =>{
        const value = '';
        dispatch(updateDeclaration({field, value}))
    }
    const handleSignatureUpload = (event) =>{
      const file = event.target.files[0]
      if(file){
        const reader = new FileReader();
        reader.onloadend = () =>{
          const field = 'image'
          const value = reader.result
          dispatch(updateDeclaration({field, value}))
          // console.log(reader.result)
          fileInputRef.current.value = null
        }
        reader.onerror = (err) => {
          console.error("Error reading file:", err);
        };
        reader.readAsDataURL(file)
      }
      else {
        console.warn("No file selected");
      }
    }
    const handleFileInput = () =>{
      fileInputRef.current.click()
    }
    return (
        <div className='flex flex-col space-y-3 mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800">Add Declaration</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row justify-between items-center">
              <label className="text-purple-800">Declaration</label>
              <Button handler={handleDeleteItem} params={'description'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
              </div>
              <input
                onChange={(event) =>
                  handleUpdateDeclaration(
                    "description",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={declaration?.description}
              />
            </div>
            <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between items-center">
              <label className="text-purple-800">Full Name</label>
              <Button handler={handleDeleteItem} params={'name'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
              </div>
              <input
                onChange={(event) =>
                  handleUpdateDeclaration(
                    "name",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={declaration?.name}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-2">
                {/* Address */}
                <div className="w-full md:w-1/2 flex flex-col space-y-2">
                <div className="flex flex-row justify-between items-center">
              <label className="text-purple-800">Address</label>
              <Button handler={handleDeleteItem} params={'address'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
              </div>
              <input
                onChange={(event) =>
                  handleUpdateDeclaration(
                    "address",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={declaration?.address}
              />
            </div>
            {/* Date */}
            <div className="w-full md:w-1/2 flex flex-col space-y-2">
            <div className="flex flex-row justify-between items-center">
              <label className="text-purple-800">Date</label>
              <Button handler={handleDeleteItem} params={'date'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
              </div>
              <input
                onChange={(event) =>
                  handleUpdateDeclaration(
                    "date",
                    event.target.value
                  )
                }
                type="date"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={declaration?.date}
              />
            </div>
            </div>
            <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between items-center">
              <label className="text-purple-800">Signature</label>
              <Button handler={handleDeleteItem} params={'image'} style={'text-red-600 bg-red-100 hover:bg-red-300 p-2 rounded-md'}><FaTrash/></Button>
              </div>
              <input
                onChange={handleSignatureUpload}
                ref={fileInputRef}
                type="file"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2 hidden"
                defaultValue={declaration?.name}
              />
              <Button handler={handleFileInput} style={'px-4 py-2 border border-purple-400 border-dashed text-purple-800'}> Upload Signature</Button>
              {
                declaration?.image && (
                  <div className="w-36 h-36 relative">
                    <Image alt='signature' className='w-full' width={1920} height={720} src={declaration?.image}/>
                    <RxCross2 onClick={() =>handleDeleteItem('image')} className='text-slate-700 absolute left-28 text-xl bottom-28 cursor-pointer'/>
                  </div>
                )
              }
            </div>
            <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete}/>
        </div>
    );
};

export default ResumeEditDeclaration;