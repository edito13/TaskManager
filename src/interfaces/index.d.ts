interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
}

interface DataTask {
  tasks: Task[];
  totalPages: number;
}

interface loginUser {
  email: string;
  password: string;
}

interface createUser {
  name: string;
  email: string;
  password: string;
}

interface createTask {
  title: string;
  token: string;
  description: string;
}

interface deleteTask {
  id: string;
  token: string;
}

interface editTask {
  id: string;
  title: string;
  token: string;
  description: string;
}

interface getTasks {
  token: string;
  Page: number;
  limit: number;
}

interface completeTask {
  id: string;
  token: string;
}

interface AuthContext {
  isAuthenticated: boolean;
  SetIsAuthenticated: (value: boolean) => void;
}
