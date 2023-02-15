import React, { useRef, useState, useEffect } from 'react';
import { SectionWrapper } from '../assets/wrappers/SectionWrapper';
import DOMPurify from 'dompurify';

const Section = ({ title, text1, text2, image, link, linkTitle }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);
  return (
    <SectionWrapper
      ref={containerRef}
      className={isVisible ? 'card show ' : 'card'}
    >
      <div className='container'>
        <div className='text-container'>
          <h2
            contentEditable='false'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
          ></h2>
          <p
            contentEditable='false'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text1) }}
          ></p>
          <p
            contentEditable='false'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text2) }}
          ></p>
          {link && linkTitle && (
            <div className='link-container'>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                contentEditable='false'
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(linkTitle)
                }}
              />
            </div>
          )}
        </div>

        {image && (
          <div className='img-container'>
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Section;
