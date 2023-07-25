import { useEffect, useState } from "react";
import Loading from "../Loading";
import Popover from "../Popover";
import { Container, MainModal } from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Index: React.FC<Props> = ({ open, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [LoadingCounter, setLoadingCounter] = useState(1);

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
    else {
      setAnchorEl(true);
      setTimeout(() => {
        setAnchorEl(false);
        onClose();
      }, 1000);
    }
  }, [LoadingCounter, onClose]);

  return (
    <MainModal open={open}>
      <Container>
        <Loading />
      </Container>
      <Popover
        open={anchorEl}
        onClose={handleClosePop}
        msg={"Tarefa deletada com sucesso"}
      />
    </MainModal>
  );
};

export default Index;
