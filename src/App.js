import React from "react";
import Navbar from "./components/Navbar";
import {} from "./app.scss";
import Title from "./components/Title";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Fotter from "./components/Footer";

import MoviesItem from "./components/MoviesItem";
import SeriesItem from "./components/SeriesItem";

const App = () => {
  return (
    <>
   
      <Navbar />

      <Title title="Title" />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesItem title="Movies"/> } />
        <Route path="/series" element={<SeriesItem title="Series"/> } />
      </Routes>
      <Fotter />
    </>
  );
};

export default App;
