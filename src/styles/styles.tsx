import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .checkbox-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      padding: 0.3rem;
      background: #1e1e23;
      border-radius: 7px;

      svg {
        font-size: 2rem;

        .check-icon {
          fill: none;
          stroke: #8b57f6;
          stroke-width: 10;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawCheck 2s ease-in-out forwards 0.8s;
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }
      }
    }

    h1 {
      font-weight: 500;
      font-size: 3rem;
      color: #eee;
    }
  }

  & > .loading {
    height: 7px;
    background: #c0a3fb55;
    width: 300px;
    border-radius: 40px;
    overflow: hidden;
    margin-top: 2rem;

    div {
      height: 100%;
      border-radius: 40px;
      background: linear-gradient(#8b57f6, #6e44c2);
      animation: loading 5s ease-out 0.9s;
    }

    @keyframes loading {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
`;
