import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Title from "./components/title/title";
import GridComponent from "./components/GridComponent/brand-item";
import PicComponent from "./components/tranding/tranding";
import Carousel from "./components/carousel/carousel";
import SHOP_DATA  from "./data/shoes.data";



const App = () => {
  const nikeItems = SHOP_DATA.nike.items;

  const slides = nikeItems.map(item => (
    <div key={item.id} className="slide-content">
      <img src={`/public/carousel/${item.image}`} alt={item.name} className="carousel-img" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </div>
  ));

  return (
    <div className="container">
      <Header />
      <Banner />
      <Title title="MAKING ICONIC LOOK EASY" subtitle="WNBA star Haley Jones knows that Nike are always game" />
      <GridComponent />
      <Title title="WE SERVE ATHLETES" subtitle="If you have a body,you are an athlete" />
      <PicComponent />
      <Carousel slides={slides} />
    </div>
    
  );
}

export default App;
