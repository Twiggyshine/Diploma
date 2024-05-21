import NikeItems from "../searchbar/nike.items";


import React, { useState } from "react";

const Searchbar: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className="search__bar">
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
      <NikeItems filter={filter} />
    </div>
  );
};

export default Searchbar;