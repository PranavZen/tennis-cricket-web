import '../../rightSide/MatchStatRightPart';

const ImageContainer = () => {
  return (
    <section>
        <div className="image-container">
        <iframe
          // width="215"
          // height="200"
          src="https://www.youtube.com/embed/your_video_id"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
    </section>
  )
}

export default ImageContainer;
