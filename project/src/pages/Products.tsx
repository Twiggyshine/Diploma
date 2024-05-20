import NikeItems from "../components/searchbar/nike.items";

import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "../components/searchbar/searchbar";

const Products = () => {
  return (
    <div className="wrapper">
      <h1 className="products-title" style={{ textAlign: "center" }}>
        Products
      </h1>
      <Searchbar />
      <NikeItems filter="" />
    </div>
  );
};

export default Products;
