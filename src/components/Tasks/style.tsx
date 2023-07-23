import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;

  div {
    position: relative;
    flex: 1;
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
      gap: 0.3rem;
      right: 8px;
      bottom: -9px;
      background: #292930;
      border-radius: 5px;
      padding: 0.3rem;
      transition: 0.3s ease-in-out;

      svg {
        font-size: 1.2rem;
        color: rgb(153, 102, 255);
      }
    }

    &:hover {
      background: #24242b;
      /* transform: scale(1.02); */

      div {
        background: #1c1c20;
      }
    }
  }
`;
