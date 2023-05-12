import { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import { useTheme } from "@emotion/react";
import fetchCategories from "./utils/fetchCategories";
import fetchByName from "./utils/fetchByName";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = () => {
  const [name, setName] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading]=useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [category, setCategory]=useState('all')
 
  useEffect(()=>{
    fetchByName(setCocktails,setLoading, name)
  }, [name])
  useEffect(() => {
    fetchCategories(setCategories, setLoading);
  }, []);
  return (
    <GlobalContext.Provider value={{ name, setName, categories, loading, cocktails, showFilter, setShowFilter, category }}>
      <App />
    </GlobalContext.Provider>
  );
};

export default AppContext;
