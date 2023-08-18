import axios, { AxiosResponse } from "axios";
import { HOST_NAME } from "./constants/hostName";

/**
 * @template T | Generic type parameter
 */
interface ApiResponse<T> {
  data: T;
}

/**
 * @constant httpClient | Create a reusable instance of axios with common configurations
 */
const httpClient = axios.create({
  baseURL: HOST_NAME,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      // Remove this manually added token
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWZ5OTJ1Y2g2OWk2OHVkd2Z5dGEiLCJ1c2VyX3R5cGUiOiJ1bmRlcmdyYWR1YXRlIiwiaWF0IjoxNjkyMTI1MDg4LCJleHAiOjE2OTQ3MTcwODgsInVzZXJuYW1lIjpudWxsfQ.yinLBy2sx0gAW5jvWJrv_EFfnvUShA0ylKckUNWGhU0",
  },
});

const ApiClient = {
  post: async <T,>(url: string, data: any): Promise<T> => {
    try {
      const response = await httpClient.post<ApiResponse<T>>(url, data);
      return response.data.data;
    } catch (error) {
      // Handle errors here
      throw error;
    }
  },

  get: async <T,>(url: string): Promise<T> => {
    try {
      const response = await httpClient.get<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      // Handle errors here
      throw error;
    }
  },
};

export default ApiClient;