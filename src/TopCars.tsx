type TopCarsPropsType = { topCars: CarsType[] };
type CarsType = { manufacturer: string; model: string };

export const TopCars = ({ topCars }: TopCarsPropsType) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {topCars.map((el, index) => (
            <tr key={index}>
              <td>{el.manufacturer}</td>
              <td>{el.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
