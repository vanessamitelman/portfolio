import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  box-shadow: 0px 0px 9px 0px black;
  @media screen and (min-width: 768px) {
    .logo-container {
      img {
        width: 9rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .logo-container {
      img {
        width: 2rem;
      }
    }
  }
`;
