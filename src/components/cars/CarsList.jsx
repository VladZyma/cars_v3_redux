import CarItem from "./CarItem";

function CarsList({ cars }) {
  return (
    <ul>
      {cars?.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
}

export default CarsList;
