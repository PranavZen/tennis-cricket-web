import { Link } from "react-router-dom";

const LeftBox = () => {
  return (
    <div className="col-md-3 col-12">
      <div className="leftBox">
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
  );
};

export default LeftBox;
