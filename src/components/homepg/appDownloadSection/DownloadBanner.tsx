import React from 'react'
import './downloadBanner.css'

const DownloadBanner = () => {
  return (
    <div className='stats-wrapper'>
        <img className="stats-container" src="images\DownloadAppContainer.png" alt=""/>
    <div className="stats-info"> 
        <h2>Tenniscricket in Numbers</h2>
        <p>Download the award winning app and start scoring for free.</p>
        <a href="#" className="download-button">Download App</a>
    </div>
    <div className="stats-details">
        <div className="stat-left">
        <div className="stat-item">
            <h3>17th oct 2016</h3>  
            <p>First Match Scored</p>
        </div>
        <div className="stat-item">
            <h3>90k+ Matches</h3>
            <p>Scored so far</p>
        </div>
        </div>
        <div className="stat-left">
        <div className="stat-item">
            <h3>53k+ Tournaments</h3>
            <p>Covered so far</p>
        </div>
        <div className="stat-item">
            <h3>31k+ Players</h3>
            <p>Registered so far</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default DownloadBanner;
