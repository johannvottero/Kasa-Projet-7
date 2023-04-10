import { useState } from "react";
import chevron from "../../assets/Vector.png";


const DropdownLarge = (props) => {
	// initializing state 
	const [open, setOpen] = useState(props.open ?? false)

	const toggleOpen = () => {
		//setting collapse state to closed
		if(open === true) {
			setOpen(false);
		}
		//setting collapse state to open
		else {
			setOpen(true);
		}
	};

	return (

		<div className="collapse-container">
			<div className="collapse-container-heading" onClick={toggleOpen}>
				<div className="collapse_container__title">
					<span>{props.title}</span>
				</div>
				<div className="collapse_container__chevron">
					{/* condition on collapse state : open / closed for the chevron animation*/}
				<div className={open ? `.collapse_container__chevron unfold ` : `.collapse_container__chevron fold`}><img className="chevron" src={chevron} alt="chevron"/></div>
				</div>
			</div>
			{/* condition on collapse state : open / closed for the display instruction*/}
			<div className={open ? `collapse_container__content open ` : `collapse_container__content closed`} >{props.content}</div>
		</div>
	);
}

export default DropdownLarge;