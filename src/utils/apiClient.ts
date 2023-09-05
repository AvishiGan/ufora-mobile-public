import axios from "axios";

interface apiResponse<T> {
  data: T;
}

const httpClient = axios.create({
  baseURL: process.env.BACKEND_LOCAL_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaHR0ZjV3cjM5NDk5NXJ0dmhjaTIiLCJ1c2VyX3R5cGUiOiJ1bmRlcmdyYWR1YXRlIiwiaWF0IjoxNjkzMzE3MjU1LCJleHAiOjE2OTU5MDkyNTUsInVzZXJuYW1lIjpudWxsfQ.Yn9bbLJ8GFYVhb48xkagkhE4yrysrBnmzEJIfj0j5-A",
  },
});

export const apiClient = {
  post: async <T>(url: string, data: any): Promise<apiResponse<T>> => {
    try {
      const response = await httpClient.post<apiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  get: async <T>(url: string): Promise<apiResponse<T>> => {
    try {
      const response = await httpClient.get<apiResponse<T>>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async <T>(url: string, data: any): Promise<apiResponse<T>> => {
    try {
      const response = await httpClient.put<apiResponse<T>>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async <T>(url: string): Promise<apiResponse<T>> => {
    try {
      const response = await httpClient.delete<apiResponse<T>>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiClient;
