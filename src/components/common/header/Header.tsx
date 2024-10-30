import Navigation from "../../homepg/Navigation/Navigation";
import Banner from "../banner/Banner";
import "../header/header.scss";

interface HeaderProps {
  subtitle?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ subtitle = "TennisCricket.in", className }) => {
  const innerPageStyle: React.CSSProperties = {
    fontSize: '3rem'
  };
  return (
    <>
      <Navigation />
      <header id="headerSection">
        <Banner
        subtitle={subtitle}
        style={className === "innerpageHeading" ? innerPageStyle : undefined}
        />
      </header>
    </>
  );
};

export default Header;
