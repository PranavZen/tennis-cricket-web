import React from "react";
import Header from "../common/header/Header";
import "../contact/contactUs.scss";

interface ContactUsProps {
  title?: string;
}
const ContactUs: React.FC<ContactUsProps> = ({ title = "Contact Us" }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="allMatchPages">
      <Header subtitle="Contact Us" className="innerpageHeading" />
      <div className="container">
        <div className="contactUs-container">
          {/* <h2 className="contact-title">{title}</h2> */}
          <div className="left-container">
            <div className="contact-info">
              <p>
                <h3>Want to make an editorial suggestion?</h3>
                Contact us on –{" "}
                <a href="mailto:editor@tenniscricket.in">
                  editor@tenniscricket.in
                </a>
              </p>
              <br />
              <p>
                <h3>Wish to join our amazing team?</h3>
                Send in your CV and work on –{" "}
                <a href="mailto:career@tenniscricket.in">
                  career@tenniscricket.in
                </a>
              </p>
              <br />
              <p>
                <h3>
                  Do you want to grow your business through us? We are always
                  here for you.
                </h3>
                Contact us for advertisement –{" "}
                <a href="mailto:advertise@tenniscricket.in">
                  advertise@tenniscricket.in
                </a>
              </p>
              <br />
              <p>
                <h3>Any other general query?</h3>
                Contact us on –{" "}
                <a href="mailto:connectus@tenniscricket.in">
                  connectus@tenniscricket.in
                </a>
              </p>
            </div>

            <div className="contact-details">
              <h2>CONTACT DETAILS</h2>
              <div className="email">
                <p>E-MAIL</p>
                <i className="fa-solid fa-envelope"></i>{" "}
                <a href="mailto:tenniscricket.in@gmail.com">
                  info@tenniscricket.in
                </a>
              </div>

              <div className="phone-no">
                <p>PHONE</p>
                <i className="fa-solid fa-phone"></i>{" "}
                <a href="tel:+912249789063">+91 93214 57126</a>
              </div>
            </div>

            {/* <div className="contact-details">
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
    </div> */}
          </div>

          <div className="right-container">
            <div className="form">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form">
                  <h2>GET IN TOUCH</h2>

                  <div className="form-row">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Surname" />
                  </div>

                  <div className="form-row">
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone" />
                  </div>

                  <textarea placeholder="Message"></textarea>

                  <div className="checkbox">
                    <input type="checkbox" id="consent" />
                    <label>
                      I hereby authorize to send notifications on SMS/ Messages/
                      Promotional / Informational messages
                    </label>
                  </div>

                  <button type="submit">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
