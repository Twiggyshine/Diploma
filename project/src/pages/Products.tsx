
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "../components/searchbar/searchbar";



const Products = () => {
  return (
    <div className="wrapper">
      <h1 className="products-title" style={{ textAlign: "center" }}>
        Products
      </h1>
      <Searchbar />
    </div>
  );
};

export default Products;
