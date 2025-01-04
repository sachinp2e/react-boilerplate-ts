import { axiosInstance } from './axios-instance';
import type { ApiResponse } from './types';

export class ApiClient {
  static async get<T>(endpoint: string, params?: object): Promise<ApiResponse<T>> {
    const response = await axiosInstance.get(endpoint, { params });
    return {
      data: response.data,
      status: response.status,
    };
  }

  static async post<T>(endpoint: string, data?: object): Promise<ApiResponse<T>> {
    const response = await axiosInstance.post(endpoint, data);
    return {
      data: response.data,
      status: response.status,
    };
  }

  static async put<T>(endpoint: string, data?: object): Promise<ApiResponse<T>> {
    const response = await axiosInstance.put(endpoint, data);
    return {
      data: response.data,
      status: response.status,
    };
  }

  static async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await axiosInstance.delete(endpoint);
    return {
      data: response.data,
      status: response.status,
    };
  }
}