import React from "react";
import Header from "../common/header/Header";
import "../AboutUs/AboutUs.scss";

interface AboutUsProps {
  title?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ title = "About Us" }) => {
  return (
    // <section className="allMatchPages">

    //   <Header subtitle="About Us" className="innerpageHeading" />
    //   <div className="container">
    //   <h1 style={{textAlign:"center",  padding:"30px", fontSize:"40px" }}>{title}</h1>
    //     <div className={styles.aboutUsDetails} >
    //       <p>
    //         <strong>www.tenniscricket.in</strong> is India’s first Tennis-Ball Cricket website. We are here to serve you with the latest Tennis Ball cricket updates from all around the world. You will get detailed information about professional tennis ball cricket players, local tennis ball cricket players, ex-players, best batsmen & bowlers in tennis ball cricket, best teams, and much more. Additionally, we have player profiles where you will get insights and personal information on our website.
    //       </p>

    //       <p>
    //         Our quick updates on upcoming and ongoing tennis ball cricket tournaments help you find all the tournament information at one place. You can easily browse photos and videos of these tournaments through our website. The match center keeps you updated with the live cricket scores of all the tennis ball cricket tournaments happening around the world.
    //       </p>

    //       <p>
    //         The brand TennisCricket.in was founded by a young and dynamic cricket lover, <strong>Mr. Santosh Sampat Nanekar</strong>. He himself played lots of tennis-ball cricket in college and in professional/commercial teams in Mumbai. His passion for this beautiful game led him to innovate this brand, and today, this website is accessed by tennis ball cricket fans, players, and well-wishers from over 170 countries.
    //       </p>

    //       <p>
    //         Currently, the brand TennisCricket.in is owned and operated by <strong>Nanekar Info Solutions Private Limited</strong> from its Mumbai location.
    //       </p>
    //     </div>
    //     </div>
    // </section>
    <div className="allMatchPages">
      <Header subtitle="About Us" className="innerpageHeading" />
      <div className="container">
        <div className="founders-section">
          <h2 className="section-title">MEET THE FOUNDERS</h2>
          <div className="founder">
            <div className="founder-image">
              <img src="images\founderImg.png" alt="founder-Img" />
            </div>
            <div className="founder-info">
              <h3>
                <span className="name">SANTOSH NANEKAR</span>{" "}
                <span className="role">FOUNDER & CEO</span>
              </h3>
              <p>
                Santosh Nanekar, a visionary Tennis Cricket Entrepreneur,
                founded Tenniscricket.in at the tender age of 22, with a bold
                mission to take the game global. Despite being the most popular
                sport in India, Santosh recognized the immense potential for
                growth and development in tennis ball cricket. To turn his
                vision into reality, he embarked on a journey to gather valuable
                insights and information by attending various tournaments across
                the globe. Currently Tenniscricket.in has successfully done
                broadcasting across 8 countries. Through his interactions with
                seasoned players, commentators, and umpires, Santosh amassed a
                wealth of knowledge, which he generously shared on his website
                and social media platforms. His dedication and perseverance have
                been instru -mental in promoting tennis ball cricket, providing
                a platform for budding cricketers to hone their skills and
                kickstart their professional careers. Santosh's unwavering
                commitment to the development of tennis ball cricket has been a
                driving force behind the sport's growing popularity.
              </p>
            </div>
          </div>
          <div className="founder">
            <div className="founder-info">
              <h3>
                <span className="name">DIPAK CHAUHAN</span>{" "}
                <span className="role">CO-FOUNDER</span>
              </h3>
              <p>
                A well-known name in the Sports & Event Management Industry. He
                is the Brand Ambassador of Road Safey World Series. He is the
                Owner, founder & Director of Starconnect Group India. Under his
                vision, companies which are established, are Starconnect
                Entertainmet and Starconnect Business Solution. These companiess
                a domain expert in BPO Outsourcing, Technical Development,
                Management Service, End to End Marketing and Sales Services.
              </p>
            </div>
            <div className="founder-image">
              <img src="images\co-founderImg.png" alt="coFounder-Img" />
            </div>
          </div>

          <div className="aboutus-section">
            <h2 className="section-title">
              ABOUT <span className="highlight">TENNISCRICKET.IN</span>
            </h2>
            <p>
              Tenniscricket.in is India's pioneering online platform for tennis
              cricket, dedicated to promoting the sport globally. With a massive
              fan base worldwide, we aim to elevate the game's standards by
              providing comprehensive coverage of tennis ball cricket matches.
              Our features include
            </p>
            <div className="features-list">
              <ul>
                <li>Live Cricket Streaming</li>
                <li>Cricket Scorecards</li>
                <li>News And Articles</li>
              </ul>
              <ul>
                <li>Special Blogs</li>
                <li>Photos And Videos</li>
                <li>Global Live Streaming</li>
              </ul>
            </div>
            <p className="mission">
              Our mission is to create a one-stop solution for fans to access
              every match, tournament, and player performance. As the most
              trusted platform with 1.91M YouTube subscribers, we're committed
              to developing tennis cricket on a global scale.
            </p>
          </div>

          <div className="contact-section">
            <h2 className="section-title">TENNISCRICKET.IN REACH</h2>
            <div className="mobile-images">
              {/* <div> */}
              <img src="images\YT-Mobile.png" alt="yt-mobile" />
              {/* </div> */}
              {/* <div> */}
              <img src="images\Insta-Mobile.png" alt="insta-mobile" />
              {/* </div> */}
              {/* <div> */}
              <img src="images\FB-Mobile.png" alt="fb-mobile" />
              {/* </div> */}
            </div>
          </div>

          <div className="youtube-section">
            <h2 className="section-title">YOUTUBE REACH</h2>
            <div className="youtubeReach-img">
              <img src="images\youtube-reach.png" alt="youtube-reach" />
            </div>
          </div>

          <div className="services-section">
            <h2 className="section-title">SERVICES WE CATER</h2>
            <div className="img-container">
              <div className="row">
                <div className="col-4">
                  <img src="images\servicesImg1.png" alt="" />
                  <p>BROADCASTING</p>
                </div>
                <div className="col-4">
                  <img src="images\servicesImg2.png" alt="" />
                  <p>DIGITAL ADVERTISEMENTS</p>
                </div>
                <div className="col-4">
                  <img src="images\servicesImg3.png" alt="" />
                  <p>TALENT MANAGEMENT PROGRAM</p>
                </div>
                <div className="col-4">
                  <img src="images\servicesImg4.png" alt="" />
                  <p>PLAYER PROMOTIONS</p>
                </div>
                <div className="col-4">
                  <img src="images\servicesImg5.png" alt="" />
                  <p>CONTENT CREATION</p>
                </div>
                <div className="col-4">
                  <img src="images\servicesImg6.png" alt="" />
                  <p>PLAYER PROFILE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="broadcasting-section">
            <h2 className="section-title">BROADCASTIMG SERVICES</h2>
            <div className="content">
              <div className="details">
                <p>
                  Unlock the power of Tenniscricket.in, the world's leading
                  YouTube channel for tennis ball cricket! With a massive 1.91M
                  subscribers, we offer unparalleled viewership for your
                  matches.
                </p>
                <p>
                  Our platform empowers talented cricketers worldwide to showc
                  -ase their skills to a vast audience, kick starting their
                  professional careers.
                </p>
                <p>
                  Leverage our reach to maximize your sponsorship potential and
                  take your tournament to the next level. Let's grow your
                  audience and revenue together!"
                </p>
              </div>
              <div className="broadcasting-img">
                <img
                  src="images\broadcastingServices.png"
                  alt="broadcasting-Services"
                />
              </div>
            </div>
          </div>

          <div className="digital-section">
            <h2 className="section-title">DIGITL ADVERTISEMENTS</h2>
            <div className="content">
              <div className="digital-Advertisements">
                <img
                  src="images\digitalAdvertisements.png"
                  alt="digital-Advertisements"
                />
              </div>
              <div className="details">
                <p>
                  "Amplify your brand's reach with our digital advertisements!
                  As the premier broadcaster of top tennis ball cricket
                  tournaments globally, we offer unparalleled opportunities for
                  brands to connect with their target audience. Our live
                  streaming platform reaches a massive 1.91M subscribers on
                  YouTube and 293K followers on Instagram and counting,
                  providing an engaged and captive audience for your
                  advertisements.
                </p>
                <p>
                  With our digital ads, you can increase your brand's
                  visibility, drive website traffic, and generate leads. Our
                  platform offers a range of advertising formats, including
                  pre-roll ads, mid-roll ads, and sponsored content. Partner
                  with us to reach the highest digital audience and take your
                  brand to the next level. Let's discuss how we can help you
                  achieve your marketing goals!"
                </p>
              </div>
            </div>
          </div>

          <div className="talent-section">
            <h2 className="section-title">TALENT MANAGEMENT PROGRAM</h2>
            <div className="content">
              <div className="details">
                <p>
                  Our TennisCricket Talent Management Program (TMP) is designed
                  to support young and budding cricketers in realizing their
                  full potential. We provide a platform for them to showcase
                  their skills to a larger audience, helping them gain
                  visibility and recognition. Our program assists players in
                  developing their profiles, securing sponsorships, and getting
                  scouted by professional teams. We also facilitate brand
                  engagement throughout their cricketing career, ensuring they
                  receive the support they need to succeed.
                </p>
                <p>
                  With TennisCricket TMP, we're committed to helping talented
                  cricketers bridge the gap between potential and success. Our
                  holistic approach considers all aspects of a player's
                  development, empowering them to reach new heights in their
                  cricketing journey.
                </p>
              </div>

              <div className="talentMange-img">
                <img src="images\talentManageProg.png" alt="talentManageProg" />
              </div>
            </div>
          </div>

          <div className="player-section">
            <h2 className="section-title">PLAYER PROMOTIONS</h2>
            <div className="content">
              <div className="playerPromotion-img">
                <img src="images\playerPromotions.png" alt="playerPromotions" />
              </div>
              <div className="details">
                <p>
                  "Unleash your cricketing potential with our player promotion
                  services! Are you a talented cricketer looking to increase
                  your visibility and reach a wider audience? We're here to
                  help. Our platform offers a unique opportunity to showcase
                  your skills to a massive audience and through our social media
                  pages.
                </p>
                <p>
                  We'll help you create a compelling profile and promote your
                  videos on our social media pages, increasing your organic
                  followers and fan base. Our expertise in player promotion
                  ensures that your talent gets the recognition it deserves.
                  With our support, you'll be able to connect with teams,
                  scouts, and fans worldwide, taking your cricketing career to
                  the next level. Let us help you shine on the global stage!
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2 className="section-title">CONTENT CREATION</h2>
            <div className="content">
              <div className="details">
                <p>
                  "Maximize the impact of your cricket tournament with our
                  expert content creation services! Are you struggling to create
                  engaging content for your next season? Look no further! Our
                  team of experts is here to help you leverage your existing
                  content in a way that captivates your audience. From thrilling
                  match highlig -hts to exclusive interviews, stunning opening
                  and closing cere -monies, to behind-the-scenes walkthroughs of
                  your event, we'll help you craft compelling content that
                  leaves a lasting impression.
                </p>
                <p>
                  Our expertise in content creation ensures that your tournament
                  gets the visibility it deserves, attracting more sponsors,
                  fans, and players for your next season. Let us help you tell
                  your tourname -nt's story in a way that resonates with your
                  audience and takes your event to the next level!"
                </p>
                <div className="contentCreation2">
                  <img
                    src="images\contentCreation2.png"
                    alt="contentCreation2"
                  />
                </div>
              </div>
              <div className="content-creation">
                <div className="contentCreation1">
                  <img
                    src="images\contentCreation1.png"
                    alt="contentCreation1"
                  />
                </div>
                
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="section-title">PLAYER PROFILE</h2>
            <div className="content">
              <div className="playerProfile-img">
                <img src="images\playerProfileImg.png" alt="playerProfileImg" />
              </div>
              <div className="details">
                <p>
                  "Keep your cricketing legacy organized and accessible with our
                  player profile and performance tracking services! Are you
                  tired of scrambling to keep track of your match records and
                  performance data? Look no further! Register with us for free
                  and create your unique player ID on tenniscricket.in. Our
                  platform allows you to store your match performance data in a
                  professional and easily accessible way, regardless of whether
                  your matches are broadca -sted on our channel or elsewhere.
                </p>
                <p>
                  Not only will you be able to preserve your records for years
                  to come, but you'll also be able to revie your progress and
                  journey in the cricketing world. Our platform is designed to
                  help you analyze your performance, identify areas for
                  improvement, and showcase your achievements to sponsors,
                  scouts, and fans. Let us help you take your cricketing career
                  to the next level by maintaining your playing records in a
                  seamless and efficient way!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
