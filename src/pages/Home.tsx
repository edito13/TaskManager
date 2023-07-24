import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "../styles/styles";
import Modal from "../components/Modal";

const Initial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [IsOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  // Ir para a página de tarefas assim que a animação de loading terminar
  const handleNavigate = () => setIsOpenModal(true);

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
        <div onAnimationEnd={handleNavigate}></div>
      </div>
      {IsOpenModal && (
        <Modal open={IsOpenModal} onClose={() => setIsOpenModal(false)} />
      )}
    </Container>
  );
};

export default Initial;
