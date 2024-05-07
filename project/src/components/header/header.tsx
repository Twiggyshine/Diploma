import "./header.css";

import { Navigation } from "../dropdown/dropdown";

const Header = () => {
  return (
    <header>
      <div className="wrapper_header">
        <div className="wrapper_header__upicons">
          <div className="logo">
            <a className="btn_upmenu">
              <img src="nav/jordan.svg" />
            </a>
            <a className="btn_upmenu">
              <img src="nav/converse.svg" />
            </a>
          </div>
          <div>
            <div className="wrapper_header_upmenu">
              <div>
                <a className="btn_upmenu">
                  <span>Find a Store</span>
                </a>
                <span>|</span>
              </div>
              <div>
                <a className="btn_upmenu">
                  <span>Sign In</span>
                </a>
              </div>
              <div>
                <a className="btn_upmenu">
                  <span>Help</span>
                </a>
                <span>|</span>
              </div>
              <div>
                <a className="btn_upmenu">
                  <span>Join Us</span>
                </a>
              </div>
              <span>|</span>
              <div>
                <a className="btn_upmenu">
                  <span>Sign In</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="wrapper_header__downicons">
            <a href="/">
              <img src="nav/logo.svg" />
            </a>
            <Navigation />
            <div className="search_bar">
              <input type="text" className="search_input" />
              <a href="/basket">
                <img src="nav/basket.svg" />
              </a>
              <a href="/likes">
                <img src="nav/likes.svg" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="wrapper_header_deskmenu">
              <div className="navigation">
                <a href="#" className="link">New & Featured</a>
                <ul className="navigation-content">
                  <li><a href="#">Limited Time</a></li>
                  <li><a href="#">Sale: Up to 50% Off</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Trending</a></li>
                </ul>
              </div>
              <div className="navigation">
                <a href="#">Men</a>
                <ul className="navigation-content">
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Shop by Sport</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </div>
              <div className="navigation">
                <a href="#">Kids</a>
                <ul className="navigation-content">
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Shop by Sport</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </div>
              <div className="navigation">
                <a href="#">Woman</a>
                <ul className="navigation-content">
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Shop by Sport</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </div>
              <div className="navigation">
                <a href="#">Sale</a>
                <ul className="navigation-content">
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Shop by Sport</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </div>
              <div className="navigation">
                <a href="#">Jordan</a>
                <ul className="navigation-content">
                  <li><a href="#">Basketball</a></li>
                  <li><a href="#">Running</a></li>
                  <li><a href="#">Collections</a></li>
                  <li><a href="#">Gym</a></li>
                </ul>
              </div>
            </div> */
}
