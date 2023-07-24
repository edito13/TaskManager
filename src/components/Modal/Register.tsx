import { useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import Popover from "../Popover";
import Tooltip from "../Tooltip";
import { Button } from "../../styles/styles";
import { ButtonBase } from "@mui/material";

interface Props {
  changePage: () => void;
}

const Register: React.FC<Props> = ({ changePage }) => {
  const nameFill = useRef<HTMLInputElement>(null);
  const emailFill = useRef<HTMLInputElement>(null);
  const passwordFill = useRef<HTMLInputElement>(null);
  const confirmPasswordFill = useRef<HTMLInputElement>(null);

  const [anchorEl, setAnchorEl] = useState(false);

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  return (
    <main>
      <h4>Criar conta</h4>
      <form onSubmit={() => alert("Cadastrando")}>
        <div>
          <label htmlFor="name">Nome de usuário</label>
          <input
            type="text"
            id="name"
            ref={nameFill}
            placeholder="nome completo"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailFill} placeholder="exemplo@gmail.com" />
        </div>
        <div className="passwords">
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" ref={passwordFill} />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordFill}
            />
          </div>
        </div>
        <div>
          <Tooltip tip="Criar a sua conta">
            <Button
              type="submit"
              variant="contained"
              startIcon={<FaUserPlus />}
            >
              Criar Conta
            </Button>
          </Tooltip>
          <ButtonBase
            className="btn-cancelar"
            onClick={() => setAnchorEl(true)}
          >
            Cancelar
          </ButtonBase>
        </div>
        <p>
          Já tem uma conta? <span onClick={changePage}>Logar</span>
        </p>
      </form>
      <Popover
        open={anchorEl}
        onClose={handleClosePop}
        msg="Usuário cadastrado com sucesso"
      />
    </main>
  );
};

export default Register;
