import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Task from "../Task";

interface Props {
  children?: React.ReactNode;
}

const Index: React.FC<Props> = ({ children }) => {
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
  return (
    <Container>
      <Task delay={100} />
      <Task delay={200} />
      <Task delay={300} />
      <Task delay={400} />
    </Container>
  );
};

export default Index;
