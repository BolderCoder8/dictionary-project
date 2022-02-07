import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <div className="row photos">
        {props.data.photos.map((photo, index) => {
          return (
            <div className="col-2" key={index}>
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
