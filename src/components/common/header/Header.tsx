import Navigation from "../../homepg/Navigation/Navigation";
import Banner from "../banner/Banner";
import "../header/header.scss";

const Header = () => {
  return (
    <>
      <Navigation />
      <header id="headerSection">
        <Banner />
      </header>
    </>
  );
};

export default Header;
