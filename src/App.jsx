import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <div className="main_content">

          <Routes>

            <Route path="/list" element={<ShopList />} />

            <Route path="/add" element={<AddItem/>} />

          </Routes>

        </div>

      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
