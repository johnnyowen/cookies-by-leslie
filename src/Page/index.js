import React from "react";
import Home from "./Home";
import Flavors from "./Flavors";
import Gallery from "./Gallery";
import Contact from "./Contact";
import "./style.css";

const Page = ({ currentPage }) => {
  const renderPage = (page) => {
    switch (page) {
      case "Gallery":
        return <Gallery />;
      case "Flavors":
        return <Flavors />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <section className="container py-3">
      <h2 className="mb-3">{currentPage}</h2>
      {renderPage(currentPage)}
    </section>
  );
};

export default Page;
