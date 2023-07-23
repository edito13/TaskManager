import React from "react";

interface Props {
  title: string;
  description: string;
}

const TaskContent: React.FC<Props> = ({
  title: Title,
  description: Description,
}) => {
  return (
    <>
      <h4>{Title}</h4>
      <p>{Description}</p>
    </>
  );
};

export default TaskContent;
