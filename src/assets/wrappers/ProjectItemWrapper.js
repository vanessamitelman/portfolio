import styled from 'styled-components';

export const ProjectItemWrapper = styled.div`
  box-shadow: 3px 3px 3px 0 #fff;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem auto;
  border: 1px solid #fff;
  outline: none;
  .image-container {
    @media screen and (min-width: 1200px) {
      img {
        width: auto;
        max-height: 50vh;
      }
    }
    @media screen and (max-width: 1200px) {
      img {
        width: 100%;
      }
    }
  }
`;
