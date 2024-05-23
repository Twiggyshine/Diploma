import NikeItems from "../../data/nike.items";
import { Link } from "react-router-dom";

import "../header/header.css";

import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { RootState } from '../../redux/store';

const Searchbar: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="search__wrapper">
        <div className="search__bar" style={{ justifyContent: "right", padding: "15px 150px 30px 0"}}>
          <input
            type="text"
            className="search_input"
            value={filter}
            onChange={handleInputChange}
          />
          <Link to="/Cart" className="cart-link">
                <img src="nav/basket.svg" alt="Basket" className="cart-icon" />
                {cartItemsCount > 0 && (
                  <Badge pill bg="danger" className="cart-badge">
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
          <a href="/likes">
            <img src="nav/likes.svg" alt="Likes" />
          </a>
        </div>
        <NikeItems filter={filter} />
      </div>
    </div>
  );
};

export default Searchbar;
