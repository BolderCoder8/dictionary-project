import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <div className="row">
        {props.data.photos.map((photo, index) => {
          return (
            <div className="col-4" key={index}>
              <img
                src={photo.src.small}
                alt={photo.alt}
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
