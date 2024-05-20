export const Searchbar = () => {
    return (
              <div className="search_bar">
                <input type="text" className="search_input" />
                <a href="/basket">
                  <img src="nav/basket.svg" />
                </a>
                <a href="/likes">
                  <img src="nav/likes.svg" />
                </a>
              </div>
    );
  };
  
  export default Searchbar;