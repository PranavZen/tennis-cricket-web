import React from "react";
import { Field, ErrorMessage } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string; // Optional type, defaults to text
  as?: "textarea" | "select"; // Optional, for textarea or select
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  as,
}) => {
  return (
    <div className="mb-5 col-md-6">
      <label>{label}</label>
      <Field
        as={as}
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
      />
      <div className="errorMsg">
        <ErrorMessage name={name} component="div" />
      </div>
    </div>
  );
};

export default InputField;