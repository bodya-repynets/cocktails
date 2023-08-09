import { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import fetchCategories from "./utils/fetchCategories";
import fetchByName from "./utils/fetchByName";
import fetchByCategory from "./utils/fetchByCategory";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = () => {
  const [name, setName] = useState('l')
  const [cocktails, setCocktails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("none");
  const [currentPage, setCurrentPage] = useState(1)

  const handleFetch = () => {
    for (let i = 0; i < 12; i++) {}
  };

  useEffect(() => {
    setCurrentPage(1)
    if (categories.length < 1) {
      fetchCategories(setCategories, setLoading);
    }
    setName("");
    if (category !== "none") {
      fetchByCategory(setLoading, category, setCocktails);
    } else {
      handleFetch();
    }
  }, [category]);
  useEffect(() => {
    setCurrentPage(1)
    setCategory("none");
    if (name !== "") {
      fetchByName(setCocktails, setLoading, name);
    }
  }, [name]);
  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        categories,
        loading,
        cocktails,
        showFilter,
        setShowFilter,
        category,
        setCategory,
        currentPage,
        setCurrentPage
      }}
    >
      <App />
    </GlobalContext.Provider>
  );
};

export default AppContext;
