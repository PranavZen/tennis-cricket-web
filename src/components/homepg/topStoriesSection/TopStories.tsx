import "../topStoriesSection/topStories.scss";

const TopStories = () => {
  return (
    <section className="top-Stories">
      <div className="container">
        <div className="stories">
          <div className="header">
            <h2>Top Stories</h2>
            <a href="#">See all</a>
          </div>

          <div className="story">
            <img src="images\storyImg.png" alt="Story 1" />
            <div className="story-content">
              <a href="/">
                Team One Site Vartaknagar Won Ranjeet Chashak – 2016
              </a>
              <p>09:30 AM April 30, 2020</p>
            </div>
          </div>
          <div className="story">
            <img src="images\topStories1.png" alt="Story 2" />
            <div className="story-content">
              <a href="/">
                Team One Site Vartaknagar Won Ranjeet Chashak – 2016
              </a>
              <p>09:30 AM April 30, 2020</p>
            </div>
          </div>
          <div className="story">
            <img src="images\topStories1.png" alt="Story 3" />
            <div className="story-content">
              <a href="/">
                Team One Site Vartaknagar Won Ranjeet Chashak – 2016
              </a>
              <p>09:30 AM April 30, 2020</p>
            </div>
          </div>
          <div className="story">
            <img src="images\topStories3.png" alt="Story 4" />
            <div className="story-content">
              <a href="/">
                Team One Site Vartaknagar Won Ranjeet Chashak – 2016
              </a>
              <p>09:30 AM April 30, 2020</p>
            </div>
          </div>
          <div className="story">
            <img src="images\topStories3.png" alt="Story 5" />
            <div className="story-content">
              <a href="/">
                Team One Site Vartaknagar Won Ranjeet Chashak – 2016
              </a>
              <p>09:30 AM April 30, 2020</p>
            </div>
          </div>
          <div className="story">
            <img src="images\storyImg.png" alt="Story 6" />
            <div className="story-content">
              <a href="/">
                Team One Site Vartaknagar Won Ranjeet Chashak – 2016
              </a>
              <p>09:30 AM April 30, 2020</p>
            </div>
          </div>
        </div>

        <div className="ads">
          <div className="ad">
            <img src="images\storyAddImg1.png" alt="Ad 1" />
          </div>
          <div className="ad">
            <img src="images\storySddImg2.png" alt="Ad 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
