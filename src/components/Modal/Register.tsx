import { useRef, FormEvent } from "react";
import Button from "../Button";
import Tooltip from "../Tooltip";
import useAuth from "../../hooks/useAuth";
import { useCookies } from "react-cookie";
import { ButtonBase } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";

interface RegistrerProps {
  changePage: () => void;
  Load: () => void;
  onClose: () => void;
  setAlert: (value: boolean) => void;
}

const Register: React.FC<RegistrerProps> = ({
  changePage,
  Load,
  onClose,
  setAlert,
}) => {
  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  const { SetIsAuthenticated } = useAuth();

  const nameFill = useRef<HTMLInputElement>(null);
  const emailFill = useRef<HTMLInputElement>(null);
  const passwordFill = useRef<HTMLInputElement>(null);
  const confirmPasswordFill = useRef<HTMLInputElement>(null);

  const RegisterUser = async (e: FormEvent) => {
    e.preventDefault();

    const name = nameFill.current?.value;
    const email = emailFill.current?.value;
    const password = passwordFill.current?.value;
    const confirmPassword = confirmPasswordFill.current?.value;

    try {
      if (!name) throw "O campo de nome está vazio, preencha-o.";
      else if (!email) throw "O campo de email está vazio, preencha-o.";
      else if (!password) throw "O campo de senha está vazio, preencha-o.";
      else if (!confirmPassword)
        throw "O campo de confirmar senha está vazio, preencha-o.";
      else if (password !== confirmPassword)
        throw "As senhas são diferentes, use mesma senha.";

      const response = await Api.createUser({
        name,
        email,
        password,
      });

      const { token } = await response.data;

      if (token) {
        setCookie("token", token, { path: "/" });
        setAlert(true);
        Load();
        setTimeout(() => {
          setAlert(false);
          SetIsAuthenticated(true);
          navigate("/tasks");
          onClose();
        }, 990);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main>
      <h4>Criar conta</h4>
      <form onSubmit={RegisterUser}>
        <div>
          <label htmlFor="name">Nome de usuário</label>
          <input
            type="text"
            id="name"
            ref={nameFill}
            placeholder="Nome completo"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailFill}
            placeholder="exemplo@gmail.com"
            required
          />
        </div>
        <div className="passwords">
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" ref={passwordFill} required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordFill}
              required
            />
          </div>
        </div>
        <div>
          <Tooltip tip="Criar a sua conta">
            <Button icon={FaUserPlus}>Criar Conta</Button>
          </Tooltip>
          <ButtonBase className="btn-cancelar" onClick={onClose}>
            Cancelar
          </ButtonBase>
        </div>
        <p>
          Já tem uma conta? <span onClick={changePage}>Logar</span>
        </p>
      </form>
    </main>
  );
};

export default Register;
