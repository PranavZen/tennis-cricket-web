import { useEffect, useState } from "react";
import Header from "../common/header/Header";
import MatchStatLeftPart from "./leftSide/MatchStatLeftPart";
import "./matchStat.scss";
import MatchStatRightPart from "./rightSide/MatchStatRightPart";
import axios from "axios";
import { useParams } from "react-router-dom";

const MatchStat = () => {
  const [matchData, setMatchData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  // console.log("rrrr",matchData);

  useEffect(() => {
    axios
      .post(
        `http://ec2-65-2-77-140.ap-south-1.compute.amazonaws.com:8080/api/statistics/fetchTournamentOverview`,
        {
          tour_id: 9,
          match_id: id,
        }
      )
      .then((response) => {
        console.log("response", response);
        setMatchData(response.data.data.tour.matches);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching match data:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="matchStat">
      <Header subtitle="Live Cricket Matches" className="innerpageHeading" />
      <div className="matchStat-wrapper">
        <div className="container-fluid">
          <div className="matchStat-leftPart">
            {matchData.map((match, index) => (
              <div className="heading" key={index}>
                <p>
                  {/* Majhi Mumbai Vs Tiigers Of Kolkata | 3rd T20I at Mumbai, Sep 24
          2024 - Live Cricket Score{" "} */}
                  {`${match.teamA} Vs ${match.teamB} | 3rd T20I at ${match.ground}, ${match.place}, ${match.date} - Live Cricket Score`}
                </p>
              </div>
            ))}

            <div className="combine-Part row">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div className="col-md-8">
                    <MatchStatLeftPart matchData={matchData} />
                  </div>
                  <div className="col-md-4">
                    <MatchStatRightPart matchData={matchData} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchStat;
