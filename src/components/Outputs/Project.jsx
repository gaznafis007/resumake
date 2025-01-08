import React from 'react';

const Project = ({project}) => {
    // console.log(project?.description)
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start">
            <p className="text-zinc-800 text-sm">
              <a href={project?.url}><span className="font-bold">{project?.title}</span>{project?.subtitle && <span className="font-thin"><i>, {project?.subtitle}</i></span>}</a>
            </p>
            {
                project?.descriptions && (
                   <p className="text-zinc-800 text-sm font-thin">
                    {project?.descriptions}
                   </p>
                )
            }
            </div>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (project?.startDate || project?.endDate) && (
                  <p className="text-sm">
                    {project?.startDate} - {project?.endDate}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Project;