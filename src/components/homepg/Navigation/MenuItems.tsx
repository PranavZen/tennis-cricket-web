import "../Navigation/MenuItems.scss";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="col-md-6 col">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Live Score
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/allMatches">
                  All Matches
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/tournamentDashboard">
                  Tournament Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/domesticTournamnet">
                  Domastic Tournamnet
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tournament
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Network
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Media
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="mobBox">
          <button className="searchWrap">
            <img
              src="../images/search-icon.svg"
              alt="search"
              width={19}
              height={19}
            />
          </button>
          <Link to="" className="iconWrap">
            <img
              src="../images/google-play.svg"
              alt="Google Play Store"
              width={34}
              height={34}
            />
          </Link>
          <Link to="" className="iconWrap">
            <img
              src="../images/apple-play.svg"
              alt="Apple Store"
              width={34}
              height={34}
            />
          </Link>
          <Link to="" className="btn">
            <span>
              <img
                src="../images/register-icon.svg"
                alt="Apple Store"
                width={16}
                height={22}
              />
            </span>{" "}
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
