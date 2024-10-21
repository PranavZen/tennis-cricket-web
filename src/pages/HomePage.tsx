import Featurepart from "../components/homepg/FeatureSection/Featurepart";
import PromoCard from "../components/homepg/Promocard/PromoCard";
import VideoSlider from "../components/homepg/Videos/Videos";

const HomePage = () => {
  return (
    <>
      <Featurepart />
      {/* <AppDownload /> */}
      <VideoSlider />
      <PromoCard />
      {/* <Feedback /> */}
    </>
  );
};

export default HomePage;
