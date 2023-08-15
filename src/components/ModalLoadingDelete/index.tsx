import { useEffect, useState } from "react";
import Loading from "../Loading";
import Popover from "../Popover";
import { Container, MainModal } from "./style";
import useLoading from "../../hooks/useLoading";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Index: React.FC<ModalProps> = ({ open, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const { isLoading } = useLoading();

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  useEffect(() => {
    if (!isLoading) {
      setAnchorEl(true);
      setTimeout(() => {
        setAnchorEl(false);
        onClose();
      }, 1000);
    }
  }, [isLoading, onClose]);

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
