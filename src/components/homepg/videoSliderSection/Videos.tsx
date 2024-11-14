import React, { useEffect, useState } from "react";
import CommonSlider from "../../common/commonSliderLayout/commonSlider";
import SectionTitle from "../../common/sectionTitleText/SectionTitle";
import HeighlightsCard from "../../common/sliderCard/HighlightsCard";
import Spinner from "../../common/spinner/Spinner";
import "../videoSliderSection/videos.scss";
import data from "./videoData";

interface VideoData {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  url: string;
  city: string;
}

const VideoSlider: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("Highlights");
  // const [videos, setVideos] = useState<VideoData[]>(data);
  // const [filteredVideos, setFilteredVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const filteredVideos =
    selectedCity === "Highlights"
      ? data
      : data.filter((video) => video.city === selectedCity);

  return (
    <section id="highlightsSection">
      <div className="container">
        <div className="row">
          <div className="heading-dropdown">
            <div className="heading">
              <h6>Videos</h6>
            </div>

            <div className="dropdown-videos">
              Choose Videos
              <select
                value={selectedCity}
                name="city-names"
                id="city"
                onChange={handleCityChange}
              >
                <option value="Highlights">Highlights</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Srinagar">Srinagar</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>
          </div>

          <div className="col-l2-10 col-md-12 col-12 mx-auto px-0">
            {/* <div className="topSecWrap">
              <SectionTitle/>
            </div> */}
            {loading ? (
              <Spinner />
            ) : (
              <CommonSlider>
                {filteredVideos.map((item: VideoData) => (
                  <div className="col-md-3" key={item.id}>
                    <HeighlightsCard
                    id={item.id}
                      mainTitle={item.title}
                      backgroundImg={item.thumbnail}
                      date={item.date}
                      matchLink={item.url}
                      datafancybox="data-fancybox"
                      title={item.title}
                      thumbnail={item.thumbnail}
                      url={item.url}
                      city={item.city}
                    />
                  </div>
                ))}
              </CommonSlider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
