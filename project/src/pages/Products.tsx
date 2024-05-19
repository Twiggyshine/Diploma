import SHOP_DATA from "../data/shoes.data";

// const Products = () => {
//   const nikeItems = SHOP_DATA.nike.items;

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="product-list">
//         {/* Мапим данные о товарах для отображения */}
//         {nikeItems.map((item) => (
//           <div key={item.id} className="product">
//             <img
//               src={`/public/carousel/${item.image}`}
//               alt={item.name}
//               className="product-img"
//             />
//             <h2>{item.name}</h2>
//             <p>Price: ${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const nikeItems = SHOP_DATA.nike.items;

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Мапим данные о товарах для отображения */}
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