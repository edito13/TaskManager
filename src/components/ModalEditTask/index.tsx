import { FormEvent, useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { ButtonBase } from "@mui/material";
import { FaPlusCircle } from "react-icons/fa";
import Loading from "../Loading";
import Tooltip from "../Tooltip";
import Popover from "../Popover";
import { Button } from "../../styles/styles";
import { Container, MainModal } from "./style";
import Api from "../../api";
import { addTasks } from "../../store/Tasks/tasks.reducer";

interface Props {
  task: Task;
  open: boolean;
  onClose: () => void;
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

const Index: React.FC<Props> = ({ task, open, onClose }) => {
  const [cookies] = useCookies(["token"]);
  const { token } = cookies;
  const { id } = task;

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(false);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [LoadingCounter, setLoadingCounter] = useState(1);

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

  const EditTask = async (e: FormEvent) => {
    e.preventDefault();

    const title = titleFill.current?.value;
    const description = descriptionFill.current?.value;

    try {
      if (!title) throw "O título não pode estar vazio";
      else if (!description) throw "A descrição não pode estar vazia";

      const data = await Api.editTask({
        id,
        title,
        token,
        description,
      });

      dispatch(addTasks(data));
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
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<FaPlusCircle />}
                  >
                    Editar Tarefa
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
        msg={"Tarefa editada com sucesso"}
      />
    </MainModal>
  );
};

export default Index;
