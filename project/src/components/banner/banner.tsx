import "./banner.css";


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
              <button className="main-page__button">Shop Now</button>
            </div>

            <div className="main-page__from">
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Banner;
