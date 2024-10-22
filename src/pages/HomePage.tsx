import DownloadBanner from "../components/homepg/appDownloadSection/DownloadBanner";
import Featurepart from "../components/homepg/FeatureSection/Featurepart";
import TestimonialsCarousel from "../components/homepg/feedbacksection/Feedback";
import Footer from "../components/homepg/footerSection/Footer";
import VideoSlider from "../components/homepg/videoSliderSection/Videos";

const HomePage = () => {
  return (
    <>
      <Featurepart />
      <DownloadBanner />
      <VideoSlider />
      {/* <PromoCard /> */}
      <TestimonialsCarousel/>
      <Footer />
    </>
  );
};

export default HomePage;
