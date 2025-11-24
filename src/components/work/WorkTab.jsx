import React from 'react'
import './portfolio.css'
const WorkTab = ({ project, tab}) => {
  return (
    <div className="content">
      <div className="tab1 lg:gap-10  gap-5 flex flex-col">
        {project.map(data => (
          <div key={data.id} className="tab-content  lg:flex lg:flex-row md:grid md:grid-cols-1 md:h-fit">
            <div className='lg:w-100'>
            <img className='sm:w-full w-full h-full' src={data.image} alt={data.title} />
            </div>
            <div className="workDescription">
            <h3>{data.title}</h3>
            <p className='lg:text-justify text-left!'>{data.description}</p>
            <div className='links flex gap-5'>
            <span>
              <a className=" border-2 px-4! py-1! text-sm  sm:text-lg rounded-full border-[#3399ff]" href={data.link} target="_blank" rel="noopener noreferrer">
                Live Link
              </a>
            </span>
            {data.githublink? ( <span>
              <a className=" border-2 px-4! py-1! text-sm  sm:text-lg rounded-full border-[#3399ff]" href={data.link} target="_blank" rel="noopener noreferrer">
                Github Link
              </a>
            </span>):(null)}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTab;