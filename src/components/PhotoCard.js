import React from "react";

const PhotoCard = (props) =>{

  return (
    <div className="photo-card">
      <div className="image">
        <img src={props.imgUrl} alt={`pic of space by ${props.copyright}`} />
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <h3>{props.copyright}</h3>
        <p>{props.date}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default PhotoCard;
