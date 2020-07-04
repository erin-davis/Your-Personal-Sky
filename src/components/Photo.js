import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

export default function Photo(props){
  const [data, setData] = useState({});

  useEffect(()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=ikuPkhYl79MxL4UHkbuTnzYKzr36mqxNK7BRrMEQ")
    .then(res =>{
      console.log(res);
      setData(res.data)
    })
    .catch(err =>{
      console.log("this is the error: ", err);
    })
  }, [])

  return (
    <div className="photo-card">
      <PhotoCard
        key={Date.now()}
        imgUrl={data.url}
        title={data.title}
        desc={data.explanation}
        hdUrl={data.hdurl}
        date={data.date}
        copyright={data.copyright}
      />
    </div>
  );
}
