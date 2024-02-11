import { axiosService } from "./axios.service";
import { urls } from "../configs/urls";

const carService = {
  getAll: (page = 1, page_size = 4) =>
    axiosService.get(urls.cars, { params: { page, page_size } }),
  add: (car) => axiosService.post(urls.cars, car),
  updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
  deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
  addPhotoById: (id, data) =>
    axiosService.put(`${urls.cars}/${id}/photo`, data),
};

export { carService };
