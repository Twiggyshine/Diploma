
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Item } from './types';
import Pagination from '../pagination/pagination';


const NikeItems: React.FC<{ filter?: string }> = ({ filter = '' }) => {
  const [nikeItems, setNikeItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
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

  const filteredItems = filter
    ? nikeItems.filter((item) => item.name.toLowerCase().startsWith(filter.toLowerCase()))
    : nikeItems;

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentItems.map((item) => (
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
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default NikeItems;