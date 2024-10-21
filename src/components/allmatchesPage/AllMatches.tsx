import React, { useEffect, useState } from "react";
import "./allMatches.css";
import axios from "axios";
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

const AllMatches = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [selectedCity, setSelectedCity] = useState("All");
  //   const [cityy ,setCityy] = useState('')
  //   console.log("setMatchData",matchData);
  //   console.log("selectedCityyyyyy",selectedCity)

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await axios.get(
          `https://my.ispl.popopower.com/api/matches/results`
        );

        console.log("API Response:", response);

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

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const filteredCards =
    selectedCity === "All"
      ? matchData
      : matchData.filter((item) => item.from_team_name === selectedCity);
  // console.log("filteredCards",filteredCards)

  return (
    <section>
      <div className="header-div mb-4">
      <div className="text-heading">
        Live Cricket Matches
      </div>
      <div className="dropdown">
          Choose Location
          <select
            value={selectedCity}
            name="city-names"
            id="city"
            onChange={handleCityChange}
          >
            <option value="All">All</option>
            <option value="CHENNAI SINGAMS">Chennai</option>
            <option value="MAJHI MUMBAI">Mumbai</option>
            <option value="TIIGERS OF KOLKATA">Kolkata</option>
            <option value="SRINAGAR KE VEER">Srinagar</option>
            <option value="KVN BANGALORE STRIKERS">Bangalore</option>
            <option value="FALCON RISERS HYDERABAD">Hyderabad</option>
          </select>
      </div>
    </div>

      <div className="container">
        <div className="row">
          {filteredCards.length > 0 ? (
            filteredCards.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="filter-card-container">
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

export default AllMatches;

