import { useEffect, useState } from "react";
import "../../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/claimScoreTabs/claimModal.scss";
import axios from "axios";
import Spinner from "../../common/spinner/Spinner";
import { Button, Modal } from "antd";

interface ClaimScore {
  id: number;
  status: string;
  user_comment: string;
  tournament_result: {
    youtube_link: {
      link: string;
    }[];
  }[];
}

interface ClaimDetail {
  bat_balls: number;
  bat_dismissal: string;
  bat_fours: number;
  bat_sixes: number;
  bat_strike_rate: number;
  bowl_bbf: string;
  bowl_economy_rate: number;
  bowl_overs: number;
  bowl_runs: number;
  bowl_wicket: number;
  status: string;
  tournament_result: {
    season: number;
    team_name: string;
    tournament_name: string;
    youtube_link: {
      link: string;
      remark: string;
      time_from: string;
      time_to: string;
    }[];
  }[];
}

const token = localStorage.getItem("token");

const VerificationStatus = () => {
  const [claimScore, setClaimScore] = useState<ClaimScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState<number | null>(null);
  const [claimDetails, setClaimDetails] = useState<ClaimDetail[]>([]);

  useEffect(() => {
    const fetchClaimScore = async () => {
      try {
        const response = await axios.get(
          "https://my.tc.popopower.com/api/get-claim-score",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setClaimScore(response.data.message.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching claim score:", error);
        setLoading(false);
      }
    };

    fetchClaimScore();
  }, [token]);

  useEffect(() => {
    const fetchClaimDetails = async () => {
      if (singleData !== null) {
        try {
          const response = await axios.get(
            `https://my.tc.popopower.com/api/get-claim-score/${singleData}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setClaimDetails(response.data.message.data);
          setModalLoading(false);
        } catch (error) {
          console.error("Error fetching claim details:", error);
          setModalLoading(false);
        }
      }
    };

    fetchClaimDetails();
  }, [singleData]);

  const claimInfo = (id: number): void => {
    setIsModalOpen(true);
    setSingleData(id);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="verification-status">
      {loading ? (
        <Spinner />
      ) : (
        <table className="status-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Status</th>
              <th>User Comment</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            {claimScore.map((claim, index) => (
              <tr key={claim.id}>
                <td>{index + 1}</td>
                <td>{claim.status}</td>
                <td>{claim.user_comment}</td>
                <td>
                  <a
                    href="#"
                    onClick={() => claimInfo(claim.id)}
                    style={{ cursor: "pointer" }}
                  >
                    View More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        title="User Claimed Data"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        {modalLoading ? (
          <Spinner />
        ) : (
          claimDetails.map((detail) => (
            <div key={detail.tournament_result[0]?.season}>
              <h3>Tournament Details</h3>
              <p>
                <strong>Season:</strong> {detail.tournament_result[0]?.season}
              </p>
              <p>
                <strong>Team:</strong> {detail.tournament_result[0]?.team_name}
              </p>
              <p>
                <strong>Tournament:</strong>{" "}
                {detail.tournament_result[0]?.tournament_name}
              </p>
              <p>
                <strong>Status:</strong> {detail.status}
              </p>

              <div className="youtube-links">
                {detail.tournament_result[0]?.youtube_link.map((linkObj) => (
                  <div key={linkObj.link}>
                    <p>
                      <strong>Remark:</strong> {linkObj.remark}
                    </p>
                    <p>
                      <strong>Time From:</strong> {linkObj.time_from}
                    </p>
                    <a
                      href={linkObj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>
                      <strong>Youtube Link: </strong>
                      {linkObj.link}
                      </p>
                    </a>
                  </div>
                ))}
              </div>

              <div className="performance-section">
                <h3>Batting Performance</h3>
                <p>
                  <strong>Balls:</strong> {detail.bat_balls}
                </p>
                <p>
                  <strong>Dismissal:</strong> {detail.bat_dismissal}
                </p>
                <p>
                  <strong>Fours:</strong> {detail.bat_fours}
                </p>
                <p>
                  <strong>Sixes:</strong> {detail.bat_sixes}
                </p>
                <p>
                  <strong>Strike Rate:</strong> {detail.bat_strike_rate}
                </p>
              </div>

              <div className="performance-section">
                <h3>Bowling Performance</h3>
                <p>
                  <strong>BBF:</strong> {detail.bowl_bbf}
                </p>
                <p>
                  <strong>Economy Rate:</strong> {detail.bowl_economy_rate}
                </p>
                <p>
                  <strong>Overs:</strong> {detail.bowl_overs}
                </p>
                <p>
                  <strong>Runs:</strong> {detail.bowl_runs}
                </p>
                <p>
                  <strong>Wicket:</strong> {detail.bowl_wicket}
                </p>
              </div>
            </div>
          ))
        )}
      </Modal>
    </div>
  );
};

export default VerificationStatus;
