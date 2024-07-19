import { Footer } from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";
import { TopCars } from "./TopCars";

function App() {
  const topCars = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];

  return (
    <>
      <Header title={"new Title"} />
      <Body titleForBody={"new Body"} />
      <Footer />
      <TopCars topCars={topCars} />
    </>
  );
}

export default App;
