import React from "react";

interface Props {
  title: string;
  description: string;
}

const TaskContent: React.FC<Props> = ({ title, description }) => {
  return (
    <span>
      <h4>{title}</h4>
      <p>{description}</p>
    </span>
  );
};

export default TaskContent;
