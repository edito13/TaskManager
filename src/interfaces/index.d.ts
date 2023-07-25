interface Tasks {
  id: string;
  title: string;
  description: string;
  userId: string;
}

interface DataTask {
  tasks: Task[];
  totalPages: number;
}

interface createTaskI {
  title: string;
  token: string;
  description: string;
}

interface deleteTaskI {
  id: string;
  token: string;
}

interface editTaskI {
  id: string;
  title: string;
  token: string;
  description: string;
}

interface getTasksI {
  token: string;
  Page: number;
  limit: number;
}

interface completeTaskI {
  id: string;
  token: string;
}
