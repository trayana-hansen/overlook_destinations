import "./App.scss";
import AppRouter from "./Components/AppRouter/AppRouter";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Partials/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
