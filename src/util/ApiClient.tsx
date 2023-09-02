import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface ApiResponse<T> {
  data: T;
}

// const token = await SecureStore.getItemAsync("token");

const httpClient = axios.create({
  // baseURL: process.env.BACKEND_SERVER,
  baseURL: process.env.HOST_NAME,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer ${process.env.TOKEN}`,
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaHR0ZjV3cjM5NDk5NXJ0dmhjaTIiLCJ1c2VyX3R5cGUiOiJ1bmRlcmdyYWR1YXRlIiwiaWF0IjoxNjkzMzE3MjU1LCJleHAiOjE2OTU5MDkyNTUsInVzZXJuYW1lIjpudWxsfQ.Yn9bbLJ8GFYVhb48xkagkhE4yrysrBnmzEJIfj0j5-A",
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
