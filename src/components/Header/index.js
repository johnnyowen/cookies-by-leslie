import React from "react";
import Nav from "../Nav";
import headerImg from "../../assets/gallery/floral-designs-again.jpg";
import "./style.css";

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header>
      <img src={headerImg} alt="bingo ball cookies" />
      <div className="headerBox">
        <h1 className="text-center">Cookies by Leslie</h1>
        {/* Nav component with the "links" to the other components of the page */}
        <Nav className="container"
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
