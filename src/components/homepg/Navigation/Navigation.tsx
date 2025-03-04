import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navigation/Navigation.scss";
import MenuItems from "./MenuItems";
import LeftBox from "./LeftBox";

const Navigation = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollpos = window.pageYOffset;
      setScroll(currentScrollpos > 0);

      const mainTopElement = document.getElementById("mainTop")!;
      if (prevScrollpos > currentScrollpos) {
        mainTopElement.style.top = "0"; // Show nav
      } else if (prevScrollpos > 500) {
        mainTopElement.style.top = "-18rem"; // Hide nav
      }

      setPrevScrollpos(currentScrollpos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.clear();
      setLoggedIn(false);
      setLoading(false);
      navigate("/loginPage");
      window.location.reload();
    }, 1500);
  };

  return (
    <div
      id="mainTop"
      className={scroll ? "navBarSection" : "navBarSection topClass"}
      style={{ top: 0 }}
    >
      <nav className="navbar navbar-expand-lg" ref={scrollRef}>
        <div className="container">
          <div
            className={`menu-btn-1 ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span></span>
          </div>

          <div className="navWrap">
            <div className="col-md-2 col">
              <Link to="/" className="logoWrap">
                <img
                  src="\images\tennisCricketLogo.png"
                  alt="Logo"
                  // width={200}
                  height={73}
                />
              </Link>
            </div>
            <MenuItems menuOpen={menuOpen} />
            <LeftBox isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;