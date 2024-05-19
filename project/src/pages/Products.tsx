
import { useParams } from 'react-router-dom';

const Products = () => {
  const { productId } = useParams();
  return (
    <div className="product-detail">
      <h1>Product Detail</h1>
      <p>Details for product with ID: {productId}</p>
    </div>
  );
}

export default Products;