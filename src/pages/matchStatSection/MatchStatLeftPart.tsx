import "../matchStatSection/matchStatLeftPart.scss";

const MatchStatLeftPart = () => {
  return (
    <div className="lefBox">
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

        <div className="table-responsive">
        <table className="tabel scorecard">
          <thead>
            <tr className="column-headers">
              <th>Player</th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kalu* (RHB)</td>
              <td>22</td>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>366.67</td>
            </tr>
            <tr>
              <td>Raju (RHB)</td>
              <td>22</td>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>366.67</td>
            </tr>
          </tbody>
          <thead>
            <tr className="column-headers">
              <th>Player</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>Eco</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shiva Shekhawat (RM)</td>
              <td>4</td>
              <td>0</td>
              <td>4</td>
              <td>2</td>
              <td>24.00</td>
            </tr>
            <tr>
              <td>Parveen Meena* (OB)</td>
              <td>4</td>
              <td>0</td>
              <td>4</td>
              <td>2</td>
              <td>24.00</td>
            </tr>
          </tbody>
        </table>
        </div>

      <div className="score-summary">
        <div className="last-bat">
          <strong>Last Bat:</strong> Praveen 6 (10b) • FOW: 16/2 (4.1 Ov)
        </div>
        <div className="balls-container">
          <span className="ball red">W</span>
          <span className="ball red">W</span>
          <span className="ball grey">1</span>
          <span className="ball green">4</span>
          <span className="ball purple">6</span>
          <span className="ball">13th</span>
          <span className="ball grey">1</span>
          <span className="ball green">4</span>
          <span className="ball grey">1</span>
          <span className="ball grey">1</span>
          <span className="ball grey">1</span>
          <span className="ball grey">1</span>
          <span className="ball">13th</span>
          <span className="ball grey">1</span>
          <span className="ball green">4</span>
          <span className="ball grey">1</span>
          <span className="ball grey">1</span>
          <span className="ball grey">1</span>
          <span className="ball grey">1</span>
        </div>
      </div>

      <div className="match-center">
        <div className="match-header">
          <h3>Match Center</h3>
        </div>
        <div className="over-summary">
          <div className="summary-header">
            <div>
              <p className="end-over">END OF OVER 16</p>
              <p>13 Runs</p>
            </div>
            <div className="score">
              <p>QLD : 128/5</p>
              <p>CRR: 8.00</p>
            </div>
          </div>
          <div className="players-info">
            <div className="players">
              <div className="batsmen">
                <p>Kalu</p>
                <p>Raju</p>
              </div>
              <div>
                <p>11 (8b 1x4)</p>
                <p>9 (4b 1x6)</p>
              </div>
            </div>
            <div className="players">
              <div className="bowlers">
                <p>Shiva Shekhawat</p>
                <p>Praveen Meena</p>
              </div>
              <div>
                <p>3-0-33-0</p>
                <p>3-1-12-2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ball-by-ball">
          <div className="info">
            <span>13.6</span>
            <div className="box">1</div>
            <span>Praveen to Kalu, 1 Run</span>
          </div>
          <div className="info">
            <span>13.5</span>
            <div className="box">1</div>
            <span>Praveen to Kalu, 1 Run</span>
          </div>
          <div className="info">
            <span>13.4</span>
            <div className="box">1</div>
            <span>Praveen to Kalu, 1 Run</span>
          </div>
          <div className="info">
            <span>13.3</span>
            <div className="box">1</div>
            <span>Praveen to Kalu, 1 Run</span>
          </div>
          <div className="info">
            <span>13.2</span>
            <div className="box">1</div>
            <span>Praveen to Kalu, 1 Run</span>
          </div>
          <div className="info">
            <span>13.2</span>
            <div className="box">1</div>
            <span>Praveen to Kalu, 1 Run</span>
          </div>
          <div className="commentry">
            <p>Read Full Commentry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStatLeftPart;
