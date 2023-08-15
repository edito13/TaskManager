import Loading from "../Loading";
import { Button } from "@mui/material";
import { Container, MainModal } from "./style";
import useLoading from "../../hooks/useLoading";

interface ModalProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const Index: React.FC<ModalProps> = ({ task, open, onClose }) => {
  const { isLoading, setLoading } = useLoading();

  const hanndleClose = () => {
    setLoading(true);
    setTimeout(() => onClose(), 500);
  };

  return (
    <MainModal open={open} onClose={hanndleClose}>
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <main>
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <Button variant="outlined" onClick={hanndleClose}>
              Fechar
            </Button>
          </main>
        )}
      </Container>
    </MainModal>
  );
};

export default Index;
