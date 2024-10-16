  import React, { useState, useEffect } from 'react';
  import './Slider.css';
  import sliderData from './sliderdata';
  import PointCard from "../../common/pointCard/PointCard";


  interface sliderData {
    team1: string;
    team2: string;
    score1: string;
    score2: string;
    overs1: string;
    overs2: string;
    logo1: number;
    logo2: string;
    stadium: string;
    liveStatus: string;
  }

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
                  <PointCard
                    key={item.id}
                    team1={item.team1}
                    team2={item.team2}
                    score1={item.score1}
                    score2={item.score2}
                    overs1={item.overs1}
                    overs2={item.overs2}
                    logo1={item.logo1}
                    logo2={item.logo2}
                    stadium={item.stadium}
                    liveStatus={item.liveStatus}
                    />
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
