import React from "react";
import "./RegButton.scss";
import { Link } from "react-router-dom";

interface RegButtonProps {
  text: string; // Prop to accept the button text
  icon?: JSX.Element; // Prop to accept the image source (optional)
  link?: any; // Prop to accept the image source (optional)
  style?: React.CSSProperties;
}

const RegButton: React.FC<RegButtonProps> = ({ text, icon, link, style }) => {
  return (
    <Link
      to={link}
      className="regButton"
      style={{ position: "relative", cursor: "pointer", ...style }}
    >
      
      <span>{text}</span>
      {icon && <div className="button-icon">{icon}</div>}
    </Link>
  );
};

export default RegButton;
