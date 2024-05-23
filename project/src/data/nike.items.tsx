import SHOP_DATA from "./shoes.data";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Item } from './types';

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';


const NikeItems: React.FC<{ filter?: string }> = ({ filter = "" }) => {
  const dispatch = useDispatch();
  let nikeItems: Item[] = SHOP_DATA.nike.items;

  
  if (filter !== "") {
      
    nikeItems = nikeItems.filter((item) => item.name.toLowerCase().startsWith(filter.toLowerCase()));
  }

  return (
    <div className="product-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {nikeItems.map((item) => (
        <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={`/public/carousel/${item.image}`}
            alt={item.name}
            className="product-img"
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Button variant="primary" onClick={() => dispatch(addItem(item))}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NikeItems;


