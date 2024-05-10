import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Title from "./components/title/title";
import GridComponent from "./components/GridComponent/brand-item";




function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Title title="MAKING ICONIC LOOK EASY" subtitle="WNBA star Haley Jones knows that Nike are always game" />
      <GridComponent />
    </div>
    
  );
}

export default App;
