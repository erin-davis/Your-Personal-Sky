import React from 'react';
import './App.css';
import PhotoCard from "./components/PhotoCard.js";
import DateInput from "./components/DateInput.js";
import Photo from "./components/Photo.js";


function App() {
  return (
    <div className="App">
      <h1>Your Personal Sky App</h1>
      <PhotoCard />
      <Photo />
      <DateInput />
    </div>
  );
}

export default App;
