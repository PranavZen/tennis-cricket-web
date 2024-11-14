import "./downloadBanner.scss";

const DownloadBanner = () => {
  return (
    <section className="bg-img">

      <div className="container midSectionWrap">
          {/* <div className="acheivement">
            <button className="acheivement-btn">Achievement</button>
          </div> */}

        <div className="bannerContentWrap">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="stats-info">
              <h2>Tenniscricket in Numbers</h2>
              <p>Download the award winning app and start scoring for free.</p>
              <button className="download-button">
                Download App
                <img src="images\downloadIcon.png" alt="download-icon" />
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
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
        </div>
      </div>

    </section>
  );
};

export default DownloadBanner;
