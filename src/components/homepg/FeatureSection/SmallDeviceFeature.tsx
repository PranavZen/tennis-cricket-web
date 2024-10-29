import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../featureSection/smallDeviceFeature.scss"

const SmallDeviceFeature = () => {
  const [visibleTexts, setVisibleTexts] = useState<string[]>(["Live Scoring"]);
  const [activeTab, setActiveTab] = useState<"live" | "booking">("live");
  const [delayedCards, setDelayedCards] = useState<number[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (activeTab === "live") {
      const intervals = Array.from(Array(4).keys()).map((i) =>
        setTimeout(() => setDelayedCards((prev) => [...prev, i]), i * 1000)
      );
      return () => intervals.forEach(clearTimeout); // Clear timeouts on unmount or tab switch
    }
    setDelayedCards([]);
  }, [activeTab]);

  const handleTabChange = (tab: "live" | "booking") => {
    setActiveTab(tab);
    if (tab === "live") {
      setVisibleTexts((prevTexts) => prevTexts.filter((text) => text !== "Booking Ground").concat("Live Scoring"));
    } else {
      setVisibleTexts(["Booking Ground"]);
    }
  };

  const ToggleSwitch = ({ switchId, displayText }: { switchId: string; displayText: string }) => {
    const isVisible = visibleTexts.includes(displayText);

    const handleToggleChange = () => {
      setVisibleTexts((prevTexts) =>
        isVisible ? prevTexts.filter((text) => text !== displayText) : [...prevTexts, displayText]
      );
    };

    return (
      <label className="toggle">
        <input type="checkbox" checked={isVisible} onChange={handleToggleChange} />
        <span className="slide"></span>
      </label>
    );
  };

  return (
    <div className="tenniscricket">
        <h2>Why Tennis cricket?</h2>
      <div className="tab">
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
              <div className="phone div5">
                <img src="images/mobileImg.png" alt="mobileImg" />
                <div className="p-content">
                  {visibleTexts.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>

              <div className="cards">
                {activeTab === "live" && (
                  <>
                    <div className={`card div1 ${delayedCards.includes(0) ? "show-0" : ""}`} data-aos="fade-down">
                      <div className="icon">🏏</div>
                      <h3>Live Scoring</h3>
                      <p>Get instant updates on ongoing matches with Live Scoring.</p>
                      <ToggleSwitch switchId="feature-card-1" displayText="Live Scoring" />
                    </div>

                    <div className={`card div2 ${delayedCards.includes(1) ? "show-1" : ""}`} data-aos="fade-down">
                      <div className="icon">📺</div>
                      <h3>Live Streaming</h3>
                      <p>Get real-time match updates with Live Streaming.</p>
                      <ToggleSwitch switchId="feature-card-2" displayText="Live Streaming" />
                    </div>

                    <div className={`card div3 ${delayedCards.includes(2) ? "show-2" : ""}`} data-aos="fade-down">
                      <div className="icon">📊</div>
                      <h3>Scorecard</h3>
                      <p>Explore player performance and match outcomes with a professional scorecard.</p>
                      <ToggleSwitch switchId="feature-card-3" displayText="Scorecard" />
                    </div>

                    <div className={`card div4 ${delayedCards.includes(3) ? "show-3" : ""}`} data-aos="fade-down">
                      <div className="icon">🏟️</div>
                      <h3>Looking</h3>
                      <p>Find players, opponents, teams, umpires, and scorers with Looking.</p>
                      <ToggleSwitch switchId="feature-card-4" displayText="Booking Ground" />
                    </div>
                  </>
                )}
                {activeTab === "booking" && (
                  <div className={`card div5 ${delayedCards.includes(0) ? "show-0" : ""}`} data-aos="fade-down">
                    <div className="icon">🏟️</div>
                    <h3>Booking Ground</h3>
                    <p>Book your ground easily and quickly.</p>
                    <ToggleSwitch switchId="feature-card-5" displayText="Booking Ground" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceFeature;
