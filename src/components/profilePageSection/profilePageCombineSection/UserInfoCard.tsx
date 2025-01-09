import React, { useState } from "react";
import "../../../components/profilePageSection/profilePageCombineSection/userInfoCard.scss";

const UserInfoCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const profileImage = "images/fluidImg1.png";

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="background-image">
      <div className="container">
        <div className="profile-pageWrap">
          <div className="profile-container">
            <div className="profile-picture">
              <img
                src={profileImage}
                alt="profile-picture"
                onClick={openModal}
              />
            </div>
            <div className="info-score">
              <div className="user-info">
                <h1 className="user-name">User Name</h1>
                <p className="user-location">Mumbai 154 Views</p>
                <p className="player-type">RHB | Right-arm Off Break</p>
              </div>

              <div className="score-container">
                <ul className="score-list">
                  <li className="score-item">
                    <div className="score-number">190</div>
                    <div className="score-label">
                      <i className="fa-solid fa-handshake"></i> MATCHES
                    </div>
                  </li>
                  <li className="score-item">
                    <div className="score-number">1073</div>
                    <div className="score-label">
                      <i className="fa-solid fa-chart-line"></i> RUNS
                    </div>
                  </li>
                  <li className="score-item">
                    <div className="score-number">116</div>
                    <div className="score-label">
                      <i className="fa-solid fa-bullseye"></i> WICKETS
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="modal-overlay"
            onClick={closeModal}
            role="presentation"
            aria-hidden={!isModalOpen}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={profileImage} alt="Enlarged Profile" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
