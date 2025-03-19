import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  // email: Yup.string()
  // .email("Invalid email format")
  // .matches(
  //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  //   "Invalid email format"
  // )
  // .required("Please enter a valid email address or mobile number"),
  email: Yup.string()
    .required("Please enter a valid email address or mobile number")
    .test(
      "is-valid-email-or-mobile",
      "Please enter a valid email address or mobile number",
      (value) => {
        if (!value) return false;

        const isEmail = Yup.string().email().isValidSync(value);
        const isMobile = Yup.string()
          .matches(/^[6-9]\d{9}$/)
          .isValidSync(value);

        return isEmail || isMobile;
      }
    ),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});


export const registrationValidationSchema = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "First name should have at least 2 characters")
    .max(10, "First name should not be more than 10 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Last name should have at least 2 characters"),

  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  mobile_number: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  date_of_birth: Yup.date()
    .required("DOB is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  address: Yup.string().required("Address is required"),

  team_name: Yup.string().required("Team name is required"),

  playing_role:Yup.string().required("Playing Role is required"),

  
  // bowling_style: Yup.string().required("Bawling Style is required"),

  // batting_style: Yup.string().required("Batting Style is required"),

  // wicket_keeping: Yup.string().required("Please select a WicketKeeping"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),

  blood_group: Yup.string().required("Blood group is required"),

  state_name: Yup.string().required("State is required"),
  city_name: Yup.string().required("City is required"),
  zone_name: Yup.string().required("Zone is required"),

  doc_profile_photo: Yup.mixed()
    .nullable()
    .required("Profile photo is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && (value as File).size <= 1024 * 1024 
    )
    .test(
      "fileType",
      "Unsupported file type",
      (value) =>
        value && ["image/jpeg", "image/png"].includes((value as File).type)
    ),

  doc_id_card: Yup.mixed()
    .nullable()
    .required("IdCard is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && (value as File).size <= 1024 * 1024   
    )
    .test(
      "fileType",
      "Unsupported file type",
      (value) =>
        value && ["image/jpeg", "image/png"].includes((value as File).type)
    ),
    social_link: Yup.string()
    .url("Invalid URL format")
    .required("SocialLink is required"),

  // profilePhoto: Yup.mixed().required("Profile Photo is required"),
  // idCard: Yup.mixed().required("ID Card is required"),
});