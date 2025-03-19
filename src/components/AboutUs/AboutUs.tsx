import React from 'react';
import styles from './AboutUs.module.scss';
import Header from "../common/header/Header";

interface AboutUsProps {
  title?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ title = 'About Us' }) => {
  return (
    <section className="allMatchPages">

      <Header subtitle="About Us" className="innerpageHeading" />
      <h1 style={{textAlign:"center",  padding:"30px", fontSize:"40px" }}>{title}</h1>
        <div className={styles.aboutUsDetails} >
          <p>
            <strong>www.tenniscricket.in</strong> is India’s first Tennis-Ball Cricket website. We are here to serve you with the latest Tennis Ball cricket updates from all around the world. You will get detailed information about professional tennis ball cricket players, local tennis ball cricket players, ex-players, best batsmen & bowlers in tennis ball cricket, best teams, and much more. Additionally, we have player profiles where you will get insights and personal information on our website.
          </p>

          <p>
            Our quick updates on upcoming and ongoing tennis ball cricket tournaments help you find all the tournament information at one place. You can easily browse photos and videos of these tournaments through our website. The match center keeps you updated with the live cricket scores of all the tennis ball cricket tournaments happening around the world.
          </p>

          <p>
            The brand TennisCricket.in was founded by a young and dynamic cricket lover, <strong>Mr. Santosh Sampat Nanekar</strong>. He himself played lots of tennis-ball cricket in college and in professional/commercial teams in Mumbai. His passion for this beautiful game led him to innovate this brand, and today, this website is accessed by tennis ball cricket fans, players, and well-wishers from over 170 countries.
          </p>

          <p>
            Currently, the brand TennisCricket.in is owned and operated by <strong>Nanekar Info Solutions Private Limited</strong> from its Mumbai location.
          </p>
        </div>
    </section>
  );
};

export default AboutUs;
