import '../../common/masonryGrid/masonryGrid.scss';

interface MasonryGridProps {
    items: { id: number; size: string; image: string }[]; // Add image URL to the item structure
  }
  
  const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
    return (
      <div className="grid">
        {items.map((item) => (
          <div key={item.id} className="item" style={{ blockSize: item.size }}>
            <img src={item.image} alt={`Item ${item.id}`} className="masonry-image" />
          </div>
        ))}
      </div>
    );
  };

  export default MasonryGrid;

  