import { FormEvent, useRef, useState } from "react";
import Button from "../Button";
import Popover from "../Popover";
import Tooltip from "../Tooltip";
import Loading from "../Loading";
import Api from "../../services/api";
import { ButtonBase } from "@mui/material";
import { useCookies } from "react-cookie";
import { FaPlusCircle } from "react-icons/fa";
import { Container, MainModal } from "./style";
import useLoading from "../../hooks/useLoading";
import { useMutation, useQueryClient } from "react-query";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Index: React.FC<ModalProps> = ({ open, onClose }) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token as string;

  const [anchorEl, setAnchorEl] = useState(false);
  const { isLoading, setLoading } = useLoading();

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: createTask) => {
      const response = Api.createTask(data);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("data");
      },
    }
  );

  const titleFill = useRef<HTMLInputElement>(null);
  const descriptionFill = useRef<HTMLTextAreaElement>(null);

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  const AddTask = async (e: FormEvent) => {
    e.preventDefault();

    const title = titleFill.current?.value;
    const description = descriptionFill.current?.value;

    try {
      if (!title) throw "O título não pode estar vazio";
      else if (!description) throw "A descrição não pode estar vazia";

      mutation.mutate({ description, title, token });

      setAnchorEl(true);
      setLoading(true);
      setTimeout(() => {
        setAnchorEl(false);
        onClose();
      }, 990);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <MainModal open={open}>
      <Container>
        {isLoading ? (
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
                  <Button icon={FaPlusCircle}>Adicionar Tarefa</Button>
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
