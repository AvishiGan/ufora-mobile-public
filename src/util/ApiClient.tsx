import axios from "axios";
import BACKEND_SERVER from "@env";

interface ApiResponse<T> {
  data: T;
}

const httpClient = axios.create({
  baseURL: BACKEND_SERVER as unknown as string,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  put: async <T,>(url: string, data: any): Promise<ApiResponse<T>> => {
    try {
      const response = await httpClient.put<ApiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async <T,>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await httpClient.delete<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiClient;
