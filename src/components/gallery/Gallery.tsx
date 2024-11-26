import '../../components/gallery/gallery.scss';
import MasonryGrid from "../common/masonryGrid/MasonryGrid";

const Gallery: React.FC = () => {
  const items = [
    { id: 1, size: "10em", image: "images/fluidImg1.png" },
    { id: 2, size: "10em", image: "images/fluidImg2.png" },
    { id: 3, size: "1.6em", image: "images/fluidImg3.png" },
    { id: 4, size: "4em", image: "images/fluidImg4.png" },
    { id: 5, size: "2.2em", image: "images/fluidImg5.png" },
    { id: 6, size: "3em", image: "images /fluidImg6.png" },
    { id: 7, size: "4.5em", image: "images/fluidImg2.png" },
    { id: 8, size: "1em", image: "images/fluidImg4.png" },
    { id: 9, size: "3.5em", image: "images /fluidImg6.png" },
    { id: 10, size: "1em", image: "images/fluidImg1.png" },
  ];

  return (
    <div>
      <h1>Masonry Layout with Images</h1>
      <MasonryGrid items={items} />
    </div>
  );
};

export default Gallery;
