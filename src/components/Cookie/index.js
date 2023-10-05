import React from "react";
import { formatProjectTitle } from "../../utils";
import "./style.css";

const Cookie = ({ project }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={require(`../../assets/gallery/${project.name}.jpg`)}
          className="card-img"
          alt={formatProjectTitle(project.name)}
        />
        <div className="card-img-overlay">
          <h3 className="card-title">{formatProjectTitle(project.name)}</h3>
          {/* <p className="card-text">
            description?
          </p> */}
          {/* <p className="card-text">date?</p> */}
        </div>
      </div>
    </div>
  );
};

export default Cookie;
