import styled from 'styled-components';

export const ProjectItemWrapper = styled.div`
  box-shadow: 0px 0px 6px 4px #fff;
  padding: 1rem;
  border-radius: 5px;
  margin: 4rem;
  .image-container {
    @media screen and (min-width: 1200px) {
      img {
        width: auto;
        max-height: 50vh;
      }
    }
    @media screen and (min-width: 1200px) {
      img {
        width: 100%;
      }
    }
  }
`;
