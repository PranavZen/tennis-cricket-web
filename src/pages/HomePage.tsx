
import Feedback from "react-bootstrap/esm/Feedback";
import DownloadBanner from "../components/homepg/appDownloadSection/DownloadBanner";
import Featurepart from "../components/homepg/featureSection/Featurepart";
import PromoCard from "../components/homepg/Promocard/PromoCard";
import VideoSlider from "../components/homepg/videoSliderSection/Videos";
import Footer from "../components/homepg/footerSection/Footer";
import Header from "../components/common/header/Header";
import Slider from "../components/homepg/Slider/Slider";

const HomePage = () => {
  return (
    <>
    <Slider/>
    <Header/>
      <Featurepart />
      <DownloadBanner/>
      <VideoSlider />
      <PromoCard />
      <Feedback/>
      <Footer/>
    </>
  );
};

export default HomePage;
