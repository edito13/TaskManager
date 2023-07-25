import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Task from "../Task";
import Loading from "../Loading";
import { Container } from "./style";
import { Pagination } from "./style";
import Api from "../../api";
import { useSelector } from "react-redux";
import { addTasks, selectAllTasks } from "../../store/Tasks/tasks.reducer";
import { useDispatch } from "react-redux";

const Index = () => {
  const [Page, setPage] = useState(1);
  const [cookies] = useCookies(["token"]);

  const limit = 4;

  const dispatch = useDispatch();

  const { tasks, totalPages } = useSelector(selectAllTasks);
  const [IsLoading, setIsLoading] = useState(tasks.length ? false : true);

  useEffect(() => {
    const fetchPaginatedData = async () => {
      const data = await Api.getTasks({ token: cookies.token, Page, limit });
      dispatch(addTasks(data));
      setIsLoading(false);
    };

    fetchPaginatedData();
  }, [Page]);

  if (IsLoading) return <Loading />;

  return (
    <Container>
      <div>
        {tasks.length ? (
          tasks.map((task, index) => (
            <Task key={task.id} data={task} delay={(index + 1) * 100} />
          ))
        ) : (
          <p>Não há nenhuma tarefa cadastrada ainda.</p>
        )}
      </div>
      <Pagination
        count={totalPages}
        page={Page}
        onChange={(_, value) => setPage(value)}
      />
    </Container>
  );
};

export default Index;
