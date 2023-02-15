import React from 'react';
import { ProjectItemWrapper } from '../assets/wrappers/ProjectItemWrapper';
import DOMPurify from 'dompurify';

const ProjectItem = ({ id, title, description, features, link, image }) => {
  return (
    <ProjectItemWrapper>
      <h2>
        {id}. {title}
      </h2>
      <div className='image-container'>
        <img src={image} alt={title} />
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
        <a href={link} target='_blank'>
          Visit: {title}
        </a>
      </div>
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
