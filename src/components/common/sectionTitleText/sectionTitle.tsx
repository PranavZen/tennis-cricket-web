import React from "react";

interface SectionTitleProps {
  titleText: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ titleText }) => {
  return <h3 className="sectionTitle">{titleText}</h3>;
};

export default SectionTitle;
