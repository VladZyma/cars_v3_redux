import { axiosService } from "./axios.service";
import { urls } from "../configs/urls";

const _accessTokenKey = "accessTokenKey";
const _refreshTokenKey = "refreshTokenKey";

const authService = {
  register: (user) => axiosService.post(urls.register, user),
  login: (user) => axiosService.post(urls.auth.login, user),
  refresh: (refresh) => axiosService.post(urls.auth.refresh, { refresh }),

  setAccessTokens: ({ access, refresh }) => {
    localStorage.setItem(_accessTokenKey, access);
    localStorage.setItem(_refreshTokenKey, refresh);
  },

  getAccessToken: () => {
    return localStorage.getItem(_accessTokenKey);
  },

  getRefreshToken: () => {
    return localStorage.getItem(_refreshTokenKey);
  },

  deleteAccessTokens: () => {
    localStorage.removeItem(_accessTokenKey);
    localStorage.removeItem(_refreshTokenKey);
  },
};

export { authService };
