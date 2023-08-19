import axios, { AxiosResponse } from "axios";
import { HOST_NAME } from "./constants/hostName";

interface ApiResponse<T> {
  data: T;
}

const httpClient = axios.create({
  baseURL: HOST_NAME,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
});

const ApiClient = {
  post: async <T,>(url: string, data: any): Promise<ApiResponse<T>> => {
    try {
      const response = await httpClient.post<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  get: async <T,>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await httpClient.get<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiClient;
