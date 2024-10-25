import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../featureSection/Featurepart.scss";

const Featurepart = () => {
  const [visibleTexts, setVisibleTexts] = useState<string[]>(["Live Scoring"]);
  const [activeTab, setActiveTab] = useState<"live" | "booking">("live");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleTabChange = (tab: "live" | "booking") => {
    setActiveTab(tab);
    if (tab === "live") {
      setVisibleTexts(["Live Scoring"]);
    } else {
      setVisibleTexts(["Booking Ground"]);
    }
  };

  const ToggleSwitch = ({
    switchId,
    displayText,
  }: {
    switchId: string;
    displayText: string;
  }) => {
    const isVisible = visibleTexts.includes(displayText);

    const handleToggleChange = () => {
      if (isVisible) {
        setVisibleTexts(visibleTexts.filter((text) => text !== displayText));
      } else {
        setVisibleTexts([...visibleTexts, displayText]);
      }
    };

    return (
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isVisible}
          onChange={handleToggleChange}
          disabled={activeTab === "booking"}
        />
        <span className="slider"></span>
      </label>
    );
  };

  return (
    <div className="why-tenniscricket">
      <h2>Why Tennis cricket?</h2>
      <div className="tab-menu">
        <button
          className={activeTab === "live" ? "active" : ""}
          onClick={() => handleTabChange("live")}
        >
          Cricket Live
        </button>
        <button
          className={activeTab === "booking" ? "active" : ""}
          onClick={() => handleTabChange("booking")}
        >
          Booking Ground
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <div className="feature-section parent">
              {activeTab === "live" && (
                <>
                  <div className="feature-card div1" data-aos="fade-left">
                    <div className="icon">🏏</div>
                    <h3>Live Scoring</h3>
                    <p>Get instant updates on ongoing matches with Live Scoring.</p>
                    <ToggleSwitch
                      switchId="feature-card-1"
                      displayText="Live Scoring"
                    />
                  </div>

                  <div className="feature-card div2" data-aos="fade-left">
                    <div className="icon">📺</div>
                    <h3>Live Streaming</h3>
                    <p>Get real-time match updates with Live Streaming.</p>
                    <ToggleSwitch
                      switchId="feature-card-2"
                      displayText="Live Streaming"
                    />
                  </div>

                  <div className="feature-card div3" data-aos="fade-right">
                    <div className="icon">📊</div>
                    <h3>Scorecard</h3>
                    <p>
                      Explore player performance and match outcomes with a
                      professional scorecard.
                    </p>
                    <ToggleSwitch
                      switchId="feature-right-1"
                      displayText="Scorecard"
                    />
                  </div>

                  <div className="feature-card div4" data-aos="fade-right">
                    <div className="icon">🔍</div>
                    <h3>Looking</h3>
                    <p>
                      Find players, opponents, teams, umpires, and scorers with
                      Looking.
                    </p>
                    <ToggleSwitch
                      switchId="feature-right-2"
                      displayText="Looking"
                    />
                  </div>
                </>
              )}

              {activeTab === "booking" && (
                <>
                  <div className="feature-card div1" data-aos="fade-left">
                    <div className="icon">📅</div>
                    <h3>Booking Ground</h3>
                    <p>Find players, opponents, teams, umpires, and scorers with Looking.</p>
                  </div>
                </>
              )}

              <div className="phone-display div5">
                <img src="images/mobileImg.png" alt="mobileImg" />
                <div className="phone-content">
                  {visibleTexts.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurepart;
