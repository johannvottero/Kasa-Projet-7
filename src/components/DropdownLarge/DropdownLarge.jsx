
import chevron from "../../assets/Vector.png";

const DropdownLarge = () => {

    return (
        <div className="collapse-container">
            <div className="collapse-container-heading">
                <div className="collapse_container__title"> <span>Respect</span></div>
                <div className="collapse_container__chevron"> <img src={chevron} alt="chevron collapse"></img></div>
            </div>
                <div className="collapse_container__content"> test</div>
        </div>
	);
}


export default DropdownLarge;