import React, { useState, useEffect } from 'react';
import './Slider.css';
import sliderData from './sliderdata';

// console.log("sliderData :", sliderData);

// interface MatchData {
//   id: number;
//   team1: string;
//   team2: string;
//   score1: string;
//   score2: string;
//   overs1: string;
//   overs2: string;
//   logo1: string;
//   logo2: string;
//   stadium: string;
//   liveStatus: string;
// }

const Slider = () => {
  // const [data, setData] = useState<MatchData[]>([]);
  // console.log("data :", data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(data);
  //     const json: MatchData[] = await response.json();
  //     setData(json);
  //   } 

  //   fetchData();
  // }, []);

  return (
      <section id="topSection">
        <div id="cardCarousel" className="carousel-container">
          <button className="carousel-control prev" onClick={() => scroll(-1)}>‹</button>
          <div className="carousel-inner">
            <div className="d-flex">
              {sliderData.map((item) => (
                <div key={item.id} className="topContainer">
                  <div className="scoreboard">
                    <div className="match-info">
                      <span className="team-name1">{item.team1}</span>
                      <span className="team-vs">Vs</span>
                      <span className="team-name2">{item.team2}</span>
                    </div>
                    <div className="scores">
                      <div className="team-score team-left">
                        <img className="team-logo1" src={item.logo1} alt="Team 1 Logo" />
                        <div className="score-details">
                          <span className="runs">{item.score1}</span>
                          <span className="overs">{item.overs1}</span>
                        </div>
                      </div>
                      <div className="score-vs">Vs</div>
                      <div className="team-score team-right">
                        <img className="team-logo2" src={item.logo2} alt="Team 2 Logo" />
                        <div>
                          <span className="runs">{item.score2}</span>
                          <span className="overs">{item.overs2}</span>
                        </div>
                      </div>
                    </div>
                    <div className="stadium-info">
                      <span className="stadium-name">{item.stadium}</span>
                      <span className="live-status">{item.liveStatus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-control next" onClick={() => scroll(1)}>›</button>
        </div>
      </section>
  );

  function scroll(direction: number) {
    const container = document.querySelector('.carousel-inner') as HTMLElement;
    
    if (container) {
      const scrollAmount = container.offsetWidth; // Now TypeScript knows that 'container' is an HTMLElement
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }
  
};

export default Slider;
