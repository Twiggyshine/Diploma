import "./banner.css";
import OutlinedButtons from "./button";

export const Banner = () => {
  return (
    <main className="main">
    <section className="main-page">
      <div className="wrapper">
        
          <div className="main-page__container">
            <div className="main-page__column">
              {/* <picture>
            <source
              srcSet="banner/banner.jpg"
              media="(min-width: 1000px)"
            ></source>
            <img src="banner/banner.jpg" alt="Абстрактное изображение"></img>
          </picture> */}
              <OutlinedButtons/>
                
              
            </div>

            <div className="main-page__from">
                <h1>Feel the unreal</h1>
              
            
            </div>
          </div>
      </div>
    </section>
    </main>
  );
};
export default Banner;

