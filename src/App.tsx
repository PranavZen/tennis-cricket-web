import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterCard from "./components/FilterPage/FilterCard";
import { HomepageLayout } from "./components/homepg/HomepageLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomepageLayout/>}/>
      <Route path="/matches" element={<FilterCard />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
