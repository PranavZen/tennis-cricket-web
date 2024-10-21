import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/homepg/Slider/Slider";
import HomePage from "./pages/HomePage";
import Header from "./components/common/header/Header";
import AllMatches from "./components/allmatchesPage/AllMatches";
import TournamentDashboard from "./components/tournamentDashboardPage/TournamentDashboard";
import DomesticTournament from "./components/domesticTournamentPage/DomesticTournament";

function App() {
  return (
    <BrowserRouter>
      {/* <Slider />
      <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allMatches" element={<AllMatches/>} />
        <Route path="/tournamentDashboard" element={<TournamentDashboard/>} />
        <Route path="/domesticTournamnet" element={<DomesticTournament/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
