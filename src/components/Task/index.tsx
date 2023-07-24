import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TaskActions from "./TaskActions";
import TaskContent from "./TaskContent";

interface Props {
  data: {
    id: string;
    title: string;
    description: string;
  };
  delay: number;
}

const Index: React.FC<Props> = ({ data, delay }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in-right" data-aos-delay={`${delay}`}>
      <TaskContent title={data.title} description={data.description} />
      <TaskActions id={data.id} />
    </div>
  );
};

export default Index;
