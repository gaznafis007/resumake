import React, { useContext } from 'react';
import AddInfoButton from '../AddInfoButton/AddInfoButton';
import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addReference, removeReference, updateReference } from '@/redux/features/referenceSlice';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';

const ResumeEditReference = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext);
    const references = useSelector((state) =>state.references);
    const dispatch = useDispatch();
    const handleSave = () =>{
        setSectionCollapse('');
    }
    const handleDelete = id =>{
        dispatch(removeReference(id))
    }
    const handleAddReference = () =>{
        dispatch(addReference())
    }
    const handleUpdateReference = (id, field, value) =>{
        dispatch(updateReference({id, field, value}))
    }
    return (
        <div className='flex flex-col space-y02 mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800">Edit References</h2>
            {references &&
        references?.map((reference) => (
          <>
            <div key={reference?.id} className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold text-purple-800 capitalize mt-4">
                enter your references
              </h2>
              <div className="flex flex-col space-y-2">
                <label className="text-purple-800 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={reference?.name}
                  onChange={(event) =>
                    handleUpdateReference(
                      reference?.id,
                      "name",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                {/* position */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">Position</label>
                  <input
                    type="text"
                    name="position"
                    defaultValue={reference?.position}
                    onChange={(event) =>
                      handleUpdateReference(
                        reference?.id,
                        "position",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                    placeholder="Enter Position"
                  />
                </div>
                {/* company */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    defaultValue={reference?.company}
                    onChange={(event) =>
                      handleUpdateReference(
                        reference?.id,
                        "company",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                    placeholder="Enter Company"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                {/* Email */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={reference?.email}
                    onChange={(event) =>
                      handleUpdateReference(
                        reference?.id,
                        "email",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={reference?.phone}
                    onChange={(event) =>
                      handleUpdateReference(
                        reference?.id,
                        "phone",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  />
                </div>
              </div>
            </div>
            <SaveAndDeleteSection
              handleSave={handleSave}
              handleRemove={handleDelete}
              removeParams={reference.id}
            />
          </>
        ))}
            <AddInfoButton handler={handleAddReference} title={'Add  References'}/>
        </div>
    );
};

export default ResumeEditReference;