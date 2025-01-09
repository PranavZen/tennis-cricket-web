import { Component, useEffect, useState } from "react";
// import "../../components/profilePageSection/profilePage.scss";
import "../../../components/profilePageSection/profilePage.scss";
import axios from "axios";
import BattingTab from "./BattingTab";
import BowlingTab from "./BowlingTab";
import FieldingTab from "./FieldingTab";
import CaptainTab from "./CaptainTab";
import SubTabs from "../../common/subTabs/SubTabs";

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
  // const [isLoading, setIsLoading] = useState<boolean>(true); 

  const tabsData = [
    {
      label: "Batting",
      component: batters ? <BattingTab batters={batters} /> : <div>Loading Batting Stats...</div>,
    },
    {
      label: "Bowling",
      component: bowlers ? <BowlingTab bowlers={bowlers}/>  : <div>Loading Batting Stats...</div>,
    },
    { label: "Fielding", component: <FieldingTab /> },
    { label: "Captain", component: <CaptainTab /> },
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
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching player stats:", error);
        // setIsLoading(false);
      });
  }, []);

  // if (isLoading) {
  //   return <div>Loading Player Stats...</div>;
  // }

  return <SubTabs tabs={tabsData} />;
};

export default StatsTab;
