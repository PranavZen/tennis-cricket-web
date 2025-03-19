import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMatches from "./components/allmatchesPage/AllMatches";
import DomesticTournament from "./components/domesticTournamentPage/DomesticTournament";
import Slider from "./components/homepg/Slider/Slider";
import TournamentDashboard from "./components/tournamentDashboardPage/TournamentDashboard";
import HomePage from "./pages/HomePage";
import Footer from "./components/homepg/footerSection/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegistrationForm from "./components/RegistrationSection/RegistrationForm";
import LoginForm from "./components/loginFormSection/LoginForm";
import ForgotPassword from "./components/forgotPasswordSection/ForgotPassword";
import { useState } from "react";
import Loader from "./components/common/loader/Loader";
import MatchStat from "./components/matchStatSection/MatchStat";
import MatchDetailCard from "./components/matchDetails/MatchDetailCard";
import ProfilePage from "./components/profilePageSection/ProfilePage";
import Slidertop from "./components/homepg/Slider/SliderTop";
import ContactUs from "./components/contact/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Slider /> */}
      <Slidertop/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allMatches" element={<AllMatches />} />
        <Route path="/tournamentDashboard" element={<TournamentDashboard />} />
        <Route path="/domesticTournamnet" element={<DomesticTournament />} />
        {/* <Route path="/matchStat" element={<MatchStat />} /> */}
        <Route path="/registrationPage" element={<RegistrationForm />} />
        <Route path="/loginPage" element={<LoginForm />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/matchDetailCard" element={<MatchDetailCard />} />
        <Route path="/matchStat/:id" element={<MatchStat />} />
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
