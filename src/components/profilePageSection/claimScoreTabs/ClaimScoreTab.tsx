import React, { useState, useEffect } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import SubTabs from "../../common/subTabs/SubTabs";
import BattingPerformance from "./BattingPerformance";
import BowlingPerformance from "./BowlingPerformance";
import YouTubeLinkTab from "../../../components/profilePageSection/claimScoreTabs/youTubeLinkTab/YoutubeLinkTab";
import VerificationStatus from "./VerficationStatus";
import "../../../components/profilePageSection/profilePage.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { message, notification } from "antd";
import axios from "axios";

const ClaimScoreTab = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [matches, setMatches] = useState([{ id: 1 }]);
  const [currentStep, setCurrentStep] = useState(0);
  const [claimScore, setClaimScore] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const formik = useFormik({
    initialValues: {
      tournament_name: [""],
      team_name: "",
      season: "",
      tournament_date: "",
      // matches: [{ match_name: "", batting: {}, bowling: {}, youtube: {} }],
      matches: [],
      // youtube_link: [[""]],
      youtube_link: [
        [{ link: "", timestamps: [{ from: "", to: "", remark: "" }] }],
      ],
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://my.tc.popopower.com/api/claim-score",
          values,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("sssssssss", response.data)
        // console.log('successmsg', response.data.message)
        if (response.data.status === "success") {
          notification.success({message:"Claim score submitted successfully!"})
          // {
          //   autoClose: 3000,
          //   style: {
          //     fontSize: "15px",
          //   },
          // });
          resetForm();
          setShowTabs(false);
        } else if (response.data.message.status === "error") {
          notification.error({ message: response.data.message.error });
        } else {
          notification.error({ message: response.data.message.error });
        }
        // resetForm();
        // setShowTabs(false);
      } catch (error) {
        // notification.error({message:"hey"})
      }
    },
  });

  const token = localStorage.getItem("token");
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

  const handleAddMatch = () => {
    const newMatch = { id: matches.length + 1 };
    setMatches([...matches, newMatch]);
    formik.setFieldValue("matches", [
      ...formik.values.matches,
      { match_name: "", batting: {}, bowling: {}, youtube: {} },
    ]);
  };

  const handleRemoveMatch = (index: number) => {
    const newMatches = [...matches];
    newMatches.splice(index, 1);
    setMatches(newMatches);
    formik.setFieldValue("matches", newMatches);
  };

  const tabs = (matchIndex: number) => [
    {
      label: "Batting Performance",
      component: <BattingPerformance onNext={handleNext} />,
    },
    {
      label: "Bowling Performance",
      component: <BowlingPerformance onPrev={handlePrev} onNext={handleNext} />,
    },
    {
      label: "YouTube Link",
      component: (
        <YouTubeLinkTab onPrev={handlePrev} onSubmit={formik.handleSubmit} />
      ),
    },
  ];

  return (
    <>
      {!showTabs ? (
        <div className="claimScore-data">
          <div className="claim-button text-end">
            <button onClick={() => setShowTabs(true)}>+ Add Claim Score</button>
          </div>
          {claimScore.length === 0 ? (
            <h3 className="text-center">No claim data</h3>
          ) : (
            <VerificationStatus />
          )}
        </div>
      ) : (
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-container">
              <div className="row">
                <div className="col-md-6">
                  <label>Tournament Name:</label>
                  <Field
                    name="tournament_name[0]"
                    type="text"
                    className="input-box"
                    placeholder="Enter tournament name"
                  />
                </div>
                <div className="col-md-6">
                  <label>Tournament Date:</label>
                  <Field
                    name="tournament_date"
                    type="date"
                    className="input-box"
                  />
                </div>
                <div className="col-md-6">
                  <label>Team Name:</label>
                  <Field
                    name="team_name"
                    type="text"
                    className="input-box"
                    placeholder="Enter team name"
                  />
                </div>
                <div className="col-md-6">
                  <label>Season:</label>
                  <Field
                    name="season"
                    type="text"
                    className="input-box"
                    placeholder="Enter season"
                  />
                </div>
              </div>
            </div>

            {matches.map((match, index) => (
              <div key={match.id} className="match-section">
                {/* <div className="form-container">
                  <h2>Enter Match Details</h2>
                  <h2
                    style={{
                      marginBottom: "10px",
                      paddingBottom: "25px",
                      color: "#1d7336",
                      fontWeight: 600,
                    }}
                  >
                    Match {index + 1}
                  </h2>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Match</label>
                      <Field
                        name={`matches[${index}].match_name`}
                        type="text"
                        placeholder="Enter match"
                        className="input-box"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Scoring Platform</label>
                      <Field
                        name={`matches[${index}].match_name`}
                        type="text"
                        placeholder="Enter Scoring Platform"
                        className="input-box"
                      />
                    </div>
                  </div> */}
                  {/* <div className="text-end form-container">
                      {index === 0 && ( // Show "Add Another Match" only for the first match section
                        <button type="button" onClick={handleAddMatch}>
                          + Add Another Match
                        </button>
                      )}
                      {index > 0 && ( // Show "Remove Match" for all subsequent matches
                        <button
                          type="button"
                          onClick={() => handleRemoveMatch(index)}
                          style={{ backgroundColor: "red", color: "white" }}
                        >
                          - Remove Match
                        </button>
                      )}
                    </div> */}
                {/* </div> */}

                <SubTabs
                  tabs={tabs(index)}
                  activeTabIndex={currentStep}
                  onTabChange={(step) => setCurrentStep(step)}
                />
              </div>
            ))}
          </form>
        </FormikProvider>
      )}
    </>
  );
};

export default ClaimScoreTab;
