import "./tranding.css";

import img1 from "/public/tranding/1.jpg";
import img2 from "/public/tranding/2.jpg";
import img3 from "/public/tranding/3.jpg";

const PicComponent = () => {
  return (
    
      <div className="wrapper">
      <div className="pics-container">
        <div className="grid-pic">
          <img src={img1} alt="Image 1" className="pics" />
        </div>
        <div className="grid-pic">
          <img src={img2} alt="Image 2" className="pics" />
          <h1 className="tagline">THERE IS NO FINISH LINE</h1>
        </div>
        <div className="grid-pic">
          <img src={img3} alt="Image 3" className="pics" />
          
        </div>
        
      </div>
    </div>
    
  );
};

export default PicComponent;
