interface Match {
  name: string;
  inning1: {
    runs: string;
    wickets: string;
    overs: string;
    team_name: string;
    extra: {
      wide: string;
      b: string;
      noBall: string;
      lb: string;
    };
    batters: {
      name: string;
      run: string;
      ball: string;
      four: string;
      six: string;
      strikeRate: string;
      outReason: string;
    }[];
    bowlers: {
      name: string;
      over: string;
      maiden: string;
      run: string;
      wicket: string;
      wide: string;
      noBall: string;
      economy: string;
    }[];
  };
  inning2: {
    team_name: string;
    runs: string;
    overs: string;
    wickets: string;
    economy: string;
    extra: {
      wide: string;
      b: string;
      noBall: string;
      lb: string;
    };
    batters: {
      name: string;
      run: string;
      ball: string;
      four: string;
      six: string;
      strikeRate: string;
      outReason: string;
    }[];
    bowlers: {
      name: string;
      over: string;
      maiden: string;
      run: string;
      wicket: string;
      wide: string;
      noBall: string;
      economy: string;
    }[];
  };
}

interface MatchDataProps {
  matchData: Match[];
}

const Scoreboard: React.FC<MatchDataProps> = ({ matchData }) => {
  console.log(
    "Batters",
    matchData[0]?.inning1?.batters.map((batter) => batter.name)
  );

  return (
    <section>
      <div className="table-responsive">
        <div className="inning-data">
          <h3>{matchData[0].inning1?.team_name}</h3>
          <h3>
            {`${matchData[0].inning1?.runs || 0}/${
              matchData[0].inning1?.wickets || 0
            }`}{" "}
            {`(${matchData[0].inning1?.overs || "0"} OV)`}
          </h3>
        </div>
        {/* Batting Table */}
        <div className="batting-table">
          <table className="table scorecard">
            <thead>
              <tr className="column-headers">
                <th>Batters</th>
                <th></th>
                <th>R</th>
                <th>B</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {matchData[0]?.inning1?.batters?.length > 0 &&
                matchData[0].inning1.batters.map((elem, index) => (
                  <>
                    <tr key={index}>
                      <td>{elem.name}</td>
                      <td>{elem.outReason}</td>

                      <td>{elem.run}</td>
                      <td>{elem.ball}</td>
                      <td>{elem.four}</td>
                      <td>{elem.six}</td>
                      <td>{elem.strikeRate}</td>
                    </tr>
                  </>
                ))}
            </tbody>
            <tfoot>
              <tr className="column-headers">
                <th colSpan={1}>Extra</th>
                <td colSpan={6}>
                  (wd {matchData[0]?.inning1?.extra?.wide}, nb{" "}
                  {matchData[0]?.inning1?.extra?.noBall}, lb{" "}
                  {matchData[0]?.inning1?.extra?.lb}, R{" "}
                  {matchData[0]?.inning1?.extra?.b})
                </td>
              </tr>
            </tfoot>
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
                <th>WD</th>
                <th>NB</th>
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
              {matchData[0]?.inning1?.bowlers?.length > 0 &&
                matchData[0].inning1.bowlers.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.name}</td>
                    <td>{elem.over}</td>
                    <td>{elem.maiden}</td>
                    <td>{elem.run}</td>
                    <td>{elem.wicket}</td>
                    <td>{elem.wide}</td>
                    <td>{elem.noBall}</td>
                    <td>{elem.economy}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Batting Table */}
        <div className="inning-data">
          <h3>{matchData[0].inning2?.team_name}</h3>
          <h3>{`${matchData[0].inning2?.runs || 0}/${
            matchData[0].inning2?.wickets || 0
          } (${matchData[0].inning2?.overs || "0"} OV)`}</h3>
        </div>

        <div className="batting-table">
          <table className="table scorecard">
            <thead>
              <tr className="column-headers">
                <th>Batters</th>
                <th></th>
                <th>R</th>
                <th>B</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {matchData[0]?.inning2?.batters?.length > 0 &&
                matchData[0].inning2.batters.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.name}</td>
                    <td>{elem.outReason}</td>
                    <td>{elem.run}</td>
                    <td>{elem.ball}</td>
                    <td>{elem.four}</td>
                    <td>{elem.six}</td>
                    <td>{elem.strikeRate}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr className="column-headers">
                <th colSpan={1}>Extra</th>
                <td colSpan={6}>
                  (wd {matchData[0]?.inning2?.extra?.wide}, nb{" "}
                  {matchData[0]?.inning2?.extra?.noBall}, lb{" "}
                  {matchData[0]?.inning2?.extra?.lb}, R{" "}
                  {matchData[0]?.inning2?.extra?.b})
                </td>
              </tr>
            </tfoot>
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
                <th>WD</th>
                <th>NB</th>
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
              {matchData[0]?.inning2?.bowlers?.length > 0 &&
                matchData[0].inning2.bowlers.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.name}</td>
                    <td>{elem.over}</td>
                    <td>{elem.maiden}</td>
                    <td>{elem.run}</td>
                    <td>{elem.wicket}</td>
                    <td>{elem.wide}</td>
                    <td>{elem.noBall}</td>
                    <td>{elem.economy}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Scoreboard;
