import React, { useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import SubTabs from "../../common/subTabs/SubTabs";
import BattingPerformance from "./BattingPerformance";
import BowlingPerformance from "./BowlingPerformance";
import YouTubeLinkTab from "../../../components/profilePageSection/claimScoreTabs/youTubeLinkTab/YoutubeLinkTab";
import VerificationStatus from "./VerficationStatus";
import "../../../components/profilePageSection/profilePage.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ClaimScoreTab = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [matches, setMatches] = useState([{ id: 1 }]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const formik = useFormik({
    initialValues: {
      tournament_name: [[""]],
      team_name: "",
      season: "",
      matches: [{ match_name: "", batting: {}, bowling: {}, youtube: {} }],
      youtube_link: [[""]],
    },
    onSubmit: (values, { resetForm }) => {
      toast.success("Claim score submitted successfully!", {
        autoClose: 3000,
        style: {
          fontSize: "15px", // Set your desired font size here
        },
      });
      resetForm();
      setShowTabs(false); // Hide the tab view after submission if needed
    },
  });

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
          {/* <VerificationStatus /> */}
          <h3 className="text-center">No claim data</h3>
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
                  <h2
                    style={{
                      marginBottom: "10px",
                      paddingBottom: "25px", // Add padding
                      color: "#1d7336", // Set the text color to green
                      fontWeight: 600,
                    }}
                    // className="text-center"
                  >
                    Match {index + 1}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "21rem",
                    }}
                  >
                    <div className="col-md-6">
                      <label>Match Name:</label>
                      <Field
                        name={`matches[${index}].match_name`}
                        type="text"
                        placeholder="Enter match name"
                        className="input-box"
                      />
                    </div>

                    <div className="text-end form-container">
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
                    </div>
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
