import Feedback from "./components/homepg/Feedback/Feedback";
import Footer from "./components/homepg/Footer/Footer";
import Navigation from "./components/homepg/Navigation/Navigation";
import PromoCard from "./components/homepg/Promocard/PromoCard";
import Slider from "./components/homepg/Slider/Slider";
import Videos from "./components/homepg/Videos/Videos";
import AppDownload from "./components/homepg/AppDownload/DownloadBanner"
import Featurepart from "./components/homepg/FeatureSection/Featurepart";

function App() {
  return (
    <section>
      <Slider/>
      <Navigation/>
      <Featurepart/>
      <AppDownload/>
      <Videos/>
      <PromoCard/>
      <Feedback/>
      <Footer/>
    </section>
  );
}

export default App;
