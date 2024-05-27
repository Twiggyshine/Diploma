import "./dropdown.css"
import { Link } from "react-router-dom"


export const Navigation = () => {
    return ( 
<div className="wrapper_header_deskmenu">
<div className="navigation">
  <a href="#" className="link">New & Featured</a>
  <ul className="navigation-content">
    <li><Link to="/products">Limited Time</Link></li>
    <li><Link to="/products">Sale: 50% Off</Link></li>
    <li><Link to="/products">Accessories</Link></li>
    <li><Link to="/products">Trending</Link></li>
  </ul>
</div>
<div className="navigation">
  <a href="#" className="link">Men</a>
  <ul className="navigation-content">
    <li><Link to="/products">Shoes</Link></li>
    <li><Link to="/products">Shop by Sport</Link></li>
    <li><Link to="/products">Collections</Link></li>
  </ul>
</div>
<div className="navigation">
  <a href="#" className="link">Kids</a>
  <ul className="navigation-content">
    <li><Link to="/products">Shoes</Link></li>
    <li><Link to="/products">Shop by Sport</Link></li>
    <li><Link to="/products">Collections</Link></li>
  </ul>
</div>
<div className="navigation">
  <a href="#" className="link">Woman</a>
  <ul className="navigation-content">
    <li><Link to="/products">Shoes</Link></li>
    <li><Link to="/products">Shop by Sport</Link></li>
    <li><Link to="/products">Collections</Link></li>
  </ul>
</div>
<div className="navigation">
  <a href="#" className="link">Sale</a>
  <ul className="navigation-content">
    <li><Link to="/products">Shoes</Link></li>
    <li><Link to="/products">Shop by Sport</Link></li>
    <li><Link to="/products">Collections</Link></li>
  </ul>
</div>
<div className="navigation">
  <a href="#" className="link">Jordan</a>
  <ul className="navigation-content">
    <li><Link to="/products">Basketball</Link></li>
    <li><Link to="/products">Running</Link></li>
    <li><Link to="/products">Collections</Link></li>
    <li><Link to="/products">Gym & training</Link></li>
  </ul>
</div>
</div>

);
}
export default Navigation