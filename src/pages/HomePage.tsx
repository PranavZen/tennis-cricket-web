import Header from "../components/common/header/Header";
import Gallery from "../components/gallery/Gallery";
import AddvertiseBanner from "../components/homepg/addvertiseSection/AddvertiseBanner";
import AddvertiseBanner2 from "../components/homepg/addvertiseSection/AddvertiseBanner2";
import DownloadBanner from "../components/homepg/appDownloadSection/DownloadBanner";
import Featurepart from "../components/homepg/featureSection/Featurepart";
import SmallDeviceFeature from "../components/homepg/featureSection/SmallDeviceFeature";
import Feedback from "../components/homepg/feedbacksection/Feedback";

import TestimonialsCarousel from "../components/homepg/feedbacksection/Feedback";
import CompanySection from "../components/homepg/footerSection/FooterSlider";
import ImageGallery from "../components/homepg/imageGallery/ImageGallery";
import LatestBlog from "../components/homepg/latestBlogSection/LatestBlog";
import PromoCard from "../components/homepg/promocardSection/PromoCard";
import TopStories from "../components/homepg/topStoriesSection/TopStories";
import VideoSlider from "../components/homepg/videoSliderSection/Videos";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="desktopDeviceFeature-cricket">
        <Featurepart />
      </div>
      <div className="SmallDeviceFeature-cricket">
        <SmallDeviceFeature />
      </div>
      <AddvertiseBanner />
      <LatestBlog />
      <TopStories />
      <DownloadBanner />
      <VideoSlider />
      <AddvertiseBanner2 />
      <ImageGallery />
      {/* <Gallery /> */}
      {/* <PromoCard /> */}
      {/* <TestimonialsCarousel /> */}
      {/* <Feedback id={0} title={""} image={""} feedback={""} name={""}/> */}
      <CompanySection />
    </>
  );
};

export default HomePage;
