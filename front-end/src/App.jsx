import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/frontend/About";
import Home from "./components/frontend/home";
import "bootstrap/dist/css/bootstrap.min.css"; // Nhập Bootstrap CSS
import "./assets/css/style.scss";
import Services from "./components/frontend/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
