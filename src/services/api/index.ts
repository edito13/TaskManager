import axios from "axios";

export const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://taskmanager-backend-production.up.railway.app";

const Api = {
  async getTasks({ limit, Page, token }: getTasks) {
    const { data } = await axios(
      `${BaseUrl}/task?page=${Page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },
  async loginUser(userLoginData: loginUser) {
    const { data } = await axios.post(`${BaseUrl}/user/signin`, userLoginData);
    return data;
  },
  async createUser(userData: createUser) {
    const { data } = await axios.post(`${BaseUrl}/user/signup`, userData);
    return data;
  },
  async createTask({ title, token, description }: createTask) {
    const { data } = await axios.post(
      `${BaseUrl}/task`,
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },
  async editTask({ id, title, token, description }: editTask) {
    const { data } = await axios.put(
      `${BaseUrl}/task/${id}`,
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },
  async completeTask({ id, token }: completeTask) {
    const { data } = await axios.put(
      `${BaseUrl}/task/complete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },
  async deleteTask({ id, token }: deleteTask) {
    const { data } = await axios.delete(`${BaseUrl}/task/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};

export default Api;
