import React from "react";

const Flavors = () => {
  const cookies = [
    "Custom Frosted Sugar",
    "Chocolate Chip",
    "Oatmeal + anything",
    "Gingerbread",
    "Peanut Butter",
    "Snickerdoodle",
    "White Chocolate Macadamia",
    "and much more",
  ];
  const cakes = [
    "White/Yellow/Vanilla",
    "Chocolate",
    "Carrot",
    "Red Velvet",
    "Marble",
    "Strawberry",
    "Lemon",
    "Coconut",
    "Cheesecake",
    "and much more",
  ];
  return (
    <div className="skills">
      <div className="row mt-5 d-flex">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3 className="pro">Cookies</h3>
          <ul className="list-group list-group-flush">
            {/* using map to display frontend and backend profencies */}
            {cookies.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-5">
          <h3 className="pro">Cakes</h3>
          <ul className="list-group list-group-flush">
            {cakes.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flavors;
