import React, { useCallback, useState } from "react";
import Api from "../../services/api";
import Tooltip from "../Tooltip";
import TaskAction from "./TaskAction";
import { useCookies } from "react-cookie";
import ModalSeeTask from "../ModalSeeTask";
import ModalEditTask from "../ModalEditTask";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import ModalLoadingDelete from "../ModalLoadingDelete";
import { useMutation, useQueryClient } from "react-query";

interface ActionsProps {
  task: Task;
}

const TaskActions: React.FC<ActionsProps> = ({ task }) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token as string;
  const { id } = task;

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (data: deleteTask) => {
      const response = Api.deleteTask(data);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries("data"),
    }
  );
  const [IsOpenSeeModal, setIsOpenSeeModal] = useState(false);
  const [IsOpenEditModal, setIsOpenEditModal] = useState(false);
  const [IsOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const DeleteTask = useCallback(async () => {
    try {
      setIsOpenDeleteModal(true);
      setTimeout(() => {
        mutation.mutate({ id, token });
      }, 800);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <Tooltip tip="Visualizar tarefa">
        <TaskAction icon={FaEye} onClick={() => setIsOpenSeeModal(true)} />
      </Tooltip>
      <Tooltip tip="Editar tarefa">
        <TaskAction icon={FaEdit} onClick={() => setIsOpenEditModal(true)} />
      </Tooltip>
      <Tooltip tip="Deletar tarefa">
        <TaskAction icon={FaTrashAlt} onClick={DeleteTask} />
      </Tooltip>
      {IsOpenSeeModal && (
        <ModalSeeTask
          task={task}
          open={IsOpenSeeModal}
          onClose={() => setIsOpenSeeModal(false)}
        />
      )}
      {IsOpenEditModal && (
        <ModalEditTask
          task={task}
          open={IsOpenEditModal}
          onClose={() => setIsOpenEditModal(false)}
        />
      )}
      {IsOpenDeleteModal && (
        <ModalLoadingDelete
          open={IsOpenDeleteModal}
          onClose={() => setIsOpenDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default TaskActions;
