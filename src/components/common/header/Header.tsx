import Navigation from "../../homepg/Navigation/Navigation";
import Banner from "../banner/Banner";
import "../header/header.scss";

const Header = () => {
  return (
    <header id="headerSection">
      <Navigation />
      <Banner />
    </header>
  );
};

export default Header;
