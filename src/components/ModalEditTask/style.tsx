import styled from "styled-components";
import { Dialog } from "@mui/material";

export const MainModal = styled(Dialog)`
  && .MuiDialog-paperWidthSm {
    width: 100%;
    max-width: 430px;
    background: #1e1e23;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2.5rem 0;

  main {
    width: 100%;
    max-width: 80%;

    h4 {
      display: inline-block;
      position: relative;
      z-index: 10;
      color: #fff;
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0.6rem;

      &::after {
        content: "";
        display: block;
        height: 19px;
        width: 19px;
        border-radius: 4px;
        background: #8b57f6;
        position: absolute;
        z-index: -1;
        left: -10px;
        bottom: 0px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      margin: auto;

      div {
        label {
          display: block;
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        input,
        textarea {
          border: none;
          border-radius: 4px;
          padding: 7px 9px;
          font-size: 1rem;
          width: 100%;

          &::placeholder {
            font-size: 1rem;
          }
        }
      }

      div:has(button) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2rem;
      }

      .btn-cancelar {
        color: #fff;
        font-size: 1.2rem;
        padding: 0.6rem;
        cursor: pointer;
      }
    }
  }
`;
