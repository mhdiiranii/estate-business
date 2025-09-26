import axios from "axios";
import { RegisterUser } from "../models/types/user";

const ApiClient = () => {
  const AxiosRequest = axios.create({
    baseURL: "/api/",
    headers: { "Content-Type": "application/json" },
  });

  const getPropertiPage = (page: number, limit: number | null ) => AxiosRequest.get(`properti?page=${page}&limit=${limit}`);
  const register = (data:RegisterUser) => AxiosRequest.post(`auth/register`,data);
  
  return {
    getPropertiPage,
    register
  };
};

export default ApiClient;
