import React from 'react';
import { ProjectItemWrapper } from '../assets/wrappers/ProjectItemWrapper';
import DOMPurify from 'dompurify';

const ProjectItem = ({ id, title, description, features, link, image }) => {
  return (
    <ProjectItemWrapper>
      <h2>
        {id}.{' '}
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </h2>
      <div className='image-container'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img src={image} alt={title} />
        </a>
      </div>
      <p>{description}</p>
      <div>
        <h3>Features:</h3>
        <p
          contentEditable='false'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(features)
          }}
        />
      </div>
      <div className='link-container'>
        <a href={link} target='_blank' rel='noreferrer'>
          Visit: {title}
        </a>
      </div>
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
