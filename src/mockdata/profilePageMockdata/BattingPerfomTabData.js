import * as Yup from "yup";

export const fields = [
  {
    name: "bat_runs",
    label: "Runs Scored",
    type: "number",
    placeholder: "Enter runs scored",
    validation: Yup.number()
      .required("Runs scored is required")
      .min(0, "Runs scored must be a non-negative number"),
  },
  {
     name: "bat_balls",
    label: "Balls Faced",
    type: "number",
    placeholder: "Enter balls faced",
    validation: Yup.number()
      .required("Balls faced is required")
      .min(1, "Balls faced must be at least 1"),
  },
  {
    name: "bat_fours",
    label: "Fours",
    type: "number",
    placeholder: "Enter number of fours",
    validation: Yup.number()
      .required("Number of fours is required")
      .min(0, "Fours must be a non-negative number"),
  },
  {
    name: "bat_sixes",
    label: "Sixes",
    type: "number",
    placeholder: "Enter number of sixes",
    validation: Yup.number()
      .required("Number of sixes is required")
      .min(0, "Sixes must be a non-negative number"),
  },
];