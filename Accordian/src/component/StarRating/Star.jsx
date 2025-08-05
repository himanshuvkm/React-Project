import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

const Star = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseMove(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="star-rating">
      <div className="heading">
        {" "}
        <h1>Star Rating</h1>
      </div>
      <div className="content">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              size={40}
              color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer", transition: "color 200ms" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Star;
