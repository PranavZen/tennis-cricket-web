import { useState } from "react";
import "./Feedback.css";
import feedbackData from "./feedbackdata";

const Feedback = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const cardsPerView = 3; // Show 3 cards at once
  const totalSlides = feedbackData.length;

  const moveSlide = (step: number): void => {
    let newIndex = slideIndex + step;
    if (newIndex > totalSlides - cardsPerView) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - cardsPerView;
    }
    setSlideIndex(newIndex);
  };

  return (
    <section className="feedback-section">
      <div className="section-title">Cricketer's Feedback</div>
      <div className="section-subtitle">
        Every cricket story holds a special place in our hearts and that’s why your cricket matters
      </div>

      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>

        <div className="slider-wrapper" style={{ transform: `translateX(-${slideIndex * (100 / cardsPerView)}%)` }}>
          {feedbackData.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`feedback-card ${index === slideIndex + 1 ? "active" : ""}`}
            >
              <div className="profile-image">
                <img src={feedback.image} alt={feedback.name} />
              </div>
              <p className="card-rating">{feedback.rating}</p>
              <div className="card-content">
                <p>{feedback.content}</p>
              </div>
              <div className="card-bottom">
                <div>
                  <p className="card-name">{feedback.name}</p>
                  <p className="card-title">{feedback.title}</p>
                </div>
                <div>
                  <p className="testimonial">{feedback.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right-arrow" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Feedback;
