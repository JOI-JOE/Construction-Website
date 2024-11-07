import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import "bootstrap/dist/css/bootstrap.min.css"; // Nhập Bootstrap CSS
import "./assets/css/style.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
