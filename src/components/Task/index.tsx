import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TaskActions from "./TaskActions";
import TaskContent from "./TaskContent";

interface Props {
  data: Tasks;
  delay: number;
}

const Index: React.FC<Props> = ({ data, delay }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="zoom-in-right" data-aos-delay={`${delay}`}>
        <TaskContent title={data.title} description={data.description} />
        <TaskActions data={data} />
      </div>
    </>
  );
};

export default Index;
