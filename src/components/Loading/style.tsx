import styled from "styled-components";
import { CircularProgress } from "@mui/material";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;

  p {
    font-size: 1rem;
  }
`;

export const Loading = styled(CircularProgress)`
  && {
    color: #8b57f6;
  }
`;
