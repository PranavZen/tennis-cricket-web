import { useEffect, useState } from "react";
import "../Slider/slider.scss";
import axios from "axios";
import MatchPointCard from "../../common/pointCard/MatchPointCardTop";

interface CardData {
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

const Slidertop = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .post(
        `http://ec2-65-2-77-140.ap-south-1.compute.amazonaws.com:8080/api/statistics/fetchTournamentOverview`,
        { tour_id: 9 }
      )
      .then((response) => {
        setCardData(response.data.data.tour.matches);
      })
      .catch((error) => {
        console.error("Error fetching match data:", error);
      });
  }, []);

  if (cardData.length === 0) {
    return null;
  }

  return (
    <section id="topSection">
      <div id="cardCarousel" className="carousel-container">
        <button className="carousel-control prev" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div className="carousel-inner">
        <div className="d-flex justify-content-center">
            {cardData.map((item) => (
              <MatchPointCard
                key={item.id}
                team1={item.teamA}
                team2={item.teamB}
                score1={item.electedToBat===item.teamA?item.inning1.runs:item.inning2.runs}
                score2={item.electedToBat===item.teamB?item.inning1.runs:item.inning2.runs}
                overs1={item.electedToBat===item.teamA?item.inning1.overs:item.inning2.overs}
                overs2={item.electedToBat===item.teamB?item.inning1.overs:item.inning2.overs}
                wicket1={item.electedToBat === item.teamA ? item.inning1.wickets : item.inning2.wickets}
                wicket2={item.electedToBat === item.teamB ? item.inning1.wickets : item.inning2.wickets}
                logo1={item.logo1}
                logo2={item.logo2}
                winMsg={item.tossWon}
                electedToBat={item.electedToBat}
                showStadiumInfo={false}
              />
            ))}
          </div>
        </div>
        <button className="carousel-control next" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </section>
  );

  function scroll(direction: number) {
    const container = document.querySelector(".carousel-inner") as HTMLElement;

    if (container) {
      const scrollAmount = container.offsetWidth; // Now TypeScript knows that 'container' is an HTMLElement
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  }
};

export default Slidertop;