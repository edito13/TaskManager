import React from "react";
import TaskAction from "./TaskAction";
import Tooltip from "../Tooltip";
import { FaEdit, FaRegCheckSquare, FaTrashAlt } from "react-icons/fa";

interface Props {
  id: string;
}

const TaskActions: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <Tooltip tip="Marcar como feita">
        <TaskAction icon={FaRegCheckSquare} onClick={() => alert("Marcar")} />
      </Tooltip>
      <Tooltip tip="Editar tarefa">
        <TaskAction icon={FaEdit} onClick={() => alert("Editar")} />
      </Tooltip>
      <Tooltip tip="Deletar tarefa">
        <TaskAction icon={FaTrashAlt} onClick={() => alert("Deletar")} />
      </Tooltip>
    </div>
  );
};

export default TaskActions;
