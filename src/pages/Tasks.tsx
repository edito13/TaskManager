import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlusCircle, FaTasks } from "react-icons/fa";
import Api from "../api";
import { BtnCreate, Container } from "../styles/taskStyle";
import Loading from "../components/Loading/";
import Tooltip from "../components/Tooltip/";

const Task = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const result = await Api.getUsers();
      console.log(result);
    };

    getUsers();
  }, []);

  const [LoadingStatus, setLoadingStatus] = useState<boolean>(true);
  const [LoadingCounter, setLoadingCounter] = useState<number>(1);
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter >= 2) setLoadingStatus(false);
    else setLoadingStatus(true);
  }, [LoadingCounter]);

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
            <BtnCreate variant="contained" startIcon={<FaPlusCircle />}>
              Adicionar Tarefa
            </BtnCreate>
          </Tooltip>
        </div>
        <div>
          {LoadingStatus ? (
            <Loading />
          ) : (
            <p>Não há nenhuma tarefa ainda, adicione uma.</p>
          )}
        </div>
        {/* {LoadingStatus && <Loading />} */}
      </main>
    </Container>
  );
};

export default Task;
