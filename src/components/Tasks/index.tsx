import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Task from "../Task";
import { useQuery } from "react-query";
import Loading from "../Loading";
import { Pagination } from "./style";
import axios from "axios";

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
  const [LoadingStatus, setLoadingStatus] = useState<boolean>(true);
  const [LoadingCounter, setLoadingCounter] = useState<number>(1);

  const limit = 4;

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter >= 2) setLoadingStatus(false);
    else setLoadingStatus(true);
  }, [LoadingCounter]);

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
