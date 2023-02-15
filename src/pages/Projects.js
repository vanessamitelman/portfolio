import React from 'react';
import { PageWrapper } from '../assets/wrappers/PageWrapper';
import { projectList } from '../services/projectList';
import { ProjectItem } from '../components';
import { ProjectsWrapper } from '../assets/wrappers/ProjectsWrapper';
const Projects = () => {
  return (
    <PageWrapper>
      <ProjectsWrapper>
        <h1>Projects</h1>
        <div className='project-container'>
          {projectList.map((project, index) => {
            return <ProjectItem key={index} {...project} />;
          })}
        </div>
      </ProjectsWrapper>
    </PageWrapper>
  );
};

export default Projects;
