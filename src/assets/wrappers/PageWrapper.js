import styled from 'styled-components';

export const PageWrapper = styled.div`
  .download-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-top: 0;
    }
  }
  .img-container {
    width: 10rem;
  }
  .download-link a {
    font-size: 1.2rem;
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 768px) {
    margin: 4rem;
  }
  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`;
