import React from 'react';
import { PageWrapper } from '../assets/wrappers/PageWrapper';
import { projectList } from '../services/projectList';
import { ProjectItem } from '../components';

const Projects = () => {
  return (
    <PageWrapper>
      <h1>Projects</h1>
      <div className='project-container'>
        {projectList.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </div>
    </PageWrapper>
  );
};

export default Projects;
