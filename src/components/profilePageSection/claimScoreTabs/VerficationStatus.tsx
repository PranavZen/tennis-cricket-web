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
  bat_matches: number;
  bat_innings: number;
  bat_runs: number;
  bat_balls: number;
  bat_fours: number;
  bat_sixes: number;
  bat_fifty: number;
  bat_hundred: number;
  bat_highest: number;
  bat_strike_rate: number;
  bat_average: number;
  bowl_matches: number;
  bowl_innings: number;
  bowl_wickets: number;
  bowl_balls: number;
  bowl_bbf: string;
  bowl_economy_rate: number;
  bowl_overs: number;
  bowl_runs: number;
  bowl_wicket: number;
  bowl_maidens: number;
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
        if (response.data.status === "success") {
          setClaimScore(response.data.message.data);
        }
        // console.log("1212111111", response);
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
        <div className="table-responsive">
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
                  <td>{claim.user_comment ? claim.user_comment : "-"}</td>
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
        </div>
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
            <div className="modal-wrapper">
              <div
                className="tournament-details"
                key={detail.tournament_result[0]?.season}
              >
                <h3>Tournament Details</h3>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <strong>Season:</strong>{" "}
                      {detail.tournament_result[0]?.season}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Team:</strong>{" "}
                      {detail.tournament_result[0]?.team_name}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <strong>Tournament:</strong>{" "}
                      {detail.tournament_result[0]?.tournament_name}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Status:</strong> {detail.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="youtube-links">
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
              </div> */}
              <div className="youtube-links">
                <h3>Youtube Link</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <p>Serial No.</p>
                      </th>
                      <th>
                        <p>Remark</p>
                      </th>
                      <th>
                        <p>YouTube Link</p>
                      </th>
                      <th>
                        <p>Timestamp Ranges</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.tournament_result[0]?.youtube_link.map(
                      (linkObj, index) => (
                        <tr key={linkObj.link}>
                          <td>{index + 1}</td>
                          <td>{linkObj.remark}</td>
                          <td>
                            <a
                              href={linkObj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
        
                              {linkObj.link !== ""
                                ? `Link ${index + 1}`
                                : "Link 1"}
                            </a>
                          </td>
                          <td>
                            {linkObj.time_from
                              .split(",")
                              .map((timestampFrom: string, idx: number) => (
                                <span key={idx}>
                                  {timestampFrom.trim()} -{" "}
                                  {linkObj.time_to.split(",")[idx].trim()}
                                  {idx <
                                    linkObj.time_from.split(",").length - 1 &&
                                    ", "}
                                </span>
                              ))}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="performance-section">
                <h3>Batting Performance</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <p>Matches</p>
                      </th>
                      <th>
                        <p>Innings</p>
                      </th>
                      <th>
                        <p>Wickets</p>
                      </th>
                      <th>
                        <p>Runs</p>
                      </th>
                      <th>
                        <p>Balls</p>
                      </th>
                      <th>
                        <p>Fours</p>
                      </th>
                      <th>
                        <p>Sixes</p>
                      </th>
                      <th>
                        <p>Fifty</p>
                      </th>
                      <th>
                        <p>Hundred</p>
                      </th>
                      <th>
                        <p>Highest</p>
                      </th>
                      <th>
                        <p>Strike Rate</p>
                      </th>
                      <th>
                        <p>Average</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{detail.bat_matches}</td>
                      <td>{detail.bat_innings}</td>
                      <td>{detail.bowl_wickets}</td>
                      <td>{detail.bat_runs}</td>
                      <td>{detail.bat_balls}</td>
                      <td>{detail.bat_fours}</td>
                      <td>{detail.bat_sixes}</td>
                      <td>{detail.bat_fifty}</td>
                      <td>{detail.bat_hundred}</td>
                      <td>{detail.bat_highest}</td>
                      <td>{detail.bat_strike_rate}</td>
                      <td>{detail.bat_average}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="performance-section">
                <h3>Bowling Performance</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <p>Matches</p>
                      </th>
                      <th>
                        <p>Innings</p>
                      </th>
                      <th>
                        <p>Wickets</p>
                      </th>
                      <th>
                        <p>Runs</p>
                      </th>
                      <th>
                        <p>Balls</p>
                      </th>
                      <th>
                        <p>Economy Rate</p>
                      </th>
                      <th>
                        <p>BBF</p>
                      </th>
                      <th>
                        <p>Overs</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{detail.bowl_matches}</td>
                      <td>{detail.bowl_innings}</td>
                      <td>{detail.bowl_wickets}</td>
                      <td>{detail.bowl_runs}</td>
                      <td>{detail.bowl_balls}</td>
                      <td>{detail.bowl_economy_rate}</td>
                      <td>{detail.bowl_bbf}</td>
                      <td>{detail.bowl_maidens}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </Modal>
    </div>
  );
};

export default VerificationStatus;
