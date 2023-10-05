import React from "react";
import rwb from "../assets/main/about.png";

const Home = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        {/* image styled with bootstrap */}
        <img
          src={rwb}
          alt="profile"
          className="img-fluid rounded-circle me-3"
          width="200"
        />
        <p>
          Specializing in custom sugar cookies decorated with royal icing and
          fondant.
        </p>
      </div>
      <p>
        I can make more than just sugar cookies, just ask for what you'd like!
      </p>
    </>
  );
};

export default Home;
