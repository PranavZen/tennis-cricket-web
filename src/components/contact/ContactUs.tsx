import React from 'react';
import Header from "../common/header/Header";
import styles from './ContactUs.module.scss'

interface ContactUsProps {
  title?: string;
}
const ContactUs: React.FC<ContactUsProps> = ({ title = 'Contact Us' }) => {
  return (
    <section className="allMatchPages">
      <Header subtitle="Contact Us" className="innerpageHeading" />
      <div className={styles.contactUsContainer}>
        <h2 style={{ fontSize:"40px" }}>{title}</h2>

        <div className={styles.contactInfo} style={{padding:"10px"}}>
          <p><strong>Want to make an editorial suggestion?</strong><br />
            Contact us on – <a href="mailto:editor@tenniscricket.in">editor@tenniscricket.in</a>
          </p>

          <p><strong>Wish to join our amazing team?</strong><br />
            Send in your CV and work on – <a href="mailto:career@tenniscricket.in">career@tenniscricket.in</a>
          </p>

          <p><strong>Do you want to grow your business through us? We are always here for you.</strong><br />
            Contact us for advertisement – <a href="mailto:advertise@tenniscricket.in">advertise@tenniscricket.in</a>
          </p>

          <p><strong>Any other general query?</strong><br />
            Contact us on – <a href="mailto:connectus@tenniscricket.in">connectus@tenniscricket.in</a>
          </p>
          
          <div className={styles.contactDetails}>
            <p><strong>Head Office:</strong><br />
              S-59, Vashi Fantasia Business Park, <br />
              Sector 30A, Vashi, Navi Mumbai 400703
            </p>

            <p><strong>Phone Number:</strong><br />
              <a href="tel:+912249789063">022 4978 9063</a>
            </p>

            <p><strong>Contact Email:</strong><br />
              <a href="mailto:tenniscricket.in@gmail.com">tenniscricket.in@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
