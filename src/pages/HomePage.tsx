import Header from "../components/common/header/Header";
import DownloadBanner from "../components/homepg/appDownloadSection/DownloadBanner";
import Featurepart from "../components/homepg/featureSection/Featurepart";
import SmallDeviceFeature from "../components/homepg/featureSection/SmallDeviceFeature";
import Feedback from "../components/homepg/feedbacksection/Feedback";

import TestimonialsCarousel from "../components/homepg/feedbacksection/Feedback";
import CompanySection from "../components/homepg/footerSection/FooterSlider";
import PromoCard from "../components/homepg/promocardSection/PromoCard";
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

      <DownloadBanner />
      <VideoSlider />
      <PromoCard />
      <TestimonialsCarousel />
      {/* <Feedback id={0} title={""} image={""} feedback={""} name={""}/> */}
      <CompanySection />
    </>
  );
};

export default HomePage;
