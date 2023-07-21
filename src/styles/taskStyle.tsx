import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .checkbox-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      padding: 0.1rem;
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
          animation: drawCheck 2s ease-in-out forwards 0.8s infinite alternate;
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
      font-size: 2rem;
      color: #eee;
    }
  }

  main {
    width: 100%;
    max-width: 600px;

    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 1px solid #ffffff6f;

      h3 {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-weight: 500;
        font-size: 1.4rem;
        color: #fff;
      }
    }

    div:nth-child(2) {
      margin-top: 2rem;
      text-align: center;
      color: #fff;
    }
  }
`;

export const BtnCreate = styled(Button)`
  && {
    background: linear-gradient(#8b57f6, #6e44c2);
    text-transform: capitalize;
    font-size: 1.1rem;
  }
`;
