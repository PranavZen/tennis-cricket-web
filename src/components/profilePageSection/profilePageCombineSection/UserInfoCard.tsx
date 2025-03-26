import React, { useEffect, useState } from "react";
import "../../../components/profilePageSection/profilePageCombineSection/userInfoCard.scss";
import axios from "axios";

const UserInfoCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const userName = localStorage.getItem("userName");
  const firstName = localStorage.getItem("firstName");
  const surname = localStorage.getItem("surname");
  const cityName = localStorage.getItem("cityName");
  // const profileImg = localStorage.getItem("profileImage");
  const battingStyle = localStorage.getItem("battingStyle");
  const bowlingStyle = localStorage.getItem("bowlingStyle");

  // console.log("bowlingStylebowlingStyle", bowlingStyle);
  const matches = localStorage.getItem("matches") ?? "0";
  const runs = localStorage.getItem("runs") ?? "0";
  const wickets = localStorage.getItem("wickets") ?? "0";

  const profileImg = localStorage.getItem('profile-image')

  // *****************************************************************
  interface BattersStats {
    matches: number;
    runs: number;
    // wickets: number;
  }

  interface BowlersStats {
    wickets: number;
  }

  const [batters, setBatters] = useState<BattersStats | null>(null);
  const [bowlers, setBowlers] = useState<BowlersStats | null>(null);

  const player_id = localStorage.getItem("player_id");
  useEffect(() => {
    axios
      .get(`https://my.tc.popopower.com/api/get-player-stats/${player_id}`, {})
      .then((response) => {
        setBatters(response.data.message.data.batting);
        setBowlers(response.data.message.data.bowling)           
      })
      .catch((error) => {
        console.error("Error fetching player stats:", error);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="background-image">
      <div className="container">
        <div className="profile-pageWrap">
          <div className="profile-container">
            <div className="profile-picture">
              <img
                src={`https://my.tc.popopower.com/${profileImg}`}
                alt="profile-picture"
                onClick={openModal}
              />
            </div>
            <div className="info-score">
              <div className="user-info">
                <h1 className="user-name">
                  Id : {userName} <br/>
                  {firstName} {surname}
                </h1>
                <p className="user-location">{cityName}</p>
                {/* 154 Views */}
                <p className="player-type">
                  {battingStyle === 'null' ? '' : battingStyle} | {bowlingStyle === 'null' ? '' : bowlingStyle}
                </p>
              </div>

              <div className="score-container">
                <ul className="score-list">
                  <li className="score-item">
                    <div className="score-number">{batters?.matches}</div>
                    <div className="score-label">
                      <i className="fa-solid fa-handshake"></i> MATCHES
                    </div>
                  </li>
                  <li className="score-item">
                    <div className="score-number">{batters?.runs}</div>
                    <div className="score-label">
                      <i className="fa-solid fa-chart-line"></i> RUNS
                    </div>
                  </li>
                  <li className="score-item">
                    <div className="score-number">{bowlers?.wickets}</div>
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
              <img src={`https://my.tc.popopower.com/${profileImg}`} alt="Enlarged Profile" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;