import React from 'react';
import { Section } from '../components';
import { sectionList } from '../services/sectionList';
import { HomeWrapper } from '../assets/wrappers/HomeWrapper';
import { PageWrapper } from '../assets/wrappers/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <HomeWrapper>
        {sectionList.map((item) => {
          return <Section key={item.id} {...item} />;
        })}
      </HomeWrapper>
    </PageWrapper>
  );
};

export default Home;
