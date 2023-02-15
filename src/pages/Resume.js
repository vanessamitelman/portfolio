import React from 'react';
import { PageWrapper } from '../assets/wrappers/PageWrapper';
import cv from '../assets/images/cv_13-12-22.pdf';
import { BsDownload } from 'react-icons/bs';
import DOMPurify from 'dompurify';
import { resumeText } from '../services/resumeText';

const Resume = () => {
  return (
    <PageWrapper>
      <div className='download-container'>
        <h1>Resume</h1>
        <div className='download-link'>
          <a href={cv} download>
            <div>Download</div>
            <BsDownload size='1.5rem' />
          </a>
        </div>
      </div>
      <section
        contentEditable='false'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(resumeText)
        }}
      />
    </PageWrapper>
  );
};

export default Resume;
