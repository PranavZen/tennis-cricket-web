import React from 'react'
import Slider from './Slider/Slider'
import Navigation from './Navigation/Navigation'
import Banner from './bannersection/Banner'
import Featurepart from './FeatureSection/Featurepart'
import AppDownload from './AppDownload/DownloadBanner'
import Videos from './Videos/Videos'
import PromoCard from './Promocard/PromoCard'
import Feedback from './Feedback/Feedback'
import Footer from './Footer/Footer'

export const HomepageLayout = () => {
  return (
    <div>
        <Slider/>
        <div className="warp">
              <Navigation />
              <Banner />
        </div>
        <Featurepart />
        <AppDownload />
        <Videos />
        <PromoCard />
        <Feedback />
        <Footer />
    </div>
  )
}
