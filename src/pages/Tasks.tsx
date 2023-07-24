import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlusCircle, FaTasks } from "react-icons/fa";
import Tasks from "../components/Tasks";
import Tooltip from "../components/Tooltip/";
import { Button } from "../styles/styles";
import { Container } from "../styles/taskStyle";

const Task = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
            <Button variant="contained" startIcon={<FaPlusCircle />}>
              Adicionar Tarefa
            </Button>
          </Tooltip>
        </div>
        <Tasks />
      </main>
    </Container>
  );
};

export default Task;
