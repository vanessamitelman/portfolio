import styled from 'styled-components';

export const SectionWrapper = styled.section`
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 11px 4px black;
  transition: all 1s linear;

  .img-container {
    text-align: center;
    img {
      width: 100%;
      max-width: 9rem;
    }
  }
  .container {
    display: flex;
  }
  .link-container a {
    text-shadow: 1px 1px 7px #ffe988;
    padding-bottom: 0.2rem rem;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 3rem auto;
    padding: 1rem 2rem;
    transform: translateX(-100%);
    opacity: 0;
    &.show {
      transform: translateX(0);
      opacity: 1;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  @media screen and (max-width: 768px) {
    width: calc(100vw - 6rem);
    margin: 2rem auto;
    padding: 1rem;
    .container {
      flex-direction: column;
      .img-container {
        order: -1;
      }
    }
  }
`;
