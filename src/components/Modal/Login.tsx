import { FormEvent, useRef } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import Tooltip from "../Tooltip";
import { Button } from "../../styles/styles";
import { useAuth } from "../../contexts/auth";
import { fetchAuthToken } from "../../assets/fetchAuthToken";

interface Props {
  changePage: () => void;
  Load: () => void;
  onClose: () => void;
  setAlert: (value: boolean) => void;
}

const Login: React.FC<Props> = ({ changePage, Load, onClose, setAlert }) => {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  const { SetIsAuthenticated } = useAuth();

  const emailFill = useRef<HTMLInputElement>(null);
  const passwordFill = useRef<HTMLInputElement>(null);

  const Signin = async (e: FormEvent) => {
    e.preventDefault();

    const email = emailFill.current?.value;
    const password = passwordFill.current?.value;

    try {
      if (!email) throw "Preencha o email correctamente.";
      else if (!password) throw "Preencha a senha correctamente.";

      const options = {
        url: "user/signin",
        credentials: {
          email,
          password,
        },
      };

      const token = await fetchAuthToken(options);

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
      <h4>Fazer login</h4>
      <form onSubmit={Signin}>
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
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" ref={passwordFill} required />
        </div>
        <div>
          <Tooltip tip="Criar a sua conta">
            <Button
              type="submit"
              variant="contained"
              startIcon={<FaPaperPlane />}
            >
              Iniciar sessão
            </Button>
          </Tooltip>
        </div>
        <p>
          Ainda não tem uma conta? <span onClick={changePage}>Criar conta</span>
        </p>
      </form>
    </main>
  );
};

export default Login;
