import { useRef, useState } from "react";
import { FaPaperPlane, FaPlane, FaUserPlus } from "react-icons/fa";
import Popover from "../Popover";
import Tooltip from "../Tooltip";
import { Button } from "../../styles/styles";
import { ButtonBase } from "@mui/material";

interface Props {
  changePage: () => void;
}

const Login: React.FC<Props> = ({ changePage }) => {
  const emailFill = useRef<HTMLInputElement>(null);
  const passwordFill = useRef<HTMLInputElement>(null);

  const [anchorEl, setAnchorEl] = useState(false);

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  return (
    <main>
      <h4>Fazer login</h4>
      <form onSubmit={() => alert("Iniciando sessão")}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailFill} placeholder="exemplo@gmail.com" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" ref={passwordFill} />
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
      <Popover
        open={anchorEl}
        onClose={handleClosePop}
        msg="Login feito com sucesso"
      />
    </main>
  );
};

export default Login;
