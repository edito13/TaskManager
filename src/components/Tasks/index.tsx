import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Task from "../Task";
import Loading from "../Loading";
import { Container } from "./style";
import { Pagination } from "./style";

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
}

interface Data {
  tasks: Task[];
  totalPages: number;
}

const Index = () => {
  const [Page, setPage] = useState(1);

  const limit = 4;

  const fetchPaginatedData = async (): Promise<Data> => {
    const response = await axios(
      `http://localhost:8000/task?page=${Page}&limit=${limit}`
    );
    const data = response.data;
    console.log(data);
    return data;
  };

  const { data, isLoading, isError } = useQuery<Data, Error>(
    ["data", Page],
    () => fetchPaginatedData()
  );

  if (isLoading) return <Loading />;

  if (isError) return <div>Error fetching data</div>;

  return (
    <Container>
      {data?.tasks.map((task, index) => (
        <Task key={task.id} data={task} delay={(index + 1) * 100} />
      ))}
      <Pagination
        count={data?.totalPages}
        page={Page}
        onChange={(event, value) => setPage(value)}
      />
    </Container>
  );
};

export default Index;
