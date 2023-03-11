import { Outlet } from "../node_modules/react-router-dom/dist/index";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet/>
      <Slider/>
    </div>
  );
}

export default App;
