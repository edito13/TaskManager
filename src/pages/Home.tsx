import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "../styles/styles";
import { FaCheck } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  // Ir para a página de tarefas assim que o loading terminar
  const handleNavigateToTasks = () => navigate("/tasks");

  return (
    <Container>
      <div data-aos="zoom-in" data-aos-delay="300">
        <div>
          <FaCheck />
        </div>
        <h1>Gestor de Tarefas</h1>
      </div>
      <div className="loading" data-aos="zoom-in" data-aos-delay="800">
        <div onAnimationEnd={handleNavigateToTasks}></div>
      </div>
    </Container>
  );
};

export default Home;
