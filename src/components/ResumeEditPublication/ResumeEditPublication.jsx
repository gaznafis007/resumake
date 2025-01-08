import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import { addPublication, removePublication, updatePublication } from '@/redux/features/publicationSlice';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddInfoButton from '../AddInfoButton/AddInfoButton';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';

const ResumeEditPublication = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext);
    const publications = useSelector((state) =>state?.publications);
    const dispatch = useDispatch();
    const handleSave = () =>{
        setSectionCollapse('')
    }
    const handleDelete = (id) =>{
        dispatch(removePublication(id))
    }
    const handleAddPublication = () =>{
        dispatch(addPublication())
    }
    const handleUpdatePublication = (id, field, value) =>{
        dispatch(updatePublication({id, field, value}))
    }
    return (
        <div className='flex flex-col space-y-2 mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800">Edit Publication</h2>
            {
                publications[0] && publications?.map(publication =>(
                    <div key={publication?.id} className='space-y-2'>
              <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={publication?.title}
            onChange={(event) => handleUpdatePublication(publication?.id, 'title', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter publication title"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Publisher</label>
          <input
            type="text"
            name="publisher"
            defaultValue={publication?.publisher}
            onChange={(event) => handleUpdatePublication(publication?.id, 'publisher', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter Publisher"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Publication Url</label>
          <input
            type="text"
            name="url"
            defaultValue={publication?.url}
            onChange={(event) => handleUpdatePublication(publication?.id, 'url', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter url"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Publication date</label>
          <input
            type="date"
            name="date"
            defaultValue={publication?.date}
            onChange={(event) => handleUpdatePublication(publication?.id, 'date', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter publication date"
          />
        </div>
        <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) => handleUpdatePublication(publication?.id, 'descriptions', event.target.value)}
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={publication?.descriptions}
                placeholder='Enter Description'
              ></textarea>
            </div>
        <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete} removeParams={publication?.id} />
            </div>
                ))
            }
            <AddInfoButton title={'Add Publications'} handler={handleAddPublication}/>
        </div>
    );
};

export default ResumeEditPublication;