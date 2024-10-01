import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = ({ extraClass }) => {
  const onClick = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("active");
    e.preventDefault();
  };
  
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <header className={extraClass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2">
            <div className="header-style">
              <Link href="/">
              <img
      src="https://olympics.com/_pr/topic-assets/paris-2024/emblem-paralympics-colored.svg"  
      alt="Logo"
      width={163}
      height={38}
    />
              </Link>
              <div className="extras bag">
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#highlights">Highlights</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#champions">Champions</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#impact">Impact</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#voices">Voices</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#ceremonies">Ceremonies</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#diversity">Diversity</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="extras bag">
             
              <Link href="https://olympics.com/en/olympic-channel" className="button button-2">
                Watch
              </Link>
            </div>
          </div>
          <div className="menu-wrap">
            <div className="menu-inner ps ps--active-x ps--active-y">
              <span className="menu-cls-btn" onClick={(e) => onClick(e)}>
                <i className="cls-leftright" />
                <i className="cls-rightleft" />
              </span>
              < sidebar />
            </div>
          </div>
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? "open" : ""}`}
            id="mobile-nav"
            style={{ display: "block" }}
          >
            <div className="res-log">
              <Link href="/">
              <img
      src="https://olympics.com/_pr/topic-assets/paris-2024/emblem-paralympics-colored.svg"  
      alt="Logo"
      width={163}
      height={38}
    />
              </Link>
            </div>
            <MobileMenu />
            <a  id="res-cross" onClick={() => setMobileToggle(false)} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
