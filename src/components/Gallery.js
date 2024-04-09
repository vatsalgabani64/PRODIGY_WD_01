import React from "react";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";

function Gallery() {
  return (
    <div className="content">
      <h2>Gallery</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={img1} alt="Image 1" className="gallery-img" />
        </div>
        <div className="grid-item">
          <img src={img2} alt="Image 2" className="gallery-img" />
        </div>
        <div className="grid-item">
          <img src={img3} alt="Image 3" className="gallery-img" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
