import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.scss";
import MenuItems from "./MenuItems";
import LeftBox from "./LeftBox";

const Navigation = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
                  src="../images/tennis-cricket-logo.svg"
                  alt="Logo"
                  width={200}
                  height={73}
                />
              </Link>
            </div>

            <MenuItems menuOpen={menuOpen} />
            <LeftBox />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

