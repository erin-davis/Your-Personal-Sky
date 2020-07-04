import React from "react";

export default function DateInput(props){

  return (
    <div className="short-form">
      <h3>Do you want to see NASA's picture for a specific date?</h3>
      <form>
      {/*this is where they'll input the date*/}
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        min="1995-06-16"
      />
      </form>
      <button>Submit</button>
      <button>Random Date</button>
      <button>Today</button>
    </div>
  );
}
