
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Item } from './types';

const NikeItems: React.FC<{ filter?: string }> = ({ filter = '' }) => {
  const [nikeItems, setNikeItems] = useState<Item[]>([]);
  const dispatch = useDispatch();

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

  // поиск по названию

  const filteredItems = filter
    ? nikeItems.filter((item) => item.name.toLowerCase().startsWith(filter.toLowerCase()))
    : nikeItems;

  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {filteredItems.map((item) => (
        <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img
            variant="top"
            src={`/public/carousel/${item.image}`}
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