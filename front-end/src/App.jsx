import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/frontend/About";
import Home from "./components/frontend/home";
import Dashboard from "./components/backend/Dashboard";
import Services from "./components/frontend/Services";
import Login from "./components/backend/Login";
import RequireAuth from "./components/common/RequireAuth";
import { default as ShowServices } from "./components/backend/services/Show";
import { default as CreateServices } from "./components/backend/services/Create";

import "bootstrap/dist/css/bootstrap.min.css"; // Nhập Bootstrap CSS
import "./assets/css/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          {/* <Route path="/projects" element={<Services />}></Route> */}
          {/* <Route path="/blogs" element={<Services />}></Route> */}
          {/* <Route path="/contact" element={<Services />}></Route> */}
          <Route path="/admin/login" element={<Login />}></Route>
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateServices />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
