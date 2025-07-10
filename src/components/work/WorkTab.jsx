import React from 'react'
import './portfolio.css'
const WorkTab = ({ project, tab}) => {
  return (
    <div className="content">
      <div className="tab1 gap-10 flex flex-col">
        {project.map(data => (
          <div key={data.id} className="tab-content  lg:flex lg:flex-row md:grid md:grid-cols-1 md:h-fit">
            
            <img src={data.image} alt={data.title} />
            <div className="workDescription">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <span>
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                Live Link
              </a>
            </span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTab;