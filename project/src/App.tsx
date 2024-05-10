import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Title from "./components/title/title";
import GridComponent from "./components/GridComponent/brand-item";
import PicComponent from "./components/tranding/tranding";




function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Title title="MAKING ICONIC LOOK EASY" subtitle="WNBA star Haley Jones knows that Nike are always game" />
      <GridComponent />
      <Title title="WE SERVE ATHLETES" subtitle="If you have a body,you are an athlete" />
      {/* <PicComponent /> */}
    </div>
    
  );
}

export default App;
