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
  // align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 1.6rem 0;

  main {
    min-height: 100%;
    width: 100%;
    max-width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
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
          height: 16px;
          width: 16px;
          border-radius: 4px;
          background: #8b57f6;
          position: absolute;
          z-index: -1;
          right: -8px;
          bottom: 0px;
        }
      }

      p {
        color: #fff;
        font-weight: 100;
        line-height: 1.4rem;
      }
    }

    button {
      text-transform: capitalize;
      font-size: 1rem;
      align-self: flex-end;
      color: #9966ff;
      border-color: #9966ff;

      &:hover {
        color: #fff;
        border-color: #9966ff;
        background-color: #9966ff;
      }
    }
  }
`;
