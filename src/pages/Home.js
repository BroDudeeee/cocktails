import { useGlobalContext } from "../components/AppProvider";
import CocktailsList from "../components/CocktailsList";

const Home = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <>
      <div className="homeContainer">
        <div className="searchContainer">
          <h4>Search Your Favorite Cocktails</h4>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <CocktailsList />
    </>
  );
};

export default Home;
