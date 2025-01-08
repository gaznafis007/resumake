import React, { useContext } from 'react';
import AddInfoButton from '../AddInfoButton/AddInfoButton';
import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addAward, removeAward, updateAward } from '@/redux/features/awardSlice';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';

const ResumeEditAward = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext);
    const awards = useSelector((state) =>state.awards);
    const dispatch = useDispatch();
    const handleAddAward = () =>{
        dispatch(addAward())
    }
    const handleSave = () =>{
        setSectionCollapse('')
    }
    const handleUpdateAward = (id, field, value) =>{
        dispatch(updateAward({id, field, value}))
    }
    const handleDelete = (id) =>{
        dispatch(removeAward(id))
    }
    return (
        <div className='flex flex-col space-y-2 mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800">Edit Your Awards</h2>
            {
        awards[0] && awards?.map(award =>(
            <div key={award?.id} className="flex flex-col mt-4 space-y-2">
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Title</label>
              <input
                onChange={(event) =>
                  handleUpdateAward(
                    award?.id,
                    "title",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={award?.name}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Issuer</label>
              <input
                onChange={(event) =>
                  handleUpdateAward(
                    award?.id,
                    "issuer",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={award?.name}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Issue Date</label>
              <input
                onChange={(event) =>
                  handleUpdateAward(
                    award?.id,
                    "date",
                    event.target.value
                  )
                }
                type="date"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={award?.name}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) =>
                  handleUpdateAward(
                    award?.id,
                    "description",
                    event.target.value
                  )
                }
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={award?.description}
              ></textarea>
            </div>
            <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete} removeParams={award?.id} />
          </div>
        ))
      }
            <AddInfoButton title={'Add Award'} handler={handleAddAward}/>
        </div>
    );
};

export default ResumeEditAward;