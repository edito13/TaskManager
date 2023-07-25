import { FormEvent, useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Loading from "../Loading";
import Tooltip from "../Tooltip";
import Popover from "../Popover";
import { Button } from "../../styles/styles";
import { Container, MainModal } from "./style";
import { ButtonBase } from "@mui/material";
import { useQueryClient, useMutation } from "react-query";
import Api from "../../api";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Task {
  title: string;
  description: string;
  completed?: boolean;
}

interface Data {
  tasks: Task[];
  totalPages: number;
}

const createTask = async ({ title, description }: Task): Promise<Data> => {
  const data = await Api.createTask({ title, description });
  return data;
};

const Index: React.FC<Props> = ({ open, onClose }) => {
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

  const titleFill = useRef<HTMLInputElement>(null);
  const descriptionFill = useRef<HTMLTextAreaElement>(null);

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

  const queryClient = useQueryClient();

  const mutation = useMutation(createTask, {
    onSuccess: (data) => {
      queryClient.setQueryData("data", data);
    },
  });

  const AddTask = async (e: FormEvent) => {
    e.preventDefault();

    const title = titleFill.current?.value;
    const description = descriptionFill.current?.value;

    try {
      if (!title) throw "O título não pode estar vazio";
      else if (!description) throw "A descrição não pode estar vazia";

      mutation.mutate({ title, description });

      setAnchorEl(true);
      setLoadingStatus(true);
      setTimeout(() => {
        setAnchorEl(false);
        onClose();
      }, 990);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainModal open={open}>
      <Container>
        {LoadingStatus ? (
          <Loading />
        ) : (
          <main>
            <h4>Adicionar Tarefa</h4>
            <form onSubmit={AddTask}>
              <div>
                <label htmlFor="title">Título</label>
                <input
                  id="title"
                  ref={titleFill}
                  placeholder="Título da tarefa"
                />
              </div>
              <div>
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  ref={descriptionFill}
                  placeholder="Escreva alguma coisa..."
                />
              </div>
              <div>
                <Tooltip tip="Adicionar Tarefa">
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<FaPlusCircle />}
                  >
                    Adicionar Tarefa
                  </Button>
                </Tooltip>
                <ButtonBase className="btn-cancelar" onClick={onClose}>
                  Cancelar
                </ButtonBase>
              </div>
            </form>
          </main>
        )}
      </Container>
      <Popover
        open={anchorEl}
        onClose={handleClosePop}
        msg={"Tarefa criada com sucesso"}
      />
    </MainModal>
  );
};

export default Index;
