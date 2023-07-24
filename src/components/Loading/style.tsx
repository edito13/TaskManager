import styled from "styled-components";
import { CircularProgress } from "@mui/material";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  margin: auto;

  p {
    font-size: 1rem;
    color: #fff;
  }
`;

export const Loading = styled(CircularProgress)`
  && {
    color: #8b57f6;
  }
`;
