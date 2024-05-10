import "./brand-item.css";
import pics1 from "/1.jpg";
import pics2 from "/2.jpg";
import pics3 from "/public/pics/3.jpg";

const PicComponent = () => {
  return (
    <div className="pics-container">
      <div className="grid-pic">
        <img src={pics1} alt="Image 1" />
      </div>
      <div className="grid-pic">
        <img src={pics2} alt="Image 2" />
      </div>
      <div className="grid-picm">
        <img src={pics3} alt="Image 3" />
      </div>
    </div>
  );
};

export default PicComponent;
