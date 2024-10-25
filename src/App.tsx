import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMatches from "./components/allmatchesPage/AllMatches";
import DomesticTournament from "./components/domesticTournamentPage/DomesticTournament";
import Slider from "./components/homepg/Slider/Slider";
import TournamentDashboard from "./components/tournamentDashboardPage/TournamentDashboard";
import HomePage from "./pages/HomePage";
import Footer from "./components/homepg/footerSection/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Slider />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allMatches" element={<AllMatches />} />
        <Route path="/tournamentDashboard" element={<TournamentDashboard />} />
        <Route path="/domesticTournamnet" element={<DomesticTournament />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
