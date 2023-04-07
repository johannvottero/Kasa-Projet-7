import greystar from "../../assets/Vectorgreystar.png";
import redstar from "../../assets/Vectorredstar.png";


const Ratings = ({Rating}) => {
    const Rating = [1, 2, 3, 4, 5];

    switch (Rating) {
        case (Rating === 1):
        <div>
            {redstar}{greystar}{greystar}{greystar}{greystar}
        </div>
          break;
        case (Rating === 2):
        <div>
            {redstar}{redstar}{greystar}{greystar}{greystar}
        </div>
          break;
        case (Rating === 3):
            <div>
            {redstar}{redstar}{redstar}{greystar}{greystar}
            </div>
          break;
        case (Rating === 4):
            <div>
                {redstar}{redstar}{redstar}{redstar}{greystar}
            </div>
            break;
            case (Rating === 5):
            <div>
                {redstar}{redstar}{redstar}{redstar}{redstar}
            </div>
            break;
            default:
                console.log(Rating)

    return (
            <div>{Ratings}</div>
        )
    }
}
    export default Ratings;

