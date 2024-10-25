import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.scss";
import MenuItems from "./MenuItems";
import LeftBox from "./LeftBox";

const Navigation = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null); // Type ref to match the element

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollpos = window.pageYOffset;
      setScroll(currentScrollpos > 0); // Set scroll state

      const mainTopElement = document.getElementById("mainTop")!; // Using non-null assertion
      // Adjust nav position based on scroll direction
      if (prevScrollpos > currentScrollpos) {
        mainTopElement.style.top = "0"; // Show nav
      } else if (prevScrollpos > 500) {
        mainTopElement.style.top = "-18rem"; // Hide nav
      }

      setPrevScrollpos(currentScrollpos); // Update previous scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]); // Effect dependencies

  return (
    <div
      id="mainTop"
      className={scroll ? "navBarSection" : "navBarSection topClass"}
     style={{top : 0}}
    >
      <nav className="navbar navbar-expand-lg"  ref={scrollRef}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            color="#fff"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
            <MenuItems />
            <LeftBox />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
