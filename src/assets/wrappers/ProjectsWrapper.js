import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  .project-container {
    @media screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
