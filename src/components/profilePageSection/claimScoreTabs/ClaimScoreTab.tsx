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
              // "Authorization": `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDY2MjljMWQ5ODgwMDdmZTU2NWYxZGQ5MDc4YWRlYzA4M2M0NWNkNDVkZWQ5ZjI0ZmEyYTA4NzczYTEzZGQzOGI2NmEwYWY5NTc4ZmE4NDgiLCJpYXQiOjE3NDEzMzU5ODcuODcwNTY5LCJuYmYiOjE3NDEzMzU5ODcuODcwNTcsImV4cCI6MTc3Mjg3MTk4Ny44NjczMjksInN1YiI6IjExIiwic2NvcGVzIjpbXX0.GY4cqfVJhpuZ1NyjP_wtm_X9XbzLKOnQ760Nmc8np8Q1l9bloB87cbQTFQ67SALyijRkjf7G0172BykZZbhMbQJi8DW_Y321i6uXSxLYv49zt-dfLtbkDMXNQVjumQ7bpvUI1HNZTeJLdFB5BnShR6Y_a7c2QE7MI2JjPcEsEI5iCD1b0jSwYpN4ukB_fUUoppkraPDo4tvOcW22GM9fkUlipKPzJJo7iXow_NQ5Bwcww0BkEwHiwpuE9ug3ASxCjc6tNDAb19xDmkj3BupCoMHSzDgnQHY_npO0SF5IfvL-Zl8Mzm7c4ZRV7iuEAcVGC9dTzUxOPT_e5lwVGd6y_g4DUTAvLkxQ09t-q1qNNUXkhi03lWEtCOP2rCDyfftiuJsqoNfjOLEHd6tJQdgZsNs-Mz7L_SmrUU5NCpFeElX2c98prlH-D7WZCMNHOenpvpmmIWn8ltf_aYzf6K2gtj91-pqHgw-2QjC4FPYE8kMgcEAbayacC5w-dSo3zmgiCdJ9HGXXyfx881JWYswH8TKd3svZghcFgjbKQ61Wxda6faKV0doVmcW41e8qVNlnButWnV9OADyjUeneDogHDL8XYshpl3UmtxCnCe89VJcY77uUVyp_UdmJDYt469Q7eUegF2c5sQKaV8O3vrDitfCtmmhwn9ZnxZzDKXdnIDk'}`,
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("claimResponse", response);
        toast.success("Claim score submitted successfully!", {
          autoClose: 3000,
          style: {
            fontSize: "15px", // Set your desired font size here
          },
        });
        console.log("values", values);
        resetForm();
        setShowTabs(false); // Hide the tab view after submission if needed
      } catch (error) {
        toast.error("Failed to submit claim score. Please try again.", {
          autoClose: 3000,
        });
        console.error("Error:", error);
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
        console.log("rrrrr", response);
        setClaimScore(response.data.message.data);
        // console.log("1212111111", response);
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
      component: <BattingPerformance onNext={handleNext} />, // Pass matchIndex if needed
    },
    {
      label: "Bowling Performance",
      component: <BowlingPerformance onPrev={handlePrev} onNext={handleNext} />, // Pass matchIndex if needed
    },
    {
      label: "YouTube Link",
      component: (
        <YouTubeLinkTab
          onPrev={handlePrev} // Ensure to pass onPrev and onSubmit
          onSubmit={formik.handleSubmit} // Pass the handleSubmit function here
        />
      ), // Pass matchIndex if needed
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
                <div className="form-container">
                  {/* <h2
                    style={{
                      marginBottom: "10px",
                      paddingBottom: "25px", // Add padding
                      color: "#1d7336", // Set the text color to green
                      fontWeight: 600,
                    }}
                    // className="text-center"
                  >
                    Match {index + 1}
                  </h2> */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "21rem",
                    }}
                  >
                    {/* <div className="col-md-6">
                      <label>Match Name:</label>
                      <Field
                        name={`matches[${index}].match_name`}
                        type="text"
                        placeholder="Enter match name"
                        className="input-box"
                      />
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
                  </div>
                </div>
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
