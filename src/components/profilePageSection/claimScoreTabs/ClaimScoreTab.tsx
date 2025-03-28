import React, { useState, useEffect } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import SubTabs from "../../common/subTabs/SubTabs";
import BattingPerformance from "./BattingPerformance";
import BowlingPerformance from "./BowlingPerformance";
import YouTubeLinkTab from "../../../components/profilePageSection/claimScoreTabs/youTubeLinkTab/YoutubeLinkTab";
import VerificationStatus from "./VerficationStatus";
import "../../../components/profilePageSection/profilePage.scss";
import "react-toastify/dist/ReactToastify.css";
import { notification } from "antd";
import axios from "axios";

interface Timestamp {
  from: string;
  to: string;
  remark: string;
}

interface YouTubeLink {
  link: string;
  timestamps: Timestamp[];
}

interface Batting {
  bat_matches: string;
  bat_innings: string;
  bat_runs: string;
  bat_balls: string;
  bat_fours: string;
  bat_sixes: string;
  bat_fifty: string;
  bat_hundred: string;
  bat_highest: string;
  bat_strike_rate: string;
  bat_average: string;
  bat_not_out: string;
}

interface Bowling {
  bowl_matches: string;
  bowl_innings: string;
  bowl_wickets: string;
  bowl_runs: string;
  bowl_balls: string;
  bowl_bbf: string;
  bowl_maidens: string;
  bowl_economy_rate: string;
}

interface Match {
  matches: "";
  scoring_platform: string;
  batting: Batting;
  bowling: Bowling;
  youtube_link: YouTubeLink[];
}

