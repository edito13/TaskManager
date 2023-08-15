import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "./style";
import useAuth from "../../hooks/useAuth";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [IsOpenModal, setIsOpenModal] = useState(false);

  // Ir para a página de tarefas assim que a animação de loading terminar se estiver logado
  const handleNavigate = () => {
    if (isAuthenticated) return navigate("/tasks");
    // Caso não então abre o modal para fazer o login ou cadastro
    setIsOpenModal(true);
  };

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

export default Index;
