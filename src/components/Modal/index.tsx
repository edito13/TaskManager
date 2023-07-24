import React, { useEffect, useState } from "react";
import Login from "./Login";
import Loading from "../Loading";
import Popover from "../Popover";
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

  const [anchorEl, setAnchorEl] = useState(false);

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

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
          <Login
            changePage={ChangePage}
            Load={() => setLoadingStatus(true)}
            setAlert={(value) => setAnchorEl(value)}
            onClose={onClose}
          />
        ) : (
          <Register
            changePage={ChangePage}
            Load={() => setLoadingStatus(true)}
            setAlert={(value) => setAnchorEl(value)}
            onClose={onClose}
          />
        )}
      </Container>
      <Popover
        open={anchorEl}
        onClose={handleClosePop}
        msg={`${IsLoginActive ? "Login feito" : "Conta criada"} com sucesso`}
      />
    </MainModal>
  );
};

export default Index;
