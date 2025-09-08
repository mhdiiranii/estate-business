import axios from "axios";

const ApiClient = () => {
  const AxiosRequest = axios.create({
    baseURL: "/api/",
    headers: { "Content-Type": "application/json" },
  });

  const getPropertiPage = (page: number, limit: number | null ) => AxiosRequest.get(`properti?page=${page}&limit=${limit}`);
  return {
    getPropertiPage,
  };
};

export default ApiClient;
