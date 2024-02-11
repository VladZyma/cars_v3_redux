import { useDispatch } from "react-redux";

import { carsActions } from "../../redux/carsSlice";

function CarItem({ car }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(carsActions.setCarForUpdate(car.id));
  }

  function handleDelete() {
    dispatch(carsActions.deleteById(car.id));
  }

  function handleAddPhoto(e) {
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append("photo", file);

    dispatch(carsActions.addPhotoById(car.id, formData, file));
  }

  return (
    <li>
      <p>ID: {car.id}</p>
      <p>Brand: {car.brand}</p>
      <p>Year: {car.year}</p>
      <p>Price: {car.price}</p>
      <div style={{ width: "200px" }}>
        {car.photo ? (
          <img style={{ width: "100%" }} src={car.photo} alt={car.brand} />
        ) : (
          <input type="file" onChange={handleAddPhoto} />
        )}
      </div>
      <button onClick={handleUpdate}>UPDATE</button>
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}

export default CarItem;
