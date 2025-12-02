import axios from "axios";
import { RegisterUser } from "../models/types/user";

const ApiClient = () => {
  const AxiosRequest = axios.create({
    baseURL: "/api/",
    headers: { "Content-Type": "application/json" },
  });

  const getProperti = (page: number, limit: number | null) => AxiosRequest.get(`properti?page=${page}&limit=${limit}`);
  const getCompanies = (page: number, limit: number | null) => AxiosRequest.get(`companies?page=${page}&limit=${limit}`);
  const register = (data: RegisterUser) => AxiosRequest.post(`auth/register`, data);
  const filtersItem = () => AxiosRequest.get(`properti/filter-items`);

  return {
    getProperti,
    register,
    getCompanies,
    filtersItem
  };
};

export default ApiClient;
