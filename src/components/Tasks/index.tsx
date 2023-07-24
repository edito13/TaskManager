import { useEffect, useState } from "react";
import { Container } from "./style";
import Task from "../Task";
import { useQuery } from "react-query";
import Loading from "../Loading";

interface Data {
  id: string;
  title: string;
  description: string;
  userId: string;
}

const Index = () => {
  const [LoadingStatus, setLoadingStatus] = useState<boolean>(true);
  const [LoadingCounter, setLoadingCounter] = useState<number>(1);
  // const [Tasks, setTasks] = useState([]);

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

  const fetchPaginatedData = async (): Promise<Data[]> => {
    const response = await fetch("http://localhost:8000/task/");
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery<Data[], Error>("data", () =>
    fetchPaginatedData()
  );

  if (isLoading) return <Loading />;

  if (isError) return <div>Error fetching data</div>;

  return (
    <Container>
      {data?.map((task, index) => (
        <Task key={task.id} data={task} delay={(index + 1) * 100} />
      ))}
    </Container>
  );
};

export default Index;
