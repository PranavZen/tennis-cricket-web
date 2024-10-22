import React, { useEffect, useState } from 'react';
import CommonSlider from '../../common/commonSliderLayout/commonSlider';
import SectionTitle from '../../common/sectionTitleText/SectionTitle';
import HeighlightsCard from '../../common/sliderCard/HighlightsCard';
import Spinner from '../../common/spinner/Spinner';
import "../videoSliderSection/video.css";
import data from './videoData';

interface VideoData {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  url: string;
}

const VideoSlider: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Uncomment this if you want to fetch videos
    // fetch("https://my.ispl-t10.com/api/video-master/all-vedios")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const filteredVideos = data.data["all-video"].filter(
    //       (video) => video.category_names === "Highlights"
    //     );
    //     setVideos(filteredVideos);
    //     setLoading(false);
    //   });
    
    // For static data
    setLoading(false); // Set loading to false after data is set
  }, []);

  return (
    <section id="highlightsSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto px-0">
            <div className="topSecWrap">
              <SectionTitle titleText="Match Highlights" />
              {/* <SquareButton
                classNameText="sqrBtn"
                btnName="View More"
                svgFill="#263574"
                textColor="#263574"
                bordercolor="#263574"
                btnLinkUrl="/video/highlights"
              /> */}
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <CommonSlider>
                {videos.map((item: VideoData) => (
                  <div className="col-md-3" key={item.id}>
                    <HeighlightsCard
                      mainTitle={item.title}
                      backgroundImg={item.thumbnail}
                      date={item.date}
                      matchLink={item.url}
                      datafancybox="data-fancybox"
                      id={item.id} 
                      title={item.title} 
                      thumbnail={item.thumbnail} 
                      url={item.url} 
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
