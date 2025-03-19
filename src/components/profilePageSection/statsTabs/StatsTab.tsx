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
  fifties: number;
  hundreds: number;
  fours: number;
  sixes: number;
  highest_score: number;
  batting_average: number;
  runs: number;
  balls: number;
  innings: number;
  strike_rate: number;
  matches: number;
}

interface BowlingStats {
  innings: number;
  balls: number;
  over: number;
  runs: number;
  maidens: number;
  wickets: number;
  bowling_average: number;
  bowling_economy_rate: number;
  matches: number;
  best_BBF: number;
  bowling_strike_rate: number;
}

interface PlayerStats {
  batting: BattingStats;
  bowling: BowlingStats;
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
      component: isLoading ? (
        <Spinner
        // runs={runs} setRuns={setRuns}
        />
      ) : batters ? (
        <BattingTab batters={batters} />
      ) : (
        <div>No Data</div>
      ),
    },
    {
      label: "Bowling",
      component: isLoading ? (
        <Spinner
        // wickets={wickets} setWickets={setWickets}
        />
      ) : bowlers ? (
        <BowlingTab bowlers={bowlers} />
      ) : (
        <div>No Data</div>
      ),
    },
    // {
    //   label: "Fielding",
    //   component: isLoading ? <Spinner /> : <FieldingTab />,
    // },
    // {
    //   label: "Captain",
    //   component: isLoading ? <Spinner /> : <CaptainTab />,
    // }
  ];
  const player_id = localStorage.getItem("player_id");
  useEffect(() => {
    axios
      .get(`https://my.tc.popopower.com/api/get-player-stats/${player_id}`, {})
      .then((response) => {
        // console.log("Fetched Data: ", response.data.message.data);
        const playerData: PlayerStats = response.data.message.data;

        localStorage.setItem("matches", playerData.batting.matches.toString());
        localStorage.setItem("runs", playerData.batting.runs.toString());
        localStorage.setItem("wickets", playerData.bowling.wickets.toString());

        setBatters(playerData.batting);
        setBowlers(playerData.bowling);
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

  return (
    <>
      <SubTabs tabs={tabsData} />
    </>
  );
};

export default StatsTab;
