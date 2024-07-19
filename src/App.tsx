import { Footer } from './Footer';
import { Header } from './Header';
import { Body } from './Body';

function App() {
  return (
    <>
      <Header title={"new Title"}/>
      <Body titleForBody={"new Body"} />
      <Footer />
    </>
  );
}

export default App;
