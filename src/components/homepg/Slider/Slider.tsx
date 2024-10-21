import PointCard from "../../common/pointcard/PointCard";
import "./Slider.css";
import sliderData from "./sliderdata";
console.log("sliderData", sliderData);

const Slider = () => {
  return (
    <>
      <section id="topSection">
        <div id="cardCarousel" className="carousel-container">
          <button className="carousel-control prev" onClick={() => scroll(-1)}>
            ‹
          </button>
          <div className="carousel-inner">
            <div className="d-flex">
              {sliderData.map((item) => (
                <PointCard
                  key={item.id}
                  team1={item.team1}
                  team2={item.team2}
                  logo1={item.logo1}
                  score1={item.score1}
                  overs1={item.overs1}
                  logo2={item.logo2}
                  score2={item.score2}
                  overs2={item.overs2}
                  stadium={item.stadium}
                  liveStatus={item.liveStatus}
                  winMsg={item.winMsg}
                />
              ))}
            </div>
          </div>
          <button className="carousel-control next" onClick={() => scroll(1)}>
            ›
          </button>
        </div>
      </section>
    </>
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

export default Slider;
