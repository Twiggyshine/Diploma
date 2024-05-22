import NikeItems from "../../data/nike.items";

import "../header/header.css";

import React, { useState } from "react";

const Searchbar: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

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
          <a href="/basket">
            <img src="nav/basket.svg" alt="Basket" />
          </a>
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
