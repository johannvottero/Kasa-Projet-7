import React, { useState } from "react";
import chevronRight from "../../assets/VectorChevronRight.png"; 
import chevronLeft from "../../assets/VectorChevronLeft.png";

 const pictures = [];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ChevronGoToPrevSlide = () => {
    const index = (currentIndex - 1 + pictures.length);
    setCurrentIndex(index);
  };

  const ChevronGoToNextSlide = () => {
    const index = (currentIndex + 1 + pictures.length);
    setCurrentIndex(index);
  };

  return (
    <div className="Gallery">
      <div className="Gallery-Chevron__left" onClick={ChevronGoToPrevSlide}><img src={chevronLeft} alt="Left Chevron"></img></div>
      <img src={pictures[currentIndex]} alt="" />
      <button className="Gallery-Chevron__right" onClick={ChevronGoToNextSlide}><img src={chevronRight} alt="Right Chevron"></img></button>
    </div>
  );
};

export default Gallery;



/* 
export default function Gallery () {
	return (
		<figure className="Gallery">
			<img className ="Gallery__img" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg" alt="côte surplombée de forêts"></img>
		</figure>
	);
}
 */