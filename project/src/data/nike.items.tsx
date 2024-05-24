import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Item } from './types';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const NikeItems: React.FC<{ filter?: string }> = ({ filter = "" }) => {
  const dispatch = useDispatch();
  const [nikeItems, setNikeItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Twiggyshine/Diploma/nike')
      .then((response) => response.json())
      .then((data) => {
        setNikeItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredItems = Array.isArray(nikeItems) ? nikeItems.filter((item) =>
    item.name.toLowerCase().startsWith(filter.toLowerCase())
  ) : [];

  return (
    <div className="product-list" style={{ display: "flex", flexWrap: "wrap" }}>
      {filteredItems.map((item) => (
        <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={`./public/carousel/${item.image}`} 
            alt={item.name}
            className="product-img"
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Button variant="dark" onClick={() => dispatch(addItem(item))}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NikeItems;