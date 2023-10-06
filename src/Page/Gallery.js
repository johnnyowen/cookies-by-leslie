import React from "react";
import { gallery } from "../gallery";
import Cookie from "../components/Cookie";

const Gallery = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {gallery.map((project, i) => (
        <Cookie project={project} key={i} className="photo" />
      ))}
    </div>
  );
};

export default Gallery;
