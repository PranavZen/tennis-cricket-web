import "../Navigation/MenuItems.scss";
import { Link } from "react-router-dom";

interface MenuItemsProps {
  menuOpen: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({ menuOpen }) => {
  return (
    <div className="col-md-6 col menu">
      {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
      <div className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'}`} id="navbarNav">
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
                  Domastic Tournament
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/matchStat">
                  Match Stat
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
          {/* <button className="searchWrap">
            <img
              src="images\searchIcon.svg"
              alt="search"
              width={19}
              height={19}
            />
          </button> */}
          <Link to="" className="btn">
            {/* <span>
              <img
                src="../images/register-icon.svg"
                alt="Apple Store"
                width={16}
                height={22}
              />
            </span>{" "} */}
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
