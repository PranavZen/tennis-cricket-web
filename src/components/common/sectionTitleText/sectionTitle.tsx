import React from "react";
import '../sectionTitleText/sectionTitle.css'

interface SectionTitleProps {
  titleText: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ titleText }) => {
  return <section className="titleText">
    {/* <h3 className="sectionTitle">{titleText}</h3>; */}
    <div className="section-title">Cricketer's Feedback</div>
      <div className="section-subtitle">
        Every cricket story holds a special place in our hearts and that’s why
        your cricket matters
      </div>
</section>
};

export default SectionTitle;
