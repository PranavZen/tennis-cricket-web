import React, { useEffect, useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import StepNavigator from "./StepNavigator";
import BattingPerformance from "./BattingPerformance";
import BowlingPerformance from "./BowlingPerformance";
import YouTubeLinkTab from "./youTubeLinkTab/YoutubeLinkTab"; // Ensure correct import path
import "../../../components/profilePageSection/profilePage.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubTabs from "../../common/subTabs/SubTabs";
import VerificationStatus from "./VerficationStatus";

interface ClaimScore {
  id: number;
  score: number;
  date: string;
}

interface FormValues {
  bat_runs: string;
  bat_balls: string;
  bat_fours: string;
  bat_sixes: string;
  bat_strike_rate: string;
  bat_dismissal: string;
  bowl_overs: string;
  bowl_wicket: string;
  bowl_runs: string;
  bowl_economy_rate: string;
  bowl_bbf: string;
  youtube_link: string[][];
  time_from: string[][][];
  time_to: string[][][];
  remark: string[][][];
  tournament_name: string[];
  team_name: string[];
  season: string[];
}

// const validationSchema = Yup.object({
//   // Batting Performance validations
//   bat_runs: Yup.number().min(0, "Runs scored cannot be negative").required("Runs scored is required"),
//   bat_balls: Yup.number().min(0, "Balls faced cannot be negative").required("Balls faced is required"),
//   bat_fours: Yup.number().min(0, "Fours cannot be negative").required("Fours is required"),
//   bat_sixes: Yup.number().min(0, "Sixes cannot be negative").required("Sixes is required"),
//   bat_dismissal: Yup.string().oneOf(['notOut', 'bowled', 'lbw', 'caught'], "Invalid dismissal type").required("Dismissal type is required"),

//   // Bowling Performance validations
//   bowl_overs: Yup.number().min(0, "Overs cannot be negative").required("Overs is required"),
//   bowl_wicket: Yup.number().min(0, "Wickets cannot be negative").required("Wickets is required"),
//   bowl_runs: Yup.number().min(0, "Runs conceded cannot be negative").required("Runs conceded is required"),
//   bowl_economy_rate: Yup.number().min(0, "Economy rate cannot be negative").required("Economy rate is required"),
//   bowl_bbf: Yup.string().required("Best bowling figures is required"),

//   // YouTube Link validations
//   youtube_link: Yup.array().of(
//     Yup.array().of(
//       Yup.string().url("Invalid URL").required("YouTube link is required")
//     )
//   ),
//   time_from: Yup.array().of(
//     Yup.array().of(
//       Yup.string().required("Time from is required")
//     )
//   ),
//   time_to: Yup.array().of(
//     Yup.array().of(
//       Yup.string().required("Time to is required")
//     )
//   ),
//   remark: Yup.array().of(
//     Yup.array().of(
//       Yup.string().required("Remark is required")
//     )
//   ),
// });

const ClaimScoreTab = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const token = localStorage.getItem("token");
  const [claimScore, setClaimScore] = useState<ClaimScore[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      bat_runs: "",
      bat_balls: "",
      bat_fours: "",
      bat_sixes: "",
      bat_strike_rate: "",
      bat_dismissal: "",
      bowl_overs: "",
      bowl_wicket: "",
      bowl_runs: "",
      bowl_economy_rate: "",
      bowl_bbf: "",
      youtube_link: [[""]],
      time_from: [[[""]]],
      time_to: [[[""]]],
      remark: [[[""]]],
      tournament_name: [""],
      team_name: [""],
      season: [""],
    },
    // validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        setError(null);
        setSuccessMessage(null);
        setIsModalOpen(true)

        const formData = new FormData();

        Object.keys(values).forEach((key) => {
          const value = values[key as keyof FormValues];

          if (Array.isArray(value)) {
            value.forEach((subValue, index) => {
              if (Array.isArray(subValue)) {
                subValue.forEach((nestedValue, nestedIndex) => {
                  formData.append(
                    `${key}[${index}][${nestedIndex}]`,
                    String(nestedValue)
                  );
                });
              } else {
                formData.append(`${key}[${index}]`, String(subValue));
              }
            });
          } else {
            formData.append(key, String(value));
          }
        });

        const res = await axios.post(
          "https://my.tc.popopower.com/api/claim-score",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("ressssssss", res);

        // setSuccessMessage("Score claimed successfully!");
        toast.success("Claim score added successfully!");
        resetForm();
        setShowTabs(false);
        window.location.reload();
      } catch (error) {
        setError("An error occurred while submitting the form.");
        toast.error("An error occurred while submitting the form.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const tabs = [
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
      component: <YouTubeLinkTab onPrev={handlePrev} onSubmit={() => {}} />,
    },
  ];

  console.log("claimScorwwwwwwwwwwe", claimScore);
  // ******************************************************88

  console.log("token", token);
  useEffect(() => {
    const fetchClaimScore = async () => {
      try {
        const response = await axios.get(
          `https://my.tc.popopower.com/api/get-claim-score`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setClaimScore(response.data.message.data);
        console.log("responseeeeee", response.data.message.data);
      } catch (error) {
        console.error("Error fetching claim score:", error);
      }
    };

    fetchClaimScore();
  }, [token]);

  const handleAddMatches = () => {
    const newYouTubeLinks = formik.values.youtube_link.concat([[""]]);
    const newTimeFrom = formik.values.time_from.concat([[[""]]]);
    const newTimeTo = formik.values.time_to.concat([[[""]]]);
    const newRemark = formik.values.remark.concat([[[""]]]);

    formik.setFieldValue("youtube_link", newYouTubeLinks);
    formik.setFieldValue("time_from", newTimeFrom);
    formik.setFieldValue("time_to", newTimeTo);
    formik.setFieldValue("remark", newRemark);
    // formik.setFieldValue("tournament_name", formik.values.tournament_name.concat(""));
    // formik.setFieldValue("team_name", formik.values.team_name.concat(""));
    // formik.setFieldValue("season", formik.values.season.concat("1"));
  };
  
  return (
    <>
      <ToastContainer />
      {!showTabs ? (
        <div className="claimScore-data">
          <div className="claim-button text-end">
            <button onClick={() => setShowTabs(true)}>+ Add Claim Score</button>
          </div>
          <div className="claim-list">
            {successMessage ? (
              <div className="success-message">{successMessage}</div>
            ) : (
              <>
                <VerificationStatus />
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-container">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="tour_name">Tournament Name:</label>
                    <Field
                      id={`tour_name`}
                      name={`tournament_name`}
                      type="text"
                      placeholder="Enter tournament name"
                      className="input-box"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formik.setFieldValue(`tournament_name`, e.target.value)
                      }
                      value={formik.values.tournament_name}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="team_name">Team Nam:</label>
                    <Field
                      id={"team_name"}
                      name={`team_name`}
                      type="text"
                      placeholder="Enter team name"
                      className="input-box"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formik.setFieldValue(`team_name`, e.target.value)
                      }
                      value={formik.values.team_name}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="season_name">Season Name:</label>
                    <Field
                      id={`season_name`}
                      name={`season`}
                      type="text"
                      placeholder="Enter season name"
                      className="input-box"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        formik.setFieldValue(`season`, e.target.value)
                      }
                      value={formik.values.season}
                    />
                  </div>
                  <h3>Match</h3>
                  <div className="add-btn text-end">
                    <button type="button" onClick={handleAddMatches}>
                      + Add Another Match
                    </button>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="match_name">Match Name:</label>
                    <Field
                      id={`match_name`}
                      name={`match_name`}
                      type="text"
                      placeholder="Enter match name"
                      className="input-box"
                      // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      //   formik.setFieldValue(`match_name`, e.target.value)
                      // }
                      // value={formik.values.match_name}
                    />
                  </div>
                </div>
              </div>
              <SubTabs
                tabs={tabs}
                activeTabIndex={currentStep}
                onTabChange={(index) => {
                  setCurrentStep(index);
                  formik.setTouched({});
                }}
              />
            </form>
          </FormikProvider>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default ClaimScoreTab;

