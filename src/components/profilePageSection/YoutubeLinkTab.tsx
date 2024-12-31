import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TournamentInput from "./TournamentInput";
import Timestamp from "./TimeStamp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface YoutubeLinkTabProps {
  formData: any;
  setFormData: (data: any) => void;
  prev: () => void;
  onSubmit: () => void;
}

const YoutubeLinkTab: React.FC<YoutubeLinkTabProps> = ({
  formData,
  setFormData,
  prev,
  onSubmit,
}) => {
  const [forms, setForms] = useState<any[]>([
    {
      tournament: "",
      teamName: "",
      season: "",
      matchVideoLinks: [""],
      timestamps: [
        [{ timestampFrom: "", timestampTo: "", playerActivity: "" }],
      ],
    },
  ]);

  const validationSchema = Yup.object({
    tournament: Yup.string().required("Tournament is required"),
    teamName: Yup.string().required("Team name is required"),
    season: Yup.string().required("Season is required"),
    matchVideoLinks: Yup.array()
      .of(
        Yup.string().url("Enter a valid URL").required("Video link is required")
      )
      .min(1, "At least one video link is required"),
    timestamps: Yup.array().of(
      Yup.array()
        .of(
          Yup.object({
            timestampFrom: Yup.string().required("Timestamp From is required"),
            timestampTo: Yup.string().required("Timestamp To is required"),
            playerActivity: Yup.string().required(
              "Player Activity is required"
            ),
          })
        )
        .min(1, "At least one timestamp with activity is required")
    ),
  });

  const addTournament = () => {
    setForms([
      ...forms,
      {
        tournament: "",
        teamName: "",
        season: "",
        matchVideoLinks: [""],
        timestamps: [
          [{ timestampFrom: "", timestampTo: "", playerActivity: "" }],
        ],
      },
    ]);
  };

  const removeTournament = (index: number) => {
    if (forms.length > 1) {
      setForms(forms.filter((_, i) => i !== index));
    }
  };

  const handleClaimScore = (values: any) => {
    toast.success("Claim score submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      onSubmit();
    }, 3000);
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <div className="add-btn text-end">
        <button type="button" onClick={addTournament}>
          + Add Another Tournament
        </button>
      </div>

      {forms.map((initialValues, index) => (
        <div key={index} className="tournament-form">
          <div>
            <h1>{`Tournament ${index + 1}`}</h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleClaimScore(values)}
          >
            {({ values, setFieldValue }) => (
              <Form>
                {index === forms.length - 1 && forms.length > 1 && (
                  <div className="remove-btn text-end">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        removeTournament(index);
                      }}
                    >
                      - Remove Tournament
                    </button>
                  </div>
                )}
                <TournamentInput values={values} />
                <Timestamp values={values} setFieldValue={setFieldValue} />

                {index === forms.length - 1 && (
                  <div className="row">
                    <div className="col-12 btn-style">
                      <button type="button" onClick={prev}>
                        Previous
                      </button>
                      {index === forms.length - 1 && (
                        <button type="submit">Claim Score</button>
                      )}
                    </div>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      ))}
    </div>
  );
};

export default YoutubeLinkTab;
