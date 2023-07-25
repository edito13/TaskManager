import axios from "axios";

const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://taskmanager-backend-production.up.railway.app";

const Api = {
  async getTasks({ limit, Page, token }: getTasksI) {
    const result = await axios(`${BaseUrl}/task?page=${Page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  },
  async createTask({ title, token, description }: createTaskI) {
    const response = await axios.post(
      `${BaseUrl}/task`,
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async editTask({ id, title, token, description }: editTaskI) {
    const response = await axios.put(
      `${BaseUrl}/task/${id}`,
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async completeTask({ id, token }: completeTaskI) {
    const response = await axios.put(
      `${BaseUrl}/task/complete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async deleteTask({ id, token }: deleteTaskI) {
    const response = await axios.delete(`${BaseUrl}/task/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};

export default Api;
