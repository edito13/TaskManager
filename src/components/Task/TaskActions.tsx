import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Api from "../../api";
import Tooltip from "../Tooltip";
import TaskAction from "./TaskAction";
import { addTasks } from "../../store/Tasks/tasks.reducer";
import ModalEditTask from "../ModalEditTask";
import ModalLoadingDelete from "../ModalLoadingDelete";

interface Props {
  data: Tasks;
}

const TaskActions: React.FC<Props> = ({ data }) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token as string;
  const { id } = data;

  const [IsOpenEditModal, setIsOpenEditModal] = useState(false);
  const [IsOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const DeleteTask = async () => {
    try {
      const data = await Api.deleteTask({ id, token });
      if (data) {
        setIsOpenDeleteModal(true);
        setTimeout(() => dispatch(addTasks(data)), 1000);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Tooltip tip="Editar tarefa">
        <TaskAction icon={FaEdit} onClick={() => setIsOpenEditModal(true)} />
      </Tooltip>
      <Tooltip tip="Deletar tarefa">
        <TaskAction icon={FaTrashAlt} onClick={DeleteTask} />
      </Tooltip>
      {IsOpenEditModal && (
        <ModalEditTask
          task={data}
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
