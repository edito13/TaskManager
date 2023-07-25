import styled from "styled-components";
import { Pagination as PaginationComponent } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80%;
  width: 100%;
  margin-top: 1.6rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.4rem;

    & > p {
      color: #fff;
      text-align: center;
    }

    div {
      position: relative;
      flex: 1;
      display: flex;
      background: #1e1e23;
      border-radius: 6px;
      padding: 0.7rem;
      transition: 0.4s ease-in-out;
      cursor: pointer;

      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
        color: #eee;
        font-weight: 500;
      }

      p {
        font-size: 0.9rem;
        color: #ccc;
        max-width: 80%;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      div {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        right: 8px;
        bottom: -9px;
        background: #292930;
        border-radius: 5px;
        padding: 0.3rem;
        transition: 0.3s ease-in-out;

        svg {
          font-size: 1.2rem;
          color: #9966ff;
        }
      }

      &:hover {
        background: #24242b;

        div {
          background: #1c1c20;
        }
      }
    }
  }
`;

export const Pagination = styled(PaginationComponent)`
  && {
    margin: 0 auto;

    * {
      color: #fff;
      font-size: 1rem;
      padding: 0.3rem;
    }
  }
`;
