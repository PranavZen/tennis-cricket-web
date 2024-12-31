import { useState } from "react";
import "../../components/profilePageSection/profilePage.scss";
import Navigation from "../homepg/Navigation/Navigation";
import AllProfileTab from "./AllProfileTab";

const ProfilePage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
  return (
    <section>
      <Navigation />
      <div className="background-img">

        <div className="profile-container"></div>

        <div className="profile-picture">
            <img src="images\fluidImg4.png" alt="profile-picture" onClick={openModal}/>
        </div>
        <div className="user-info">
          <h3 className="user-name">User Name</h3>
          <p className="user-location">Mumbai 154 Views</p>
          <p className="player-type">Right-arm Off Break</p>
        </div>
        
        {/* <div className="score-container">
          <ul className="score-list">
            <li className="score-item">
              <div className="score-number">190</div>
              <div className="score-label">MATCHES</div>
            </li>
            <li className="score-item">
              <div className="score-number">1073</div>
              <div className="score-label">RUNS</div>
            </li>
            <li className="score-item">
              <div className="score-number">116</div>
              <div className="score-label">WICKETS</div>
            </li>
          </ul>
        </div> */}

        {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img
              src="images\fluidImg4.png"
              alt="Enlarged Profile"
            />
          </div>
        </div>
      )}
      </div>
      
      <AllProfileTab />
    </section>
  );
};

export default ProfilePage;
