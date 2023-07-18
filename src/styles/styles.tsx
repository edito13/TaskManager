import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: #fff;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    div {
      padding: 0.6rem;
      background: #1e1e23;
      border-radius: 8px;

      svg {
        font-size: 2.6rem;
        color: #8b57f6;
      }
    }

    h1 {
      font-weight: 500;
      font-size: 3rem;
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
      background: #8b57f6;
      animation: loading 4s ease-in-out 0.2s;
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
