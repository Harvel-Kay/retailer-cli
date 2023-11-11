import http from "./http";
import { AxiosRequestConfig } from "axios";

class Http<T> {
  constructor(public endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return http.get(this.endpoint, config);
  };

  post = (payload: T, config?: AxiosRequestConfig) => {
    return http.post(this.endpoint, payload, config);
  };

  put = (payload: T, id: string, config?: AxiosRequestConfig) => {
    return http.put(`${this.endpoint}/${id}`, payload, config);
  };
  delete = (id: string) => {
    return http.delete(`${this.endpoint}/${id}`);
  };

  subPost = (
    subPath: string,
    payload: unknown,
    config?: AxiosRequestConfig
  ) => {
    return http.post(`${this.endpoint}/${subPath}`, payload, config);
  };
}

const api = <T>(endpoint: string) => new Http<T>(endpoint);

export default api;