const ClaimScoreTab = () => {
  const [showTabs, setShowTabs] = useState(false);
  // const [matches, setMatches] = useState<Match[]>([
  //   {
  //     matches: "",
  //     scoring_platform: "",
  //     batting: {
  //       bat_matches: 0,
  //       bat_innings: 0,
  //       bat_runs: 0,
  //       bat_balls: 0,
  //       bat_fours: 0,
  //       bat_sixes: 0,
  //       bat_fifty: 0,
  //       bat_hundred: 0,
  //       bat_highest: 0,
  //       bat_strike_rate: "0.00",
  //       bat_average: 0,
  //       bat_not_out: 0,
  //     },
  //     bowling: {
  //       bowl_matches: 0,
  //       bowl_innings: 0,
  //       bowl_wickets: 0,
  //       bowl_runs: 0,
  //       bowl_balls: 0,
  //       bowl_bbf: "",
  //       bowl_maidens: 0,
  //       bowl_economy_rate: 0,
  //     },
  //     youtube_link: [
  //       {
  //         link: "",
  //         timestamps: [
  //           {
  //             from: "",
  //             to: "",
  //             remark: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]);
  // const [currentStep, setCurrentStep] = useState(0);
  const [tabStates, setTabStates] = useState<{ [matchIndex: number]: number }>({});
  const [claimScore, setClaimScore] = useState([]);
  const [loading, setLoading] = useState(true);

  // const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  // const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const formik = useFormik({
    initialValues: {
      tournament_name: "",
      team_name: "",
      season: "",
      tournament_start_date: "",
      tournament_end_date: "",
      matches: [
        {
          matches: "",
          scoring_platform: "",
          batting: {
            bat_matches: "",
            bat_innings: "",
            bat_runs: "",
            bat_balls: "",
            bat_fours: "",
            bat_sixes: "",
            bat_fifty: "",
            bat_hundred: "",
            bat_highest: "",
            bat_strike_rate: "",
            bat_average: "",
            bat_not_out: "",
          },
          bowling: {
            bowl_matches: "",
            bowl_innings: "",
            bowl_wickets: "",
            bowl_runs: "",
            bowl_balls: "",
            bowl_bbf: "",
            bowl_maidens: "",
            bowl_economy_rate: "",
          },
          youtube_link: [
            { link: "", timestamps: [{ from: "", to: "", remark: "" }] },
          ],
        },
      ],
    },
    onSubmit: async (values, { resetForm }) => {
      const isFormEmpty =
    !values.tournament_name ||
    !values.team_name ||
    !values.season ||
    !values.tournament_start_date ||
    !values.tournament_end_date ||
    values.matches.some(
      (match) =>
        !match.matches ||
        !match.scoring_platform ||
        Object.values(match.batting).some((val) => val === "" || val === null) ||
        Object.values(match.bowling).some((val) => val === "" || val === null) ||
        match.youtube_link.some((link) => !link.link || link.timestamps.some(ts => !ts.from || !ts.to || !ts.remark))
    );

  if (isFormEmpty) {
    notification.error({
      message: "Please fill all the details to claim your score",
    });
    return; // 🚫 Stop form submission
  }

      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://my.tc.popopower.com/api/claim-score",
          values,
          // formattedValues,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.status === "success") {
          notification.success({
            message: "Claim score submitted successfully!",
          });
          resetForm();
          setShowTabs(false);
        } else if (response.data.message.status === "error") {
          notification.error({ message: response.data.message.error });
        } else {
          notification.error({ message: response.data.message.error });
        }
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
    const newMatch: Match = {
      matches: "",
      scoring_platform: "",
      batting: {
        bat_matches: "",
        bat_innings: "",
        bat_runs: "",
        bat_balls: "",
        bat_fours: "",
        bat_sixes: "",
        bat_fifty: "",
        bat_hundred: "",
        bat_highest: "",
        bat_strike_rate: "",
        bat_average: "",
        bat_not_out: "",
      },
      bowling: {
        bowl_matches: "",
        bowl_innings: "",
        bowl_wickets: "",
        bowl_runs: "",
        bowl_balls: "",
        bowl_bbf: "",
        bowl_maidens: "",
        bowl_economy_rate: "",
      },
      youtube_link: [
        {
          link: "",
          timestamps: [{ from: "", to: "", remark: "" }],
        },
      ],
    };
  
    const newMatchClone = JSON.parse(JSON.stringify(newMatch));
    const updatedMatches = [...formik.values.matches, newMatchClone];
    formik.setFieldValue("matches", updatedMatches);

    setTabStates((prev) => ({
      ...prev,
      [updatedMatches.length - 1]: 0, // new match index, tab 0 (Batting)
    }));
  };
  

  const handleRemoveMatch = (index: number) => {
    const updatedMatches = [...formik.values.matches];
    updatedMatches.splice(index, 1);
    formik.setFieldValue("matches", updatedMatches);
  };
  

  // const tabs = (matchIndex: number) => [
  //   {
  //     label: "Batting Performance",
  //     component: (
  //       <BattingPerformance matchIndex={matchIndex} onNext={handleNext} />
  //     ),
  //   },
  //   {
  //     label: "Bowling Performance",
  //     component: (
  //       <BowlingPerformance
  //         matchIndex={matchIndex}
  //         onPrev={handlePrev}
  //         onNext={handleNext}
  //       />
  //     ),
  //   },
  //   {
  //     label: "YouTube Link",
  //     component: (
  //       <YouTubeLinkTab
  //         matchIndex={matchIndex}
  //         // tournamentIndex={0}
  //         onPrev={handlePrev}
  //         onSubmit={formik.handleSubmit}
  //       />
  //     ),
  //   },
  // ];

  const tabs = (matchIndex: number) => [
    {
      label: "Batting Performance",
      component: (
        <BattingPerformance
          matchIndex={matchIndex}
          onNext={() => setTabStates((prev) => ({ ...prev, [matchIndex]: 1 }))}
        />
      ),
    },
    {
      label: "Bowling Performance",
      component: (
        <BowlingPerformance
          matchIndex={matchIndex}
          onPrev={() => setTabStates((prev) => ({ ...prev, [matchIndex]: 0 }))}
          onNext={() => setTabStates((prev) => ({ ...prev, [matchIndex]: 2 }))}
        />
      ),
    },
    {
      label: "YouTube Link",
      component: (
        <YouTubeLinkTab
          matchIndex={matchIndex}
          onPrev={() => setTabStates((prev) => ({ ...prev, [matchIndex]: 1 }))}
          onSubmit={formik.handleSubmit}
        />
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
                    name="tournament_name"
                    type="text"
                    className="input-box"
                    placeholder="Enter tournament name"
                  />
                </div>
                <div className="col-md-6">
                  <label>Tournament Start Date:</label>
                  <Field
                    name="tournament_start_date"
                    type="date"
                    className="input-box"
                  />
                </div>
                <div className="col-md-6">
                  <label>Tournament End Date:</label>
                  <Field
                    name="tournament_end_date"
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

            <div className="form-container">
              <h2 style={{ color: "#1d7336", fontWeight: 600 }}>
                Enter Match Details
              </h2>
            </div>
            {
            // Array.isArray(formik.values.matches) &&
            formik.values.matches.map((match, index) => (
              <div key={index} className="match-section">
                <div className="form-container">
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
                        name={`matches[${index}].matches`}
                        type="number"
                        placeholder="Enter match"
                        className="input-box"
                        // value={match.matches}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Scoring Platform</label>
                      <Field
                        name={`matches[${index}].scoring_platform`}
                        type="text"
                        placeholder="Enter Scoring Platform"
                        className="input-box"
                        // value={match.scoring_platform}
                      />
                    </div>
                  </div>
                  <div className="text-end">
                    {index === 0 && (
                      <button
                        type="button"
                        onClick={handleAddMatch}
                        style={{ color: "#1d7336", fontSize: "1.5rem" }}
                      >
                        + Add Another Match
                      </button>
                    )}
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMatch(index)}
                        style={{ color: "#1d7336", fontSize: "1.5rem" }}
                      >
                        - Remove Match
                      </button>
                    )}
                  </div>
                </div>

                <SubTabs
                  tabs={tabs(index)}
                  // activeTabIndex={currentStep}
                  // onTabChange={(step) => setCurrentStep(step)}
                  activeTabIndex={tabStates[index] || 0} // default to 0
                  onTabChange={(step) => setTabStates((prev) => ({ ...prev, [index]: step }))}
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
