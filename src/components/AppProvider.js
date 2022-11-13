import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState(data);
  const [newSingleCocktail, setNewSingleCocktail] = useState();

  useEffect(() => {
    setIsLoading(true);
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCocktails(cocktails);
    setCocktails(newData);
    setIsLoading(false);
  }, [searchTerm]);

  const getCocktailID = (id) => {
    const newCocktail = cocktails.find((cock) => cock.id === id);
    setNewSingleCocktail(newCocktail);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        cocktails,
        searchTerm,
        setSearchTerm,
        getCocktailID,
        newSingleCocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
