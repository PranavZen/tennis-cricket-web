import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/homepg/Navigation/Navigation";
import Slider from "./components/homepg/Slider/Slider";
import HomePage from "./pages/HomePage";
import Header from "./components/common/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Slider />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
