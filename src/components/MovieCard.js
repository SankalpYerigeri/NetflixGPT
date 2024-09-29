import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({imagePath}) =>
{
    console.log(imagePath)
    return (
        <div className="w-36 md:w-48 pr-4">
            <img src={IMG_CDN_URL + imagePath}/>
        </div>
    )
}

export default MovieCard;