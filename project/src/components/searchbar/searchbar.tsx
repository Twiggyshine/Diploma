import NikeItems from "../searchbar/nike.items";

import React, { useState } from "react";

const Searchbar = () => {
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
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
        <img src="nav/basket.svg" />
      </a>
      <a href="/likes">
        <img src="nav/likes.svg" />
      </a>
      <NikeItems filter={filter} />
    </div>
  );
};

export default Searchbar;
