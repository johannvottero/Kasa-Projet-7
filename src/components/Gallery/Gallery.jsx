import React, { useState } from "react";
import chevronRight from "../../assets/VectorChevronRight.png"; 
import chevronLeft from "../../assets/VectorChevronLeft.png";

const Gallery = (props) => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const chevronGoToPrevSlide = () => {
		let newIndex = (currentIndex - 1);
		if(newIndex < 0) newIndex = (props.pictures.length-1);
	  setCurrentIndex(newIndex);
	};

	const chevronGoToNextSlide = () => {
		let newIndex = (currentIndex + 1);
		if(newIndex >= props.pictures.length) newIndex = 0;
	  setCurrentIndex(newIndex);
	};

  return (
    <div className="Gallery">
    	<div className="Gallery-container">
				{ props.pictures && props.pictures.length > 0 && props.pictures.map((picture, index) =>
					<img key={`Gallery-picture-${index}`} id={`Gallery-picture-${index}`} className={(index === currentIndex) ? `Gallery-picture active` : `Gallery-picture`} src={picture} alt=""/>
				)}
				<div className="counter_img"> {currentIndex+1} / {props.pictures.length}</div>
    	</div>
		
      <div className={(props.pictures && props.pictures.length > 1) ? `Gallery-Chevron__left visible` : `Gallery-Chevron__left`} onClick={chevronGoToPrevSlide} ><img src={chevronLeft} alt="Left Chevron"></img></div>
      <div className={(props.pictures && props.pictures.length > 1) ? `Gallery-Chevron__right visible` : `Gallery-Chevron__right`} onClick={chevronGoToNextSlide} ><img src={chevronRight} alt="Right Chevron"></img></div>
    </div>
  );
};

export default Gallery;
