import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Title from "./components/title/title";
import GridComponent from "./components/GridComponent/brand-item";
import PicComponent from "./components/tranding/tranding";
import Carousel from "./components/carousel/carousel";
import  SHOP_DATA  from "./data/shoes.data";


// const App = () => {
//   const slides = [
//     <img src="/public/carousel/nike-0.jpg" alt="Slide 1" className="carousel-img" />,
//     <img src="/public/carousel/nike-1.jpg" alt="Slide 2" className="carousel-img"/>,
//     <img src="/public/carousel/nike-2.jpg" alt="Slide 3" className="carousel-img" />,
//     <img src="/public/carousel/nike-3.jpeg" alt="Slide 4" className="carousel-img" />,
//     <img src="/public/carousel/nike-4.jpg" alt="Slide 5" className="carousel-img" />,
//     <img src="/public/carousel/nike-5.jpg" alt="Slide 6" className="carousel-img" />
//   ];


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
