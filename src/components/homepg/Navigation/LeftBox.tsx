import { Link } from "react-router-dom";

const LeftBox = () => {
  return (
    <div className="col-md-3 col deskBox">
      <div className="leftBox">
        <button className="searchWrap">
          <img
            src="images\search-icon.png"
            alt="search"
            // width={19}
            // height={19}
          />
        </button>
        <Link to="/registrationPage" className="btn">
          <span>
            <img
              src="images\profile-icon.svg"
              alt="Apple Store"
              // width={16}
              // height={22}
            />
          </span>{" "}
          Register
        </Link>
      </div>
    </div>
  );
};

export default LeftBox;
