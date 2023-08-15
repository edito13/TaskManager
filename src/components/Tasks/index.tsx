import { useState } from "react";
import Task from "../Task";
import Loading from "../Loading";
import Api from "../../services/api";
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";
import { Container, Pagination } from "./style";

const Index = () => {
  const [Page, setPage] = useState(1);
  const [cookies] = useCookies(["token"]);
  const { token } = cookies;

  const limit = 4;

  const { data, isLoading, error } = useQuery<DataTask, Error>(
    ["data", Page],
    () => {
      const data = Api.getTasks({ token, Page, limit });
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <Loading />;

  if (error) return <p>Erro...</p>;

  return (
    <Container>
      <div>
        {data?.tasks.length ? (
          data.tasks.map((task, index) => (
            <Task key={task.id} task={task} delay={(index + 1) * 100} />
          ))
        ) : (
          <p>Não há nenhuma tarefa cadastrada ainda.</p>
        )}
      </div>
      <Pagination
        count={data?.totalPages}
        page={Page}
        onChange={(_, value) => setPage(value)}
      />
    </Container>
  );
};

export default Index;
