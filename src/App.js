import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/navBar";
import Routes from "./Routes/index";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
