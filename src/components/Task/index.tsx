import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TaskActions from "./TaskActions";
import TaskContent from "./TaskContent";

interface Props {
  task: Tasks;
  delay: number;
}

const Index: React.FC<Props> = ({ task, delay }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="zoom-in-right" data-aos-delay={`${delay}`}>
        <TaskContent title={task.title} description={task.description} />
        <TaskActions task={task} />
      </div>
    </>
  );
};

export default Index;
