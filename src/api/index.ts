import axios from "axios";

const BaseUrl = "http://localhost:8000";

interface TaskI {
  title: string;
  description: string;
}

const Api = {
  async getUsers() {
    const result = await axios(`${BaseUrl}/user`);
    return result.data;
  },
  async createTask(data: TaskI) {
    const response = await axios.post(`${BaseUrl}/task`, data);
    return response.data;
  },
  async deleteTask(id: string) {
    const response = await axios.delete(`${BaseUrl}/task/${id}`);
    return response.data;
  },
};

export default Api;
