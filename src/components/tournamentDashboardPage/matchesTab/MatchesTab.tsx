import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MatchPointCard from "../../common/pointCard/MatchPointCard";
import Spinner from "../../common/spinner/Spinner";
// import "../../components/homepg/Slider/slider.scss";

interface MatchData {
  id: number;
  no: number;
  teamA: string;
  teamB: string;
  score1: string;
  score2: string;
  wicket1: string;
  wicket2: string;
  overs1: string;
  overs2: string;
  logo1: string;
  logo2: string;
  tossWon: string;
  electedToBat: string
  ground: string;
  place: string;
  date: string
  starts: string;
  inning1: {
    team_name: string;
    runs: string;
    wickets: string
    overs: string;
  };
  inning2: {
    team_name: string;
    runs: string;
    overs: string;
    wickets: string;
  }; 
}

const MatchesTab: React.FC = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate =  useNavigate()

  useEffect(() => {
    axios
      .post(
        `https://api.tenniscricket.in/api/statistics/fetchTournamentOverview`,
        { tour_id: 9 }
      )
      .then((response) => {
        setMatchData(response.data.data.tour.matches);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching match data:", error);
        setLoading(false);
      });
  }, []);

  const singlePage = (id: any) => {
    console.log("response of no.", id)
    navigate(`/matchStat/${id}`)
  }

  return (
    <>
      <div className="tab-box">
  <div className="container">
    <div className="row">
      {loading ? (
        <Spinner />
      ) : matchData.length > 0 ? (
        matchData.map((item) => {
          const mockCategory = "Individual Match (2024-2025)";

          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={item.id}
              onClick={() => singlePage(item.no)}
              style={{ cursor: 'pointer' }}
            >
              <div className="filter-card-container">
                <MatchPointCard
                  category={mockCategory}
                  team1={item.teamA}
                  team2={item.teamB}
                  score1={item.electedToBat === item.teamA ? item.inning1.runs : item.inning2.runs}
                  score2={item.electedToBat === item.teamB ? item.inning1.runs : item.inning2.runs}
                  overs1={item.electedToBat === item.teamA ? item.inning1.overs : item.inning2.overs}
                  overs2={item.electedToBat === item.teamB ? item.inning1.overs : item.inning2.overs}
                  wicket1={item.electedToBat === item.teamA ? item.inning1.wickets : item.inning2.wickets}
                  wicket2={item.electedToBat === item.teamB ? item.inning1.wickets : item.inning2.wickets}
                  logo1={item.logo1}
                  logo2={item.logo2}
                  winMsg={item.tossWon}
                  electedToBat={item.electedToBat}
                  stadium={`${item.ground}, ${item.place}, ${item.date}, ${item.starts}`}
                  showStadiumInfo={true}
                />
              </div>
            </div>
          );
        })
      ) : (
        <p>No match data available.</p>
      )}
    </div>
  </div>
</div>

    </>
  );
};

export default MatchesTab;
