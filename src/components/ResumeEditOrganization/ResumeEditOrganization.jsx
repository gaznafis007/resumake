import React, { useContext } from 'react';
import AddInfoButton from '../AddInfoButton/AddInfoButton';
import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addOrganization, removeOrganization, updateOrganization } from '@/redux/features/organizationSlice';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';

const ResumeEditOrganization = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext);
    const orgs = useSelector((state) => state.organizations);
    const dispatch = useDispatch();
    const handleAddOrg = () =>{
        dispatch(addOrganization())
    }
    const handleUpdateOrg = (id, field, value) =>{
        dispatch(updateOrganization({id, field, value}))
    }
    const handleDelete = (id) =>{
        dispatch(removeOrganization(id))
    }
    const handleSave = () =>{
        setSectionCollapse('')
    }
    return (
        <div className='flex flex-col space-y-2 mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800">Add Organizations</h2>
            {orgs[0] &&
        orgs?.map((org) => (
          <div key={org?.id} className="space-y-1">
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 font-semibold">
                Organization name
              </label>
              <input
                type="text"
                name="org"
                defaultValue={org?.org}
                onChange={(event) =>
                  handleUpdateOrg(org?.id, "org", event.target.value)
                }
                className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                placeholder="Enter your organization name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 font-semibold">
                Position
              </label>
              <input
                type="text"
                name="position"
                defaultValue={org?.position}
                onChange={(event) =>
                  handleUpdateOrg(
                    org?.id,
                    "position",
                    event.target.value
                  )
                }
                className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                placeholder="Enter your position"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              {/* city */}
              <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <label className="text-purple-800 font-semibold">City</label>
                <input
                  type="text"
                  name="city"
                  defaultValue={org?.city}
                  onChange={(event) =>
                    handleUpdateOrg(org?.id, "city", event.target.value)
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  placeholder="Enter your city"
                />
              </div>
              {/* country */}
              <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <label className="text-purple-800 font-semibold">Country</label>
                <input
                  type="text"
                  name="country"
                  defaultValue={org?.country}
                  onChange={(event) =>
                    handleUpdateOrg(
                      org?.id,
                      "country",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  placeholder="Enter your country"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              {/* start date */}
              <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <label className="text-purple-800 font-semibold">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  defaultValue={org?.startDate}
                  onChange={(event) =>
                    handleUpdateOrg(
                      org?.id,
                      "startDate",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                />
              </div>
              {/* end date */}
              <div className="flex flex-col space-y-2 w-full md:w-1/2">
                <label className="text-purple-800 font-semibold">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  defaultValue={org?.endDate}
                  onChange={(event) =>
                    handleUpdateOrg(
                      org?.id,
                      "endDate",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) =>
                  handleUpdateOrg(
                    org?.id,
                    "description",
                    event.target.value
                  )
                }
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={org?.description}
              ></textarea>
            </div>
            <SaveAndDeleteSection
              handleSave={handleSave}
              handleRemove={handleDelete}
              removeParams={org?.id}
            />
          </div>
        ))}
            <AddInfoButton title={'Add Organization'} handler={handleAddOrg}/>
        </div>
    );
};

export default ResumeEditOrganization;