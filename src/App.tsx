import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMatches from "./components/allmatchesPage/AllMatches";
import DomesticTournament from "./components/domesticTournamentPage/DomesticTournament";
import Slider from "./components/homepg/Slider/Slider";
import TournamentDashboard from "./components/tournamentDashboardPage/TournamentDashboard";
import HomePage from "./pages/HomePage";
import Footer from "./components/homepg/footerSection/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegistrationForm from "./pages/RegistrationSection/RegistrationForm";
import LoginForm from "./pages/loginFormSection/LoginForm";
import ForgotPassword from "./pages/forgotPasswordSection/ForgotPassword";
import { useState } from "react";
import Loader from "./components/common/loader/Loader";
import MatchStat from "./pages/matchStatSection/MatchStat";

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
        <Route path='/matchStat' element={<MatchStat/>} />
        <Route path="/registrationPage" element={<RegistrationForm/>}/>
        <Route path="/loginPage" element={<LoginForm/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;














// {fileName && (
//   <div
//     id="fileDetails"
//     className="upload-area__file-details file-details file-details--open"
//   >
//     <h3 className="file-details__title">Uploaded File</h3>
//     <div id="uploadedFile" className="uploaded-file uploaded-file--open">
//       <div className="uploaded-file__icon-container">
//         <i className="bx bxs-file-blank uploaded-file__icon"></i>
//         <span className="uploaded-file__icon-text">{fileType}</span>
//       </div>
//       <div
//         id="uploadedFileInfo"
//         className="uploaded-file__info uploaded-file__info--active"
//       >
        
//         <span className="uploaded-file__size">{fileSize}</span>
//         <span className="uploaded-file__progress">{progress}%</span>
//         <div className="drop-zoon__progress">
//           <div
//             className="drop-zoon__progress-bar"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//         <span className="uploaded-file__name">{fileName}</span>
//       </div>
//     </div>
//   </div>