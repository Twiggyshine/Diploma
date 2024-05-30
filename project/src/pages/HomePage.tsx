import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Title from "../components/title/title";
import GridComponent from "../components/GridComponent/brand-item";
import PicComponent from "../components/tranding/tranding";
import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";
import { useEffect, useState } from 'react';
import { Item } from '../data/types';



const HomePage = () => {
  const [nikeItems, setNikeItems] = useState<Item[]>([]);
 
  const slides = nikeItems.map(item => (
    <div key={item.id} className="slide-content">
      <img src={`/public/carousel/${item.image}`} alt={item.name} className="carousel-img" />
      <h3>{item.name}</h3>
    </div>
  ));


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/Twiggyshine/Diploma/nike');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNikeItems(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="custom__container">
      <Header />
      <Banner />
      <Title title="MAKING ICONIC LOOK EASY" subtitle="WNBA star Haley Jones knows that Nike are always game" />
      <GridComponent />
      <Title title="WE SERVE ATHLETES" subtitle="If you have a body,you are an athlete" />
      <PicComponent />
      <Carousel slides={slides} />
      <Footer />
    </div>
    
  );
}

export default HomePage;
