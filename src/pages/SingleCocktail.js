import { useGlobalContext } from "../components/AppProvider";

const SingleCocktail = () => {
  const { newSingleCocktail } = useGlobalContext();
  return (
    <div className="singleCocktailContainer">
      <img src={newSingleCocktail.img} alt="" className="singleCocktailImg" />
      <h3>{newSingleCocktail.name}</h3>
      <p>{newSingleCocktail.desc}</p>
    </div>
  );
};

export default SingleCocktail;
