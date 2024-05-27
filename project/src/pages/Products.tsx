
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "../components/searchbar/searchbar";
import Alert from '../components/alert/alert';
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";



const Products = () => {
  const alertVisible = useSelector((state: RootState) => state.cart.alertVisible);
  return (
    <div className="wrapper">
      <h1 className="products-title" style={{ textAlign: "center" }}>
        Products
      </h1>
      {alertVisible && <Alert />}
      <Searchbar />
    </div>
  );
};

export default Products;
