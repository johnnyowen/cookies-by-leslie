import React from "react";
import rwb from "../assets/main/about.png";

const Home = () => {
  return (
    <>
      <div>
        {/* image styled with bootstrap */}
        <img
          src={rwb}
          alt="profile"
          className="img-fluid rounded-circle me-3"
          width="200"
        />
        <p>
          Specializing in custom sugar cookies decorated with royal icing and
          fondant. Everything is made from scratch and with love! (except fondant, gumpaste, and sprinkles😜) 
        </p>
      </div>
      <p>
        I can make more than just sugar cookies, just ask for what you'd like. I take all dietary considerations into account, and love to please with one of a kind displays! Use the form on the contact page to get in touch with me.
      </p>
    </>
  );
};

export default Home;
