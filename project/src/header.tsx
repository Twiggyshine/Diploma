import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper_header">
        <div className="wrapper_header__upicons">
          <div className="logo">
            <a className="btn_upmenu">
              <img src="jordan.svg" />
            </a>
            <a className="btn_upmenu">
              <img src="converse.svg" />
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
                <img src="logo.svg" />
              </a>
              <div className="wrapper_header_deskmenu">
                <ul className="desk_menu">
                  <li><a>New & Featured</a></li>
                  <li><a>Men</a></li>
                  <li><a>Women</a></li>
                  <li><a>Kids</a></li>
                  <li><a>Sale</a></li>
                  <li><a>Jordan</a></li>
                </ul>
              </div>
              <div className="search_bar">
              <input type="text" className="search_input" />
              <a href="/basket">
                <img src="basket.svg" />
              </a>
              <a href="/likes">
                <img src="likes.svg" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
