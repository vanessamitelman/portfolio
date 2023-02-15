import React from 'react';
import { PageWrapper } from '../assets/wrappers/PageWrapper';
import { ErrorWrapper } from '../assets/wrappers/ErrorWrapper';

const Error = () => {
  return (
    <PageWrapper>
      <ErrorWrapper>
        <h1>Error 404</h1>
        <h2>This page does not exist</h2>
      </ErrorWrapper>
    </PageWrapper>
  );
};

export default Error;
