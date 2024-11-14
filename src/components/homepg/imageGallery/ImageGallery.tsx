import { Link } from "react-router-dom";
import "../imageGallery/imageGallery.scss";

const ImageGallery: React.FC = () => {

  return (
    <section className="background">
      <div
        className="news-sectiondiv d-inline-block w-100"
        style={{ padding: "40px 0px 55px" }}
      >
        <div className="container">
          <div className="mindle-heading">
            <h6>Gallery</h6>
            <a href="/">See all</a>
          </div>
          <div className="row row-cols-2 row-cols-lg-4 mt-0 g-4 mt-4">
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Team-DSS-won-PPL-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Team-DSS-won-PPL-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Arya-XI-won-Nagaradhyaksh-Chashak-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Arya-XI-won-Nagaradhyaksh-Chashak-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2020/03/indian-physically-challenged-team-696x405.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2020/03/indian-physically-challenged-team-696x405.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Delhi-team-won-SCCL-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Delhi-team-won-SCCL-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2020/03/indian-physically-challenged-team-696x405.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2020/03/indian-physically-challenged-team-696x405.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Delhi-team-won-SCCL-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Delhi-team-won-SCCL-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Team-DSS-won-PPL-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Team-DSS-won-PPL-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Arya-XI-won-Nagaradhyaksh-Chashak-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Arya-XI-won-Nagaradhyaksh-Chashak-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            {/* <div className="col">
              <Link
                data-fancybox
                to="https://www.tenniscricket.in/wp-content/uploads/2016/10/Arya-XI-won-Nagaradhyaksh-Chashak-2016.jpg"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    src="https://www.tenniscricket.in/wp-content/uploads/2016/10/Arya-XI-won-Nagaradhyaksh-Chashak-2016.jpg"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
