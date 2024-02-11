import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import CarForm from "../../components/cars/CarForm";
import CarsList from "../../components/cars/CarsList";
import Pagination from "../../components/pagination/Pagination";

import { carsActions } from "../../redux/carsSlice";
import useCars from "../../hooks/useCars";

import styles from "./CarsPage.module.css";

function CarsPage() {
  const dispatch = useDispatch();
  const { cars, carForUpdate, isLoading, error } = useSelector(
    (state) => state.cars
  );

  const [query, setQuery] = useSearchParams({ page: "1" });

  useCars(dispatch, carsActions, query.get("page"));

  function handlePrevPage() {
    setQuery((prevQuery) => ({ page: +prevQuery.get("page") - 1 }));
  }

  function handleNextPage() {
    setQuery((prevQuery) => ({ page: +prevQuery.get("page") + 1 }));
  }

  return (
    <div className={styles.carsPage}>
      {isLoading && <h1 style={{ color: "green" }}>Loading.........</h1>}
      {error && <h1 style={{ color: "red" }}>{`Error: ${error}`}</h1>}

      <CarForm dispatch={dispatch} carForUpdate={carForUpdate} />

      <CarsList cars={cars.items} />

      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        isPrev={cars.prev}
        isNext={cars.next}
      />
    </div>
  );
}

export default CarsPage;
