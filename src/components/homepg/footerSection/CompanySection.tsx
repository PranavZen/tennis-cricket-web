import React from 'react'
import './footer.scss';
import '../footerSection/companySection.scss';
import Marquee from 'react-fast-marquee';

const CompanySection: React.FC = () => {
  return (
    <section>
    <div className="mentioned-section">
        <p>Proudly Mentioned in</p>
        
        <div>
            <Marquee pauseOnHover speed={80}>
                <div className="image-wrapper">
                    <img src="images/clientImg1.png" alt="Company 1" />
                </div>
                <div className="image-wrapper">
                    <img src="images/clientImg2.png" alt="Company 2" />
                </div>
                <div className="image-wrapper">
                    <img src="images/clientImg3.png" alt="Company 3" />
                </div>
                <div className="image-wrapper">
                    <img src="images/clientImg4.png" alt="Company 4" />
                </div>
                <div className="image-wrapper">
                    <img src="images/clientImg5.png" alt="Company 5" />
                </div>
                <div className="image-wrapper">
                    <img src="images/clientImg7.png" alt="Company 6" />
                </div>
                <div className="image-wrapper">
                    <img src="images/clientImg7.png" alt="Company 7" />
                </div>
            </Marquee>
        </div>
        
      </div>
    </section>
  )
}

export default CompanySection;
