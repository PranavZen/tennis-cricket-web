import { useEffect, useState } from "react";
import "../leaderboardTab/leaderBoardTab.scss";
import axios from "axios";
import Dropdown from "./Dropdown";

interface LeaderBoard {
  id: number;
  name: string;
  ball: number;
  four: number;
  six: number;
  run: number;
  over: number;
  wicket: number;
}

const LeaderBoardTab: React.FC = () => {
  const [battersData, setBattersData] = useState<LeaderBoard[]>([]);
  const [bowlersData, setBowlersData] = useState<LeaderBoard[]>([]);
  const [fieldingData, setFieldingData] = useState<LeaderBoard[]>([]);
  const [selectedType, setSelectedType] = useState<string>("Bat");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .post(
        `https://api.tenniscricket.in/api/statistics/fetchTournamentStats`,
        { tour_id: 9}
      )
      .then((response) => {
        // console.log("API Responseqwqwqwqw:", response.data);
        setBattersData(response.data.data.batters);
        setBowlersData(response.data.data.bowlers);
        setFieldingData(response.data.data.fielding);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const displayData =
    selectedType === "Bat"
      ? battersData
      : selectedType === "Bowl"
      ? bowlersData
      : selectedType === "Field"
      ? fieldingData
      : [];

  return (
    <div className="container">
      <Dropdown
        selectType={selectedType}
        handelTypeChange={handleTypeChange}
        selectStyle=""
        handleStyleChange={() => {}}
      />

      {displayData.length > 0 ? (
        displayData.map((user) => (
          <div key={user.id} className="board-content">
            <div className="profile-photo">img</div>
            <div>
              <div className="profile-photo_name">
                <h3>{user.name}</h3>
              </div>
            </div>

            <div className="table-responsive">
              <table className="leaderboard">
                <thead className="column-headers">
                  {selectedType === "Bat" ? (
                    <tr>
                      <th>Ball</th>
                      <th>Four</th>
                      <th>Six</th>
                      <th>Run</th>
                    </tr>
                  ) : selectedType === "Bowl" ? (
                    <tr>
                      <th>Over</th>
                      <th>Wicket</th>
                      <th>Run</th>
                    </tr>
                  ) : selectedType === "Field" ? (
                    <tr>
                      <th>Catches</th>
                      <th>Run Outs</th>
                    </tr>
                  ) : null}
                </thead>
                <tbody>
                  <tr>
                    {selectedType === "Bat" ? (
                      <>
                        <td>{user.ball}</td>
                        <td>{user.four}</td>
                        <td>{user.six}</td>
                        <td>{user.run}</td>
                      </>
                    ) : selectedType === "Bowl" ? (
                      <>
                        <td>{user.over}</td>
                        <td>{user.wicket}</td>
                        <td>{user.run}</td>
                      </>
                    ) : selectedType === "Field" ? (
                      <>
                        {/* <td>{user.catches}</td>
                        <td>{user.runOuts}</td> */}
                      </>
                    ) : null}
                  </tr>
                </tbody>
              </table>
            </div>

            <div>Rank</div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default LeaderBoardTab;
