import { useState } from "react";
import chevron from "../../assets/Vector.png";


const DropdownLarge = (props) => {

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
				<div className={open ? `.collapse_container__chevron unfold ` : `.collapse_container__chevron fold`}><img className="chevron" src={chevron} alt="chevron"/></div>
				</div>
			</div>
			<div className={open ? `collapse_container__content open ` : `collapse_container__content closed`} >{props.content}</div>
		</div>
	);
}

export default DropdownLarge;