import { Component, useEffect, useState } from "react";
// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";
import axios from "axios";
import BattingTab from "./BattingTab";
import BowlingTab from "./BowlingTab";
import FieldingTab from "./FieldingTab";
import CaptainTab from "./CaptainTab";
import SubTabs from "../../common/subTabs/SubTabs";
import Spinner from "../../common/spinner/Spinner";

interface BattingStats {
  fifty: number;
  hundred: number;
  fours: number;
  sixes: number;
  highest: number;
  average: number;
  runs: number;
  balls: number;
  innings: number;
  sr: number;
}

interface BowlingStats {
  innings: number;
  balls: number;
  over: number;
  runs: number;
  maidens: number;
  wickets: number;
  average: number;
  economy: number;
}

interface PlayerStats {
  batting_record: BattingStats;
  bowling_record: BowlingStats; 
}

const StatsTab: React.FC = () => {
  const [batters, setBatters] = useState<BattingStats | null>(null);
  const [bowlers, setBowlers] = useState<BowlingStats | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [runs, setRuns] = useState();
  const [wickets, setWickets] = useState();

  const tabsData = [
    {
      label: "Batting",
      component: isLoading ? <Spinner 
      // runs={runs} setRuns={setRuns}
      />
       : (batters ? <BattingTab batters={batters} /> : <div>No Data</div>),
    },
    {
      label: "Bowling",
      component: isLoading ? <Spinner 
      // wickets={wickets} setWickets={setWickets}
      />
       : (bowlers ? <BowlingTab bowlers={bowlers}/>  : <div>No Data</div>),
    },
    {
      label: "Fielding",
      component: isLoading ? <Spinner /> : <FieldingTab />,
    },
    {
      label: "Captain",
      component: isLoading ? <Spinner /> : <CaptainTab />,
    }
  ];

  useEffect(() => {
    axios
      .post("http://ec2-65-2-77-140.ap-south-1.compute.amazonaws.com:8080/api/player/fetchPlayerStat", {
        player_id: 3,
      })
      .then((response) => {
        console.log("Fetched Data: ", response.data.data);
        const playerData: PlayerStats = response.data.data;
        setBatters(playerData.batting_record);
        setBowlers(playerData.bowling_record);
        setLoading(false);
        // setRuns(response.data.data.batting_record.runs);
        // setWickets(playerData.bowling_record);
        // localStorage.setItem("runs", response.data.data.batting_record.runs);
      })
      .catch((error) => {
        console.error("Error fetching player stats:", error);
        setLoading(false);
      });
  }, []);

  return <SubTabs tabs={tabsData} />;
};

export default StatsTab;
