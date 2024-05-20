import SHOP_DATA from "../data/shoes.data";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "../components/searchbar/searchbar";

const Products = () => {
  const nikeItems = SHOP_DATA.nike.items;

  return (
    <div className="wrapper">
      <h1 className="products-title" style={{ textAlign: 'center' }}>Products</h1>
      <Searchbar />
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {nikeItems.map((item) => (
          <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img 
              variant="top" 
              src={`/public/carousel/${item.image}`} 
              alt={item.name} 
              className="product-img" 
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Price: ${item.price}
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;