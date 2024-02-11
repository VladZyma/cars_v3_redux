import { carService } from "../services/car.service";

const initialState = {
  cars: {},
  carForUpdate: null,
  isLoading: false,
  error: null,
};

export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case "cars/loading":
      return { ...state, isLoading: action.payload };

    case "cars/error":
      return { ...state, isLoading: false, error: action.payload };

    case "cars/getAll":
      return { ...state, cars: action.payload, error: null };

    case "cars/addCar":
      return {
        ...state,
        cars: { ...state.cars, items: [action.payload, ...state.cars.items] },
      };

    case "cars/setCarForUpdate":
      const car = state.cars.items.find((car) => car.id === action.payload);
      return { ...state, carForUpdate: car };

    case "cars/updateById":
      const cars = { ...state.cars };
      const oldCar = cars.items.find((car) => car.id === state.carForUpdate.id);

      Object.assign(oldCar, action.payload);

      return { ...state, cars, carForUpdate: null };

    case "cars/addPhotoById":
      const carsArr = state.cars.items.splice(0);
      const carWithoutPhoto = carsArr.find(
        (car) => car.id === action.payload.data.id
      );

      Object.assign(carWithoutPhoto, {
        ...action.payload.data,
        photo: URL.createObjectURL(action.payload.file),
      });

      return { ...state, cars: { ...state.cars, items: carsArr } };

    case "cars/deleteById":
      const carsArr2 = state.cars.items
        .splice(0)
        .filter((car) => car.id !== action.payload);

      return { ...state, cars: { ...state.cars, items: carsArr2 } };
    default:
      return state;
  }
}

function getAll(page) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "cars/loading", payload: true });

      const { data } = await carService.getAll(page);

      dispatch({ type: "cars/getAll", payload: data });
      dispatch({ type: "cars/loading", payload: false });
    } catch (error) {
      dispatch({ type: "cars/error", payload: error.message });
    }
  };
}

function addCar(car) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "cars/loading", payload: true });

      const { data } = await carService.add(car);

      dispatch({ type: "cars/addCar", payload: data });
      dispatch({ type: "cars/loading", payload: false });
    } catch (error) {
      dispatch({ type: "cars/error", payload: error.message });
    }
  };
}

function setCarForUpdate(id) {
  return { type: "cars/setCarForUpdate", payload: id };
}

function updateById(id, car) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "cars/loading", payload: true });

      const { data } = await carService.updateById(id, car);

      dispatch({ type: "cars/updateById", payload: data });
      dispatch({ type: "cars/loading", payload: false });
    } catch (error) {
      dispatch({ type: "cars/error", payload: error.message });
    }
  };
}

function addPhotoById(id, formData, file) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "cars/loading", payload: true });

      const { data } = await carService.addPhotoById(id, formData);

      dispatch({ type: "cars/addPhotoById", payload: { data, file } });
      dispatch({ type: "cars/loading", payload: false });
    } catch (error) {
      dispatch({ type: "cars/error", payload: error.message });
    }
  };
}

function deleteById(id) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "cars/loading", payload: true });

      await carService.deleteById(id);

      dispatch({ type: "cars/deleteById", payload: id });
      dispatch({ type: "cars/loading", payload: false });
    } catch (error) {
      dispatch({ type: "cars/error", payload: error.message });
    }
  };
}

const carsActions = {
  getAll,
  addCar,
  setCarForUpdate,
  updateById,
  addPhotoById,
  deleteById,
};

export { carsActions };
