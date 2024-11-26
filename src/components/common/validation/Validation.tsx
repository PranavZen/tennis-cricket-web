import * as Yup from 'yup';

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

      const isEmail = Yup.string().email().isValidSync(value); // Checks for valid email.
      const isMobile = Yup.string()
        .matches(/^[6-9]\d{9}$/) // Matches typical 10-digit mobile numbers in India starting with 6-9.
        .isValidSync(value); // Checks for valid mobile number.

      return isEmail || isMobile; // Passes if either is valid.
    }),
  
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),

    // otp: Yup.string()
    // .matches(/^\d{6}$/, "OTP must be a 6-digit number") // Ensures OTP is 6 digits
    // .when("showOtpField", {
    //   is: true, // Validates only when OTP field is visible
    //   then: Yup.string().required("OTP is required"),
    //   otherwise: Yup.string(), // Allows it to be empty when not required
    // }),
});

export const registrationValidationSchema = Yup.object({
    firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name should have at least 2 characters")
    .max(10, "First name should not be more than 10 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name should have at least 2 characters")
    .max(10, "Last name should not be more than 10 characters"),

  dob: Yup.date()
    .nullable()
    .required("DOB is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Phone number is not valid. It must be 10 digits"
    ),

  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  address: Yup.string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters long")
    .max(200, "Address cannot exceed 200 characters")
    .matches(
      /^[a-zA-Z0-9\s,'-]*$/,
      "Address can only contain letters, numbers, spaces, commas, apostrophes, and dashes"
    ),

  teamName: Yup.string().required("Team name is required"),

  playingRole: Yup.string().required("Playing Role is required"),

  battingStyle: Yup.string().required("Batting Style is required"),

  bowlingStyle: Yup.string().required("Bawling Style is required"),

  wicketKeeping: Yup.string().required("Please select a WicketKeeping"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),

  bloodGroup: Yup.string().required("Blood group is required"),

  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zone: Yup.string().required("Zone is required"),

  profilePhoto: Yup.mixed()
  .nullable()
  .required("Profile photo is required")
  .test(
    "fileSize",
    "File too large",
    (value) => value && (value as File).size <= 1024 * 1024 // 1MB size limit
  )
  .test(
    "fileType",
    "Unsupported file type",
    (value) =>
      value && ["image/jpeg", "image/png"].includes((value as File).type)
  ),

  idCard: Yup.mixed()
    .nullable()
    .required("IdCard is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && (value as File).size <= 1024 * 1024 // 1MB size limit
    )
    .test(
      "fileType",
      "Unsupported file type",
      (value) =>
        value && ["image/jpeg", "image/png"].includes((value as File).type)
    ),

  // socialLinks:
  // (Yup.string().url("Invalid URL format")),
  // Yup.array()
  // .required("SocialLink is required")
  // .of(Yup.string().url("Invalid URL format")),

  // profilePhoto: Yup.mixed().required("Profile Photo is required"),
  // idCard: Yup.mixed().required("ID Card is required"),
});
