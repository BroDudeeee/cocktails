import { useGlobalContext } from "./AppProvider";
import Cocktail from "./Cocktail";

const CocktailsList = () => {
  const { cocktails, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="aboutContainer">
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </h2>
      </div>
    );
  }

  if (cocktails.length < 1 && !isLoading) {
    return (
      <div className="aboutContainer">
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          No Matching Results.
        </h2>
      </div>
    );
  }

  return (
    <div className="cocktailsContainer">
      {cocktails.map((item) => (
        <div key={item.id}>
          <Cocktail {...item} />
        </div>
      ))}
    </div>
  );
};

export default CocktailsList;
