//Components
import Home from "./pages/Home";
import Loader from "./components/molecules/Loader";
//Context
import { LoaderContext } from "./context/LoaderProvider/context";

function App() {
  const {
    state: { loading },
  } = LoaderContext();

  return (
    <>
      <Home />
      <Loader show={loading} />
    </>
  );
}

export default App;
