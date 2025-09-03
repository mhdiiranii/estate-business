import axios from "axios";

const ApiClient = () => {
  const AxiosRequest = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: { "Content-Type": "application/json" },
  });

  const getPropertiPage = (page: number, limit: number) => AxiosRequest.get(`properti?page=${page}&limit=${limit}`);
  return {
    getPropertiPage,
  };
};

export default ApiClient;
