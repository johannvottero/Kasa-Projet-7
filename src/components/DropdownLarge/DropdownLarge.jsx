import { useState } from "react";
import chevron from "../../assets/Vector.png";


const DropdownLarge = (props) => {

	const [open, setOpen] = useState(props.open ?? false)

	const toggleOpen = () => {
		//setting collapse state to closed
		if(open === true) {
			setOpen(false);
			let DropDownOpen = document.querySelector(".collapse_container__content");
			DropDownOpen.setAttribute('class','closed');
			let DropDownChevron = document.querySelector(".collapse_container__chevron");
			DropDownChevron.classList.add("fold")

		}
		//setting collapse state to open
		else {
			setOpen(true);
			let DropDownOpen = document.querySelector(".collapse_container__content");
			DropDownOpen.setAttribute('class','open');
			let DropDownChevron = document.querySelector(".collapse_container__chevron");
			DropDownChevron.classList.replace("fold", "unfold")
		}
	};

	return (

		<div className="collapse-container">
			<div className="collapse-container-heading" onClick={toggleOpen}>
				<div className="collapse_container__title">
					<span>{props.title}</span>
				</div>
				<div className="collapse_container__chevron">
					<img className="chevron" src={chevron} alt="chevron"/>
				</div>
			</div>
			<div className={open ? `collapse_container__content` : `collapse_container__content closed`}>{props.content}</div>
		</div>
	);
}

export default DropdownLarge;