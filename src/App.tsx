import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMatches from "./components/allmatchesPage/AllMatches";
import DomesticTournament from "./components/domesticTournamentPage/DomesticTournament";
import { HomepageLayout } from "./components/homepg/HomepageLayout";
import TournamentDashboard from "./components/tournamentDashboardPage/TournamentDashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomepageLayout/>} />
      <Route path="/matches" element={<AllMatches />} />
      <Route path="/tournamentDashboard" element={<TournamentDashboard/>} />
      <Route path="/domesticTournament" element={<DomesticTournament/>} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
