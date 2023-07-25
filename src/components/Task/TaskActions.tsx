import React from "react";
import TaskAction from "./TaskAction";
import Tooltip from "../Tooltip";
import { FaEdit, FaRegCheckSquare, FaTrashAlt } from "react-icons/fa";
import { useQueryClient, useMutation } from "react-query";
import Api from "../../api";
import axios from "axios";

interface Props {
  id: string;
}

interface Task {
  title: string;
  description: string;
  completed?: boolean;
}

interface Data {
  tasks: Task[];
  totalPages: number;
}

const deleteTask = async (id: string): Promise<Data> => {
  const response = await axios.delete(`http://localhost:8000/task/${id}`);
  const data = response.data;
  return data;
};

const TaskActions: React.FC<Props> = ({ id }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTask, {
    onSuccess: (data) => {
      queryClient.setQueryData("data", data);
    },
  });

  const DeleteTask = async () => {
    try {
      mutation.mutate(id);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Tooltip tip="Marcar como feita">
        <TaskAction
          icon={FaRegCheckSquare}
          onClick={() => alert("Marcar " + id)}
        />
      </Tooltip>
      <Tooltip tip="Editar tarefa">
        <TaskAction icon={FaEdit} onClick={() => alert("Editar " + id)} />
      </Tooltip>
      <Tooltip tip="Deletar tarefa">
        <TaskAction icon={FaTrashAlt} onClick={DeleteTask} />
      </Tooltip>
    </div>
  );
};

export default TaskActions;
