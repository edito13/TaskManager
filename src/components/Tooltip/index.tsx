import React, { ReactElement } from "react";
import { Tooltip } from "@mui/material";
import { Title } from "./style";

interface Props {
  tip: string;
  children: ReactElement;
}

const Index: React.FC<Props> = ({ children, tip }) => {
  return (
    <Tooltip title={<Title>{tip}</Title>} arrow>
      {children}
    </Tooltip>
  );
};

export default Index;
