import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  box-shadow: 0px 0px 9px 0px black;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
  @media screen and (min-width: 768px) {
    .logo-container {
      img {
        width: 9rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    @keyframes rotate-in {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(45deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
    @keyframes rotate-out {
      0% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(45deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    .icon-btn {
      animation: rotate-out 250ms ease-in;
      transform: rotate(0deg);
      &.open-sidebar {
        animation: rotate-in 250ms ease-in;
        transform: rotate(90deg);
      }
    }
     {
      img {
        width: 2rem;
      }
    }
  }
`;
