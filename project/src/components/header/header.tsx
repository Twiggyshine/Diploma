import "./header.css";

import { Navigation } from "../dropdown/dropdown";
import Searchbar from "../searchbar/searchbar";


export const Header = () => {
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
              <span>|</span>
              <li>
                <a className="nav__link" href="/signin">
                  Sign In
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
            <Searchbar />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;