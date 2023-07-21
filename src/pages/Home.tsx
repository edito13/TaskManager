import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "../styles/styles";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  // Ir para a página de tarefas assim que a animação de loading terminar
  const handleNavigateToTasks = () => navigate("/tasks");

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
      <div className="loading" data-aos="zoom-in" data-aos-delay="1200">
        <div onAnimationEnd={handleNavigateToTasks}></div>
      </div>
    </Container>
  );
};

export default Home;
