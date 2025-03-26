import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/leftBox.scss";

interface LoginButtonProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const LeftBox: React.FC<LoginButtonProps> = ({ isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileImg = localStorage.getItem("profile-image");

  return (
    <div className="col-md-3 col deskBox">
      <div className="leftBox">
        {/* <button className="searchWrap">
          <img
            src="\images\search-icon.png"
            alt="search"
            // width={19}
            // height={19}
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </button> */}
        {isLoggedIn ? (
          <>
            {/* <Link to="" className="register-btn" onClick={handleLogout}>
              <span>
                <i className="fas fa-power-off"></i>
              </span>{" "}
              Logout
            </Link> */}
            {/* <div className="home-icon">
              <Link to="/">
                <i className="fa-solid fa-house"></i>
              </Link>
            </div> */}

            <div className="profile-container">
              <div
                className="profile"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {/* <img src="images/profile.png" alt="Profile" /> */}
                <img
                  src={`https://my.tc.popopower.com/${profileImg}`}
                  alt="profile-picture"
                />
              </div>
              {isOpen && (
                <div className="dropdownMenu">
                  <ul>
                    <li>
                      {" "}
                      <Link to="/profilePage">
                        <i className="fa-solid fa-user"></i> My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="" onClick={handleLogout}>
                        <i className="fas fa-power-off"></i> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/registrationPage" className="register-btn">
              <span>
                <i className="fa-regular fa-user"></i>
              </span>{" "}
              Register
            </Link>
            <Link to="/loginPage" className="register-btn">
              <span>
                <i className="fa fa-sign-in"></i>
              </span>{" "}
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftBox;
