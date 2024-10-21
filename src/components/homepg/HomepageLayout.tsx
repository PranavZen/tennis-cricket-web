import React from 'react'
import Slider from './sliderSection/Slider'
import Navigation from './navigationSection/Navigation'
import Banner from './bannersection/Banner'
import Featurepart from './featureSection/Featurepart'
import AppDownload from './appDownloadSection/DownloadBanner'
import Videos from './videoSliderSection/Videos'
import PromoCard from './promocardSection/PromoCard'
import Feedback from './feedbacksection/Feedback'
import Footer from './footerSection/Footer'

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
