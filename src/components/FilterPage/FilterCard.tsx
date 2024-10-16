import React, { useEffect, useState } from "react";
import "./filterCard.css";
import axios from "axios";
import sliderData from "../homepg/Slider/sliderdata";
import PointCard from "../common/pointCard/PointCard";

interface MatchData {
  id: number;
  category_name: string;
  from_team_name: string;
  to_team_name: string;
  team_one_scrore: string;
  team_one_wicket: string;
  team_two_scrore: string;
  team_two_wicket: number;
  team_one_over: string;
  team_two_over: string;
  from_team_logo: string;
  to_team_logo: string;
  stadium_name: string;
//   match_fixture_status_name: string;
  liveStatus: string;
//   winMsg: any;
//   city: string;
}

const FilterCard = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await axios.get(
          "https://my.ispl.popopower.com/api/matches/results"
        );

        console.log("API Response:", response.data);

        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.result)
        ) {
          setMatchData(response.data.data.result);
        } else {
          console.error("Result data is not an array");
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    fetchMatchData();
  }, []);

  return (
    <section className="filter-card-section">
      <div className="text-heading mb-4">Live Cricket Matches</div>

      <div className="dropdown">
        Choose Location
        <select name="city-names" id="city">
          <option>Chennai</option>
          <option>Mumbai</option>
          <option>Kolkata</option>
          <option>Srinagar</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
        </select>
      </div>

      <div className="container">
        <div className="row">
          {matchData.length > 0 ? (
            matchData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="topContainer">
                <PointCard
                            key={item.id}
                            category={item.category_name}
                            team1={item.from_team_name}
                            team2={item.to_team_name}
                            score1={`${item.team_one_scrore}/${item.team_one_wicket}`}
                            score2={`${item.team_two_scrore}/${item.team_two_wicket}`}
                            overs1={item.team_one_over}
                            overs2={item.team_two_over}
                            logo1={`https://my.ispl-t10.com/images/team-master/teams/${item.from_team_logo}`}
                            logo2={`https://my.ispl-t10.com/images/team-master/teams/${item.to_team_logo}`}
                            stadium={item.stadium_name}
                            liveStatus={item.liveStatus}
                            />
                </div>
            </div>
            ))
          ) : (
            <p>No match data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterCard;

// {sliderData.map((item, id) => (
//     <PointCard
//       key={item.id}
//       team1={item.team1}
//       team2={item.team2}
//       score1={item.score1}
//       score2={item.score2}
//       overs1={item.overs1}
//       overs2={item.overs2}
//       logo1={item.logo1}
//       logo2={item.logo2}
//       stadium={item.stadium_name}
//       liveStatus={item.liveStatus} id={0} winMsg={''}                  />
//   ))}
