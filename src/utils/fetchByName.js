const fetchByName = async (setCocktails, setLoading, name) => {
  setLoading(true);

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  if(data.drinks){
  setCocktails(data.drinks);
  }else{
    setCocktails([])
  }
  setLoading(false);
};
export default fetchByName;
