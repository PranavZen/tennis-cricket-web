import { useEffect, useState } from "react";
import "../../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/claimScoreTabs/claimModal.scss";
import axios from "axios";
import Spinner from "../../common/spinner/Spinner";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

interface ClaimScore {
  id: number;
  status: string;
  maker_comment: string;
  tournament_result: {
    youtube_link: {
      link: string;
    }[];
  }[];
}

interface ClaimDetail {
  matches: [];
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
  tournament_start_date: string;
  tournament_end_date: string;
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

interface Claim {
  id: string; // or number depending on API response
  status: string;
  // Add other properties if necessary
}

const token = localStorage.getItem("token");

const VerificationStatus = () => {
  const [claimScore, setClaimScore] = useState<ClaimScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState<number | null>(null);
  console.log("singleDatassssssssssssssssss", singleData);
  const [claimDetails, setClaimDetails] = useState<ClaimDetail[]>([]);
  console.log("claimDetails", claimDetails);
  const [modalReappeal, setModalReappeal] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);

  console.log("qqqqqqqqq0", selectedClaim);
  const [sentComment, setSentComment] = useState("");
  const [userComment, setUserComment] = useState("");

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
        console.log("setClaimScore", response.data.message.data);
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
          console.log("setClaimDetails", response);
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
    console.log("claimInfoIDDDD", claimInfo);
    setIsModalOpen(true);
    setSingleData(id);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleSubmitCommnet = async () => {
    if (!selectedClaim) {
      console.error("Error: No claim ID available.");
      return;
    }
    try {
      const response = await axios.post(
        `https://my.tc.popopower.com/api/reappeal-claim/${selectedClaim}`,
        {
          user_comment: userComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSentComment(response.data);
    } catch (error) {
      console.error("Error submitting claim appeal:", error);
    } finally {
      setModalReappeal(false);
      setUserComment("");

      // window.location.reload();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalReappeal(false);
  };

  const openModal = (claim: any) => {
    alert(claim);
    console.log("aaaa", claim);
    setSelectedClaim(claim);
    setModalReappeal(true);
  };

  const closeModal = () => {
    setModalReappeal(false);
    setSelectedClaim(null);
  };

  const ifRejectedClaim = claimScore.some(
    (claim) => claim.status === "rejected"
  );

  return (
    <div className="verification-status">
      {loading ? (
        <Spinner />
      ) : (
        <div className="table-responsive">
          <table className="status-table">
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Status</th>
                {ifRejectedClaim && <th></th>}
                <th>Approver Comment</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              {claimScore.length > 0 &&
                claimScore.map((claim, index) => (
                  <tr key={claim.id}>
                    <td>{index + 1}</td>
                    <td>{claim.status}</td>
                    {ifRejectedClaim && (
                      <td>
                        {claim.status === "rejected" && (
                          <button
                            className="btn btn-danger"
                            style={{
                              width: "80px",
                              height: "30px",
                              fontSize: "12px",
                            }}
                            onClick={() => openModal(claim.id)}
                          >
                            Appeal
                          </button>
                        )}
                      </td>
                    )}
                    <td>{claim.maker_comment ? claim.maker_comment : "-"}</td>

                    <td>
                      <Link
                        to="#"
                        onClick={() => claimInfo(claim.id)}
                        style={{ cursor: "pointer" }}
                      >
                        View More
                      </Link>
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
          <>
            {" "}
            <Spinner />{" "}
          </>
        ) : (
          <>
           {claimDetails.map((elem: any, detailIndex: number) => (
  <div className="modal-wrapper" key={detailIndex}>
    <div className="tournament-details">
      <h3>Tournament Details</h3>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Season:</strong> {elem.season}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Team Name:</strong> {elem.team_name}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Tournament Name:</strong> {elem.tournament_name}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Status:</strong> {elem.status}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Start Date:</strong> {elem.tournament_start_date}</p>
        </div>
        <div className="col-md-6">
          <p><strong>End Date:</strong> {elem.tournament_end_date}</p>
        </div>
      </div>
    </div>

    {/* 🔁 Loop over matches */}
    {claimDetails.map((claim: any, claimIndex: number) => (
  <div key={`claim-${claimIndex}`}>
    {claim.matches.map((match: any, matchIndex: number) => (
      <div key={`match-${matchIndex}`} className="mt-4">
        {/* ✅ Match Heading */}
        <h4
          style={{
            marginTop: "30px",
            marginBottom: "15px",
            fontWeight: "bold",
            color: "#1d7336",
          }}
        >
          {/* Match {matchIndex + 1} */}
        </h4>

        {/* ✅ YouTube Links */}
        {/* <div className="youtube-links">
          <h3>Youtube Link</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>YouTube Link</th>
                <th>Timestamp Ranges</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {match.youtube_links?.length > 0 ? (
                match.youtube_links.map((yt: any, ytIndex: number) =>
                  yt.timestamps.map((ts: any, tsIndex: number) => (
                    <tr key={`yt-${ytIndex}-ts-${tsIndex}`}>
                      <td>{ytIndex + 1}</td>
                      <td>
                        <a href={yt.link} target="_blank" rel="noreferrer">
                          {yt.link}
                        </a>
                      </td>
                      <td>{ts.from} - {ts.to}</td>
                      <td>{ts.remark}</td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={4}>No YouTube links found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div> */}

        

        {/* ✅ Batting Performance */}
        <div className="performance-section">
          <h3>Batting Performance</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Matches</th>
                <th>Innings</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Fours</th>
                <th>Sixes</th>
                <th>Fifty</th>
                <th>Hundred</th>
                <th>Highest</th>
                <th>Strike Rate</th>
                <th>Average</th>
                <th>Not Out</th>
              </tr>
            </thead>
            <tbody>
              {match.batting?.length > 0 ? (
                match.batting.map((bat: any, i: number) => (
                  <tr key={`bat-${i}`}>
                    <td>{bat.bat_matches}</td>
                    <td>{bat.bat_innings}</td>
                    <td>{bat.bat_runs}</td>
                    <td>{bat.bat_balls}</td>
                    <td>{bat.bat_fours}</td>
                    <td>{bat.bat_sixes}</td>
                    <td>{bat.bat_fifty}</td>
                    <td>{bat.bat_hundred}</td>
                    <td>{bat.bat_highest}</td>
                    <td>{bat.bat_strike_rate}</td>
                    <td>{bat.bat_average}</td>
                    <td>{bat.bat_not_out}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={12}>No batting data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Bowling Performance */}
        <div className="performance-section">
          <h3>Bowling Performance</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Matches</th>
                <th>Innings</th>
                <th>Wickets</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Economy Rate</th>
                <th>BBF</th>
                <th>Overs</th>
              </tr>
            </thead>
            <tbody>
              {match.bowling?.length > 0 ? (
                match.bowling.map((bowl: any, i: number) => (
                  <tr key={`bowl-${i}`}>
                    <td>{bowl.bowl_matches}</td>
                    <td>{bowl.bowl_innings}</td>
                    <td>{bowl.bowl_wickets}</td>
                    <td>{bowl.bowl_runs}</td>
                    <td>{bowl.bowl_balls}</td>
                    <td>{bowl.bowl_economy_rate}</td>
                    <td>{bowl.bowl_bbf}</td>
                    <td>{bowl.bowl_maidens}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No bowling data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
))}


  </div>
))}

          </>
        )}
      </Modal>

      <Modal
        open={modalReappeal}
        onOk={handleSubmitCommnet}
        onCancel={handleCancel}
        width={600}
        height={200}
      >
        <div className="performance-section">
          <h3>User Comment</h3>
          <textarea
            className="user-comment col-md-12"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
          ></textarea>
        </div>
      </Modal>
    </div>
  );
};

export default VerificationStatus;
