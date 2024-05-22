// import "./header.css";

// import { Navigation } from "../dropdown/dropdown";

// export const Header = () => {
//   return (
//     <header className="header">
//       <div className="wrapper">
//         <div className="wrapper_header__upicons">
//           <div className="logo">
//             <a className="nav__link">
//               <img src="nav/jordan.svg" alt="logo" />
//             </a>
//             <a className="nav__link">
//               <img src="nav/converse.svg" alt="logo" />
//             </a>
//           </div>
//           <div>
//             <ul className="wrapper_header_upmenu">
//               <li>
//                 <a className="nav__link" href="/store">
//                   Find a Store
//                 </a>
//               </li>
//               <span>|</span>
//               <li>
//                 <a className="nav__link" href="/signin">
//                   Sign In
//                 </a>
//               </li>
//               <span>|</span>
//               <li>
//                 <a className="nav__link" href="/help">
//                   Help
//                 </a>
//               </li>
//               <span>|</span>
//               <li>
//                 <a className="nav__link" href="/join">
//                   Join Us
//                 </a>
//               </li>
//               <span>|</span>
//               <li>
//                 <a className="nav__link" href="/signin">
//                   Sign In
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <nav>
//           <div className="wrapper_header__downicons">
//             <a href="/">
//               <img src="nav/znak.jpg" alt="logo" />
//             </a>
//             <Navigation />
//             <div className="search__bar">
//               <input className="search_input" />
//               <a href="/basket">
//                 <img src="nav/basket.svg" alt="Basket" />
//               </a>
//               <a href="/likes">
//                 <img src="nav/likes.svg" alt="Likes" />
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { RootState } from '../../redux/store';
import { Navigation } from '../dropdown/dropdown';
import './header.css';

export const Header = () => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="wrapper_header__upicons">
          <div className="logo">
            <a className="nav__link">
              <img src="nav/jordan.svg" alt="logo" />
            </a>
            <a className="nav__link">
              <img src="nav/converse.svg" alt="logo" />
            </a>
          </div>
          <div>
            <ul className="wrapper_header_upmenu">
              <li>
                <a className="nav__link" href="/store">
                  Find a Store
                </a>
              </li>
              <span>|</span>
              <li>
                <a className="nav__link" href="/signin">
                  Sign In
                </a>
              </li>
              <span>|</span>
              <li>
                <a className="nav__link" href="/help">
                  Help
                </a>
              </li>
              <span>|</span>
              <li>
                <a className="nav__link" href="/join">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div className="wrapper_header__downicons">
            <a href="/">
              <img src="nav/znak.jpg" alt="logo" />
            </a>
            <Navigation />
            <div className="search__bar">
              <input className="search_input" />
              <a href="/cart" className="cart-link">
                <img src="nav/basket.svg" alt="Basket" className="cart-icon" />
                {cartItemsCount > 0 && (
                  <Badge pill bg="danger" className="cart-badge">
                    {cartItemsCount}
                  </Badge>
                )}
              </a>
              <a href="/likes">
                <img src="nav/likes.svg" alt="Likes" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;