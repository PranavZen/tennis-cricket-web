import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from "react";
import OwlCarousel from 'react-owl-carousel';
import "./feedback.css";

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
        Every cricket story holds a special place in our hearts and that’s why
        your cricket matters
      </div>

      <div className="container">
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div className="item">
            <h4>1</h4>
          </div>
          <div className="item">
            <h4>2</h4>
          </div>
          <div className="item">
            <h4>3</h4>
          </div>
          <div className="item">
            <h4>4</h4>
          </div>
          <div className="item">
            <h4>5</h4>
          </div>
          <div className="item">
            <h4>6</h4>
          </div>
          <div className="item">
            <h4>7</h4>
          </div>
          <div className="item">
            <h4>8</h4>
          </div>
          <div className="item">
            <h4>9</h4>
          </div>
          <div className="item">
            <h4>10</h4>
          </div>
          <div className="item">
            <h4>11</h4>
          </div>
          <div className="item">
            <h4>12</h4>
          </div>
        </OwlCarousel>
        ;
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
