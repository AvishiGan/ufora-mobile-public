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
  },
});

/**
 * @constant ApiClient | HTTP client wrapper for handling API requests
 */
const ApiClient = {
  post: async <T,>(url: string, data: any): Promise<T> => {
    try {
      const response = await httpClient.post<ApiResponse<T>>(url, data);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(JSON.stringify(error.response?.data));
      } else if (error instanceof Error && "request" in error) {
        throw new Error("API error: No response received");
      } else {
        throw new Error(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }
  },
};

export default ApiClient;
