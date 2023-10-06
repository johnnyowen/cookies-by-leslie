import React from "react";
import "./style.css";

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav>
      {/* maps the links and gives them proper functions, coming from App.js pages array */}
      {pages.map((page) => (
        <li
          key={page}
          className={`${page === currentPage && "active"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
    </nav>
  );
};

export default Nav;
