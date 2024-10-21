import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './feedback.css';
import feedbackData from './feedbackdata';

// Define the type for testimonial data
interface Testimonial {
  name: string;
  title: string;
  image: string;
  feedback: string;
}

const TestimonialsCarousel: React.FC = () => {
  // State to store testimonials
  // const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Options for the carousel
  const carouselOptions = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    mouseDrag: true, // Allow mouse dragging
  touchDrag: true, // Allow touch dragging on mobile
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1170: { items: 3 },
    },
  };

  // useEffect for fetching data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('feedbackData.json'); // Adjust the path as necessary
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data: Testimonial[] = await response.json();
  //       setTestimonials(data);
  //     } catch (error) {
  //       console.error("Error fetching feedback data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="feedback-section">
      <div className="section-title">Cricketer's Feedback</div>
      <div className="section-subtitle">
        Every cricket story holds a special place in our hearts and that’s why your cricket matters
      </div>

      <div className="container">
        <OwlCarousel {...carouselOptions}>
          {feedbackData.map((testimonial, index) => (
            <div className="item" key={index}>
              <div className="shadow-effect">
                <div className="img-rating">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s Testimonial`}
                  />
                  <div className="rating">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="star">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="star">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="star">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="star">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="star">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  </div>
                </div>
                <p>{testimonial.feedback}</p>
                <div className="card-footer">
                  <div className="testimonial-name">
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.title}</p>
                  </div>
                  <div className="testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="thumb">
                      <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
                    </svg>
                    Testimonial
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
