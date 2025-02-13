import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface LoginButtonProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const LeftBox: React.FC<LoginButtonProps> = ({ isLoggedIn, handleLogout }) => {

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
          <Link to="" className="register-btn" onClick={handleLogout}>
            <span>
            <i className="fas fa-power-off"></i>
            </span>{" "}
            Logout
          </Link>
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
