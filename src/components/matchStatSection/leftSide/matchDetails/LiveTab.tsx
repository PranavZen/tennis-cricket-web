import React from "react";

interface Match {
  currentStriker: any;
  currentBowler: any;
  currentNStriker: any;
}

interface MatchDataProps {
  matchData: Match[];
}

const LiveTab: React.FC<MatchDataProps> = ({ matchData }) => {
//   console.log(matchData[0]);

  return (
    <section>
      <div className="table-responsive">
        {/* Batting Table */}
        <div className="batting-table">
          <table className="table scorecard">
            <thead>
              <tr className="column-headers">
                <th>Batters</th>
                {/* <th></th> */}
                <th>R</th>
                <th>B</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {matchData[0].currentStriker?.name}{" "}
                  {matchData[0].currentStriker?.onStrike ? "*" : ""}
                </td>
                {/* <td>{matchData[0].currentStriker?.outReason}</td> */}
                <td>{matchData[0].currentStriker?.run}</td>
                <td>{matchData[0].currentStriker?.ball}</td>
                <td>{matchData[0].currentStriker?.four}</td>
                <td>{matchData[0].currentStriker?.six}</td>
                <td>{matchData[0].currentStriker?.strikeRate}</td>
              </tr>
              <tr>
                <td>
                  {matchData[0].currentNStriker?.name}{" "}
                  {matchData[0].currentNStriker?.onStrike ? "*" : ""}
                </td>
                {/* <td>{matchData[0].currentNStriker?.outReason}</td> */}
                <td>{matchData[0].currentNStriker?.run}</td>
                <td>{matchData[0].currentNStriker?.ball}</td>
                <td>{matchData[0].currentNStriker?.four}</td>
                <td>{matchData[0].currentNStriker?.six}</td>
                <td>{matchData[0].currentNStriker?.strikeRate}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bowling Table */}
        <div className="bowling-table">
          <table className="table scorecard">
            <thead>
              <tr className="column-headers">
                <th>Bowlers</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
                {/* <th>WD</th>
                <th>NB</th> */}
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>{matchData[0].currentBowler?.name}</td>
                    <td>{matchData[0].currentBowler?.over}</td>
                    <td>{matchData[0].currentBowler?.maiden}</td>
                    <td>{matchData[0].currentBowler?.runs}</td>
                    <td>{matchData[0].currentBowler?.wicket}</td>
                    {/* <td>{matchData[0]currentBowler?.wide}</td>
                    <td>{matchData[0]currentBowler?.noBall}</td> */}
                    <td>{matchData[0].currentBowler?.economy}</td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LiveTab;
