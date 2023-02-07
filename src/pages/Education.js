import React from 'react';
import { PageWrapper } from '../assets/wrappers/PageWrapper';
import DOMPurify from 'dompurify';
import { educationText } from '../services/educationText';

const Education = () => {
  return (
    <PageWrapper>
      <h1>Education</h1>
      <section
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(educationText)
        }}
      />
      {/* <section>
        <p>
          <strong>
            Full Stack Web Developer, The
            <a
              href='https://limudey-hutz.co.il/'
              target='_blank'
              rel='noopener'
            >
              &copy;Asis Capital Center
            </a>
            , Rehovot&nbsp;
          </strong>
        </p>
        <p>Jan&nbsp;2023-&nbsp;current&nbsp;</p>
        <p>I am learning:</p>
        <p>
          HTML5, CSS3, REST, AJAX, JAVASCRIPT, ALGORITHMS, DATA SETS,
          TYPESCRIPT, Unit Tests,&nbsp;JQUERY,
          GIT,&nbsp;SQL,&nbsp;MONGODB,&nbsp;NODE.JS,&nbsp;REACT,&nbsp;FIREBASE,
          Penetration Testing&nbsp;
        </p>
        <p>
          <strong>
            BA in Statistics, The Hebrew University of Jerusalem,
            Jerusalem&nbsp;
          </strong>
        </p>
        <p>Oct 1995 - Jul 1998&nbsp;</p>
        <p>I specialized in Biostatistics.&nbsp;</p>
        <p>
          A degree in statistics equips me with
          <strong>
            strong data analysis, and great learning skills.&nbsp;
          </strong>
        </p>
        <p>
          <strong>
            Computers, Ort Yad Leibovich High School, Netanya&nbsp;
          </strong>
        </p>
        <p>Nov 1988 - Nov 1991&nbsp;</p>
        <p>
          I learned technology basics and <strong>coding.&nbsp;</strong>
        </p>
      </section> */}
    </PageWrapper>
  );
};

export default Education;
