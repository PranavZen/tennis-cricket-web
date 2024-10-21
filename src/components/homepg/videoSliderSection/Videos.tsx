import React, { useState } from 'react';
import './videos.css'; // Custom CSS for styling

const VideoSlider: React.FC = () => {
  // Array of video URLs directly in the component
  const videos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4',
    'video4.mp4',
    'video5.mp4',
    'video6.mp4',
    'video7.mp4',
    'video8.mp4',
    'video9.mp4',
    'video10.mp4',
    'video11.mp4',
    'video12.mp4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 4; // Number of videos visible at once
  const slideGroups = 3; // Number of pagination lines
  const totalSlides = videos.length;
  const groupSize = Math.ceil(totalSlides / slideGroups); // Adjust for the number of pagination lines

  // Function to update pagination lines
  const updatePagination = (index: number) => {
    setCurrentIndex(index * slidesPerView);
  };

  // Pagination click event handler
  const handlePaginationClick = (index: number) => {
    setCurrentIndex(index * slidesPerView);
    updatePagination(index);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${(currentIndex / totalSlides) * 100}%)` }}>
        {videos.map((videoUrl, idx) => (
          <div className="slide" key={idx}>
            <video src={videoUrl} controls></video>
          </div>
        ))}
      </div>

      {/* Pagination (lines) */}
      <div className="pagination">
        {Array.from({ length: slideGroups }).map((_, idx) => (
          <span
            key={idx}
            className={`line ${currentIndex / slidesPerView === idx ? 'active' : ''}`}
            onClick={() => handlePaginationClick(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
