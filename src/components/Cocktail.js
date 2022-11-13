import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppProvider";

const Cocktail = ({ name, img, id }) => {
  const { getCocktailID } = useGlobalContext();
  return (
    <div className="singleCocktail" onClick={() => getCocktailID(id)}>
      <Link to={`/cocktail/${id}`}>
        <img src={img} alt="cocktail" className="cocktailImg" />
        <h3 className="cocktailName">{name}</h3>
      </Link>
    </div>
  );
};

export default Cocktail;
