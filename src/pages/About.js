import React from 'react';
import { PageWrapper } from '../assets/wrappers/PageWrapper';
import me from '../assets/images/image.png';
import DOMPurify from 'dompurify';
import { aboutText } from '../services/aboutText';

const About = () => {
  return (
    <PageWrapper>
      <div className='download-container'>
        <h1>About Me</h1>
        <div className='download-link'>
          <img src={me} className='img-container' alt='Vanessa Mitelman' />
        </div>
      </div>
      <section
        contentEditable='false'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(aboutText)
        }}
      />
    </PageWrapper>
  );
};

export default About;
