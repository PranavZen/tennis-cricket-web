import '../../rightSide/MatchStatRightPart';

const MatchDetails = () => {
  return (
    <section>
        <div className="match-details-card">
          <h3 className="match-details-header">Match Details</h3>
          <div className="match-detail">
            <span className="detail-label">Toss</span>
            <span className="detail-value">Tiigers of Kolkata</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Series</span>
            <span className="detail-value">Untda Premier League</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Match days</span>
            <span className="detail-value">25/09/2024</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Umpires</span>
            <span className="detail-value">Goutham</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Location</span>
            <span className="detail-value">Oontra Ground, Ajmer</span>
          </div>
          <div className="match-detail">
            <span className="detail-label">Last Update</span>
            <span className="detail-value">2024-09-25 at 13:31</span>
          </div>
        </div>
    </section>
  )
}

export default MatchDetails