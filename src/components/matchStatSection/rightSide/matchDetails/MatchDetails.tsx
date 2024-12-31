import React from 'react';
import '../../rightSide/MatchStatRightPart';

interface Match {
  tossWon: string;
  series: string;
  date: string;
  umpires: string;
  ground: string;
  place: string;
  lastUpdate: string;
}

interface MatchDataProps {
  matchData: Match[];
}

const MatchDetails: React.FC<MatchDataProps> = ({ matchData }) => {
  return (
    <section>
      <div className="match-details-container">
        <h3 className="match-details-header">Match Details</h3>
        {matchData?.length > 0 ? (
          matchData.map((match, index) => {
            const matchDataArray = [
              { label: 'Toss', value: match.tossWon },
              { label: 'Series', value: match.series },
              { label: 'Match Date', value: match.date },
              { label: 'Umpires', value: match.umpires },
              { label: 'Location', value: `${match.ground}, ${match.place}` },
              { label: 'Last Update', value: match.lastUpdate },
            ];

            return (
              <div className="match-details-card" key={index}>
                {matchDataArray.map((detail, detailIndex) => (
                  <div className="match-detail" key={detailIndex}>
                    <span className="detail-label">{detail.label}</span>
                    <span className="detail-value">{detail.value || '-'}</span>
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <p>No match details available</p>
        )}
      </div>
    </section>
  );
};

export default MatchDetails;
