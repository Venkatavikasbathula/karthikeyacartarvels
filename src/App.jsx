import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CarsPage from "./pages/CarsPage";
import About from "./pages/About";
import Cardetails from "./pages/Cardetails";
import Form from "./pages/Form";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carspage" element={<CarsPage />} />
        <Route path="/cardetails/:id" element={<Cardetails />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
