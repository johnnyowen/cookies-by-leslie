import React from "react";
import "./style.css";

const Footer = () => {
  const icons = [
    {
      name: "fa-brands fa-instagram",
      link: "https://www.instagram.com/cookiesbyleslie_/",
    },
    {
      name: "fa-brands fa-tiktok",
      link: "https://www.tiktok.com/@cookiesbyleslie",
    },
    // {
    //   name: "fa-brands fa-facebook",
    //   link: "https://www.facebook.com/profile.php?id=100088937410422",
    // },
  ];
  return (
    <footer className="d-flex justify-content-center align-items-center">
     {/* map to apply all the links from icons array the links at the bottom */}
     {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noreferrer"
          className="mx-3"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
