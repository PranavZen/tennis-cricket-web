import '../../../matchStatSection/leftSide/MatchStatLeftPart';

const MatchStatus = () => {
  return (
    <section>
        <div className="match-container">
        <div className="match-status">
          <span className="live-text">Live</span>{" "}
          <span className="live-dot">•</span>{" "}
          <span className="match-details">
            Majhi Mumbai won the toss, opted to bowl
          </span>
        </div>

        <div className="team-section">
          <div className="team">
            <div className="left-part">
              <img
                src="/images/kolkataTiger1.png"
                alt="Tiigers of Kolkata"
                className="team-logo2"
              />
              <span className="team-name">Tiigers of Kolkata</span>
            </div>
            <div className="team-info">
              <span className="team-score">60/0</span>
              <span className="team-rr">7.40</span>
            </div>
          </div>

          <div className="team">
            <div className="left-part" style={{ marginRight: "4rem" }}>
              <img
                src="images/majhiMumbaiLogo.png"
                alt="Majhi Mumbai"
                className="team-logo1"
              />
              <span className="team-name">Majhi Mumbai</span>
            </div>
            <div className="team-info">
              <span className="team-status">Yet to Bat</span>
            </div>
          </div>
        </div>

        <div className="match-stats">
          Current RR: 7.30 Last 5 ov (RR): 41/5 (8.20)
        </div>

        <div className="nav-tabs">
            <div className="tab-container">
          <span className="tab active">Live</span>
          <span className="tab">Scorecard</span>
          <span className="tab">Commentary</span>
          <span className="tab">Analysis</span>
          <span className="tab">MVP</span>
          <span className="tab">Teams</span>
          <span className="tab">Photos</span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default MatchStatus;
