import axios from "axios";
import { createBrowserHistory } from "history";

import { baseURL } from "../configs/urls";
import { authService } from "./auth.service";

let isRefreshing = false;
const history = createBrowserHistory();

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((config) => {
  const accessToken = authService.getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosService.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const refreshToken = authService.getRefreshToken();

    if (error.response?.status === 401 && refreshToken && !isRefreshing) {
      isRefreshing = true;
      try {
        const { data } = await authService.refresh(refreshToken);
        authService.setAccessTokens(data);
      } catch (e) {
        authService.deleteAccessTokens();
        history.replace("/login?expSession=true");
      }
      isRefreshing = false;
      return axiosService(error.config);
    }

    return Promise.reject(error);
  }
);

export { axiosService, history };
