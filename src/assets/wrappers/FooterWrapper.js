import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  .top-footer {
    padding-bottom: 130px;
    .contact-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .contact-link {
      width: 4rem;
      height: 4rem;
      display: grid;
      place-items: center;
      border-radius: 100%;
      border: 1px solid #f1d36a;
      background: #f1d36a;
      box-shadow: inset -3px 2px 5px 1px black;
      transition: all 0.5s ease-in-out;
      &:hover {
        border: 1px solid #000;
        background: #000;
        box-shadow: 0px 0px 9px 3px #f1d36a;
        svg {
          fill: #f1d36a;
        }
      }
      a {
        display: grid;
        place-items: center;
      }
    }
  }
  .custom-shape-divider-bottom-1675617488 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1675617488 svg {
    position: relative;
    display: block;
    width: calc(134% + 1.3px);
    height: 130px;
    transform: rotateY(180deg);
  }
  .custom-shape-divider-bottom-1675617488 {
    z-index: 9;
  }
  .custom-shape-divider-bottom-1675617488 .shape-fill {
    fill: #d01f57;
  }
`;
