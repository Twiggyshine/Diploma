import "./brand-item.css";

import { Link } from "react-router-dom";
import pic1 from "/public/grid/1.jpg";
import pic2 from "/public/grid/2.jpg";
import pic3 from "/public/grid/3.jpg";
import pic4 from "/public/grid/4.jpg";



const gridItems = [
  { src: pic1, alt: "Image 1", caption: "Just In" },
  { src: pic2, alt: "Image 2", caption: "New Arrivals" },
  { src: pic3, alt: "Image 3", caption: "Workout" },
  { src: pic4, alt: "Image 4", caption: "Make your move" }
];

const GridComponent = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="grid-container">
          {gridItems.map((item) => (
            <div className="grid-item">
              <img src={item.src} alt={item.alt} />
              <div className="caption">{item.caption}</div>
              <Link
                to="/Products"
                className="button grid__link"
                type="button"
                draggable="false"
              >
                Shop
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridComponent;