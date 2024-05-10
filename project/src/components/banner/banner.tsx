import "./banner.css";
import CustomButton from "./button";

export const Banner = () => {
  return (
    <main className="main">
      <section className="main-page">
        <div className="wrapper">
          <div className="main-page__container">
            <div className="main-page__column">
              <p className="main-page__sale">Big sale up to 20% off</p>
              <h2 className="main-page__title">NIKE RUN SHOES</h2>
              <p className="main-page__text">THIS BRAND HAS MANY VARIANTS</p>
              <CustomButton />
            </div>

            <div className="main-page__from">
              {/* <h1>Feel the unreal</h1> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Banner;
