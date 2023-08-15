import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "./style";
import { Button } from "../Home/style";
import Tasks from "../../components/Tasks";
import Tooltip from "../../components/Tooltip/";
import { FaPlusCircle, FaTasks } from "react-icons/fa";
import ModalAddTask from "../../components/ModalAddTask/";

const Task = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [IsOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <div>
        <div className="checkbox-icon" data-aos="zoom-in" data-aos-delay="600">
          <svg viewBox="0 0 100 100" data-aos="zoom-in" data-aos-delay="700">
            <path
              className="check-icon"
              d="M20 50 L40 70 L80 30"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <h1 data-aos="zoom-in" data-aos-delay="400">
          Gestor de Tarefas
        </h1>
      </div>
      <main>
        <div>
          <h3>
            <FaTasks />
            Lista das Tarefas
          </h3>
          <Tooltip tip="Adicione uma nova tarefa">
            <Button
              variant="contained"
              startIcon={<FaPlusCircle />}
              onClick={() => setIsOpenModal(true)}
            >
              Adicionar Tarefa
            </Button>
          </Tooltip>
        </div>
        <Tasks />
      </main>
      {IsOpenModal && (
        <ModalAddTask
          open={IsOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </Container>
  );
};

export default Task;
