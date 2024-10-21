import { Link } from "react-router-dom";
import "../Navigation/Navigation.scss";
import MenuItems from "./MenuItems";
import LeftBox from "./LeftBox";

const Navigation = () => {
  return (
    <div className="navBarSection">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navWrap">
            <div className="col-md-2 col-12">
              <Link to="/" className="logoWrap">
                <img
                  src="../images/tennis-cricket-logo.svg"
                  alt="Logo"
                  width={200}
                  height={73}
                />
              </Link>
            </div>
            <MenuItems />
            <LeftBox />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
