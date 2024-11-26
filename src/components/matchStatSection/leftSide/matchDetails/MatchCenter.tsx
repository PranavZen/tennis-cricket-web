import '../../../matchStatSection/leftSide/MatchStatLeftPart';

const MatchCenter = () => {
  return (
    <section>
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
    </section>
  )
}

export default MatchCenter