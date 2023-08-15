import React, { ElementType, ReactNode } from "react";
import { ButtonProps } from "@mui/material";
import { Button as ButtonDefault } from "../styles/styles";

interface ButtonPropsI extends ButtonProps {
  icon: ElementType;
  children: ReactNode;
}

const Button: React.FC<ButtonPropsI> = ({ children, icon: Icon, ...rest }) => {
  return (
    <ButtonDefault
      type="submit"
      variant="contained"
      startIcon={<Icon />}
      {...rest}
    >
      {children}
    </ButtonDefault>
  );
};

export default Button;
