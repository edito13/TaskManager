import { FormEvent, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { ButtonBase } from "@mui/material";
import { FaPlusCircle } from "react-icons/fa";
import Button from "../Button";
import Loading from "../Loading";
import Tooltip from "../Tooltip";
import Popover from "../Popover";
import Api from "../../services/api";
import { Container, MainModal } from "./style";
import useLoading from "../../hooks/useLoading";
import { useMutation, useQueryClient } from "react-query";

interface ModalProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const Index: React.FC<ModalProps> = ({ task, open, onClose }) => {
  const [cookies] = useCookies(["token"]);
  const { isLoading, setLoading } = useLoading();
  const [anchorEl, setAnchorEl] = useState(false);
  const titleFill = useRef<HTMLInputElement>(null);
  const descriptionFill = useRef<HTMLTextAreaElement>(null);
  const queryClient = useQueryClient();

  const { id } = task;
  const { token } = cookies;

  const mutation = useMutation(
    (data: editTask) => {
      const response = Api.editTask(data);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("data");
      },
    }
  );

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  const EditTask = async (e: FormEvent) => {
    e.preventDefault();

    const title = titleFill.current?.value;
    const description = descriptionFill.current?.value;

    try {
      if (!title) throw "O título não pode estar vazio";
      else if (!description) throw "A descrição não pode estar vazia";

      mutation.mutate({ id, description, title, token });

      setAnchorEl(true);
      setLoading(true);
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
        {isLoading ? (
          <Loading />
        ) : (
          <main>
            <h4>Editar Tarefa</h4>
            <form onSubmit={EditTask}>
              <div>
                <label htmlFor="title">Título</label>
                <input
                  id="title"
                  ref={titleFill}
                  defaultValue={task.title}
                  placeholder="Título da tarefa"
                />
              </div>
              <div>
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  ref={descriptionFill}
                  defaultValue={task.description}
                  placeholder="Escreva alguma coisa..."
                />
              </div>
              <div>
                <Tooltip tip="Adicionar Tarefa">
                  <Button icon={FaPlusCircle}>Editar Tarefa</Button>
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
        msg={"Tarefa editada com sucesso"}
      />
    </MainModal>
  );
};

export default Index;
