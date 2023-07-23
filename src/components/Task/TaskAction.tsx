import { ButtonProps, IconButton } from "@mui/material";
import React from "react";

interface Props extends ButtonProps {
  icon: React.ElementType;
  onClick: () => void;
}

const TaskAction: React.FC<Props> = ({ icon: Icon, onClick, ...rest }) => {
  return (
    <IconButton {...rest} onClick={onClick}>
      <Icon />
    </IconButton>
  );
};

export default TaskAction;
