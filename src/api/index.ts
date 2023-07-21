import axios from "axios";

const Api = {
  async getUsers() {
    const result = await axios("http://localhost:8000/user");
    return result.data;
  },
};

export default Api;
