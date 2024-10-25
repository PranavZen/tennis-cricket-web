import Header from "../components/common/header/Header";
import DownloadBanner from "../components/homepg/appDownloadSection/DownloadBanner";
import Featurepart from "../components/homepg/featureSection/Featurepart";

import TestimonialsCarousel from "../components/homepg/feedbacksection/Feedback";
import Footer from "../components/homepg/footerSection/Footer";
import PromoCard from "../components/homepg/promocardSection/PromoCard";
import VideoSlider from "../components/homepg/videoSliderSection/Videos";

const HomePage = () => {
  return (
    <>
      <Header />
      <Featurepart />
      <DownloadBanner />
      <VideoSlider />
      <PromoCard />
      <TestimonialsCarousel />
    </>
  );
};

export default HomePage;
