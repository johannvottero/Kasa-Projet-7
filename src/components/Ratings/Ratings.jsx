import React from "react";
import redstar from "../../assets/Vectorredstar.png";
import greystar from "../../assets/Vectorgreystar.png";

const Rating = ({ rating }) => {
    const ratingStars = [1, 2, 3, 4, 5];
  
    return (
      <div className="rating">
        {/* Loop to display star by rating */}
        {ratingStars.map((ratingStar) =>
          rating >= ratingStar ? (
            <img
              key={ratingStar.toString()}
              src={redstar}
              alt="etoile rouge"
            />
          ) : (
            <img
              key={ratingStar.toString()}
              src={greystar}
              alt="etoile grise"
            />
          )
        )}
      </div>
    );
  };
  
  export default Rating;