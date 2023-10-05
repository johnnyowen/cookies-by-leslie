import React from "react";
import Nav from "../Nav";
import headerImg from "../../assets/gallery/bingo-balls.jpg";
import "./style.css";

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header>
      <img src={headerImg} alt="bingo ball cookies" />
      <div>
        <h1 className="text-center">Cookies by Leslie</h1>
        {/* Nav component with the "links" to the other components of the page */}
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
