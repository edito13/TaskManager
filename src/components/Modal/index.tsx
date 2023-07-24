import React, { useEffect, useState } from "react";
import Login from "./Login";
import Loading from "../Loading";
import Register from "./Register";
import { Container, MainModal } from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Index: React.FC<Props> = ({ open, onClose }) => {
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [IsLoginActive, setIsLoginActive] = useState(true);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 1) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const ChangePage = () => {
    setLoadingStatus(true);
    setIsLoginActive((state) => !state);
  };

  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        {LoadingStatus ? (
          <Loading />
        ) : IsLoginActive ? (
          <Login changePage={ChangePage} />
        ) : (
          <Register changePage={ChangePage} />
        )}
      </Container>
    </MainModal>
  );
};

export default Index;
