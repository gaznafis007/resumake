import React, { useContext } from 'react';
import AddInfoButton from '../AddInfoButton/AddInfoButton';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, removeProject, updateDescription, updateProject } from '@/redux/features/projectSlice';
import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';

const ResumeEditProject = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext)
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch();
    const handleAddProjects = () =>{
        dispatch(addProject())
    }
    const handleUpdateProject = (id, field, value) =>{
        dispatch(updateProject({id, field, value}))
    }
    const handleDelete = (id) =>{
        dispatch(removeProject(id))
    }
    const handleSave = () =>{
        setSectionCollapse('')
    }
    // const handleDescription = (event, id) =>{
    //     if(event.key == 'Enter'){
    //         event.preventDefault();
    //         let newDescription = event.target.value.trim();
    //         if(newDescription){
    //             dispatch(updateDescription({id, newDescription}))
    //         }
    //     }
    // }
    return (
        <div className='flex flex-col space-y-2 mt-4'>
            <h2 className="text-2xl font-semibold text-purple-800">Edit Your Projects</h2>
            {
                projects[0] && projects?.map(project =>(
                    <div key={project?.id} className='space-y-2'>
              <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={project?.title}
            onChange={(event) => handleUpdateProject(project?.id, 'title', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter project title"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            defaultValue={project?.subtitle}
            onChange={(event) => handleUpdateProject(project?.id, 'subtitle', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter subtitle"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Project Url</label>
          <input
            type="text"
            name="url"
            defaultValue={project?.url}
            onChange={(event) => handleUpdateProject(project?.id, 'url', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter subtitle"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/* start date */}
            <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">Start Date</label>
          <input
            type="date"
            name="startDate"
            defaultValue={project?.startDate}
            onChange={(event) => handleUpdateProject(project?.id, 'startDate', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        {/* end date */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">End Date</label>
          <input
            type="date"
            name="endDate"
            defaultValue={project?.endDate}
            onChange={(event) => handleUpdateProject(project?.id, 'endDate', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        </div>
        <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) => handleUpdateProject(project?.id, 'descriptions', event.target.value)}
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={project?.descriptions}
                placeholder='please enter ; after each of your key point of the project end'
              ></textarea>
            </div>
        <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete} removeParams={project?.id} />
            </div>
                ))
            }
            <AddInfoButton title={'Add Projects'} handler={handleAddProjects}/>
        </div>
    );
};

export default ResumeEditProject;