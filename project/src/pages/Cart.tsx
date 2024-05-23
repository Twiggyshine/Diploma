import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Item } from '../data/types';

// const Cart: React.FC = () => {
//   const items = useSelector((state: RootState) => state.cart.items);

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <ul>
//         {items.map((item: Item) => (
//           <li key={item.id}>
//             <img src={`/public/carousel/${item.image}`} alt={item.name} width="50" />
//             {item.name} - ${item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;

const Cart: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
  
    console.log('Cart items:', items);
  
    return (
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {items.map((item: Item) => (
            <li key={item.id}>
              <img src={`/public/carousel/${item.image}`} alt={item.name} width="50" />
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;