import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";

const Header = ({ siteTitle, siteNavigation }) => (
  <header className="header">
    <div className="header__wrapper">
      <h1 className="header-title">
        <Link
          to="/"
          className="header-link"
          activeClassName="home-link--active"
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="header__menu">
        {siteNavigation.map(navItem => (
          <li className="header__menu__item" key={navItem.link}>
            <Link
              className="header__menu__item__link"
              activeClassName="header__menu__item__link--active"
              to={navItem.link}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
