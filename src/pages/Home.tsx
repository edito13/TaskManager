import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "../styles/styles";
import { FaCheck } from "react-icons/fa";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <div data-aos="zoom-in" data-aos-delay="200">
        <div>
          <FaCheck />
        </div>
        <h1>Gestor de Tarefas</h1>
      </div>
      <div className="loading" data-aos="zoom-in" data-aos-delay="400">
        <div onAnimationEnd={() => alert("Terminou")}></div>
      </div>
    </Container>
  );
};

export default Home;
