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
            <div className="col modal-img">
              <Link
                data-fancybox="gallery"
                to="images\fluidImg1.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    // className="img-fluid"
                    src="images\fluidImg1.png"
                    alt="pbnm"
                    loading="lazy"
                    // style={{
                    //   width: '100% !important', // Ensure it takes full width (though !important might not be necessary in inline styles)
                    //   height: '100%',
                    //   display: 'block',
                    //   WebkitUserSelect: 'none', // Inline for -webkit-user-select
                    //   backgroundPosition: 'center',
                    //   backgroundRepeat: 'no-repeat',
                    // }}
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox="gallery"
                to="images\fluidImg2.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="images\fluidImg2.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox
                to="images\fluidImg3.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="images\fluidImg3.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox
                to="images\fluidImg4.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="images\fluidImg4.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox
                to="images\fluidImg5.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="images\fluidImg5.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox
                to="images\fluidImg6.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="images\fluidImg6.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox
                to="images\fluidImg4.png"
                className="comon-links-divb05"
              >
                <figure>
                  <img
                    className="img-fluid"
                    src="images\fluidImg4.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
            <div className="col modal-img">
              <Link
                data-fancybox
                to="images\fluidImg2.png"
                className="comon-links-divb05"
              >
                <figure className="comon-links-divb05">
                  <img
                    className="img-fluid"
                    src="images\fluidImg2.png"
                    alt="pbnm"
                    loading="lazy"
                  />
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
