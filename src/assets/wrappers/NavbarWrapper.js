import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  @keyframes open-menu {
    0% {
      width: 25%;
    }
    25% {
      width: 55%;
    }
    50% {
      width: 70%;
    }
    100% {
      width: calc(100vw - 4rem);
    }
  }

  .navbar-container {
    display: flex;
    gap: 2rem;
    margin-right: 1rem;
    .navbar-item {
      text-transform: uppercase;
      letter-spacing: -1px;

      a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        @media screen and (max-width: 768px) {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid black;
        }
        &.active {
          border-bottom: 2px solid #ffe988;
          text-shadow: 1px 19px 12px #ffe988;
          padding-bottom: 0.2rem;
        }
      }
    }
    .close-btn {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar-container {
      position: absolute;
      left: 0;
      flex-direction: column;
      align-items: flex-start;
      background: #9580af;
      background: -moz-linear-gradient(top, #9580af 0%, #c4518c 100%);
      background: -webkit-linear-gradient(top, #9580af 0%, #c4518c 100%);
      background: linear-gradient(to bottom, #9580af 0%, #c4518c 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9580af', endColorstr='#c4518c',GradientType=0 );
      color: #000;
      padding: 2rem;
      z-index: 1;
      animation: open-menu 1s linear;
      width: calc(100vw - 4rem);
      box-shadow: 0 0 13px 7px black;
      margin-top: 1rem;
      gap: 1.5rem;
      .close-btn {
        display: block;
        color: black;
        font-size: 3rem;
        align-self: flex-end;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;
