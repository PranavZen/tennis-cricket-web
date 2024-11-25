import '../loader/loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <svg
        className="loader_circle_4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4" fill="none" />
      </svg>
    </div>
  );
};

export default Loader;
