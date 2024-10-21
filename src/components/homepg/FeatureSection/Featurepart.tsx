import React, { useState } from 'react';
import './featurepart.css';

const Featurepart = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'booking'>('live');

  const handleTabChange = (tab: 'live' | 'booking') => {
    setActiveTab(tab);
  };

  return (
    <div className="why-tenniscricket">
      <h2>Why Tennis cricket?</h2>
      <div className="tab-menu">
        <a
          href="#"
          className={activeTab === 'live' ? 'active' : ''}
          onClick={() => handleTabChange('live')}
        >
          Cricket Live
        </a>
        <a
          href="#"
          className={activeTab === 'booking' ? 'active' : ''}
          onClick={() => handleTabChange('booking')}
        >
          Booking Ground
        </a>
      </div>

      <div className="feature-section">
        <div className="feature-left">
            <div className="container">
          <div className="feature-card">
            <div className="icon">🏏</div>
            <h3>Live Scoring</h3>
            <p>Get instant updates on ongoing matches with Live Scoring.</p>
          </div>
          {/* <div className="image">
            <img src="images\Vector 6.png" />
          </div> */}
          </div>

          <div className="feature-card">
            <div className="icon">📺</div>
            <h3>Live Streaming</h3>
            <p>Get real-time match updates with Live Streaming.</p>
          </div>
        </div>

        <div className="phone-display">
          <img src="images/mobileImg.png" alt="mobileImg" />
        </div>

        <div className="feature-right">
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Scorecard</h3>
            <p>Explore player performance and match outcomes with a professional scorecard.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🔍</div>
            <h3>Looking</h3>
            <p>Find players, opponents, teams, umpires, and scorers with Looking.</p>
          </div>
        </div>
      </div>

      {/* Tab-specific content below the feature section */}
      <div className="tab-content">
        {activeTab === 'live'}

        {activeTab === 'booking'}
      </div>
    </div>
  );
};

export default Featurepart;
