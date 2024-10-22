import { useState } from 'react';
import '../promocardSection/promoCard.scss';
import VideoModal from '../../common/videoModal/videoModal';

const PromoCard = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const videoUrl: string = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"; // Replace with your video URL

  const handleShow = (): void => setShowModal(true);
  const handleClose = (): void => setShowModal(false);

  return (
    <section className="wrapper">
      <div className="videoContainer">
    <img src="images\VideoContainerImg.png" alt=""/>
    </div>
    <div className="heading-content">
    <h6>Join Tenniscricket Team</h6>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
    </div>

    <div className="App">
      {/* Square Video Preview */}
      <div className="square-video"
        onClick={handleShow}
      >
        {/* Use a video thumbnail or a small embedded video */}
        <iframe
          src={videoUrl}
          style={{ width: '100%', height: '100%' }}
          title="Preview Video"
          allowFullScreen
        />
        {/* Optionally add play button overlay */}
        {/* <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            fontSize: '24px',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '50%',
          }}
        >
          ▶️
        </div> */}
      </div>

      {/* Video Modal */}
      <VideoModal show={showModal} handleClose={handleClose} videoUrl={videoUrl} />
    </div>
    </section>
  )
}

export default PromoCard;