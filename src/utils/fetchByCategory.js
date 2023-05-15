const fetchByCategory = async (setLoading, category, setCocktails) => {
  setLoading(true);
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await response.json();
  if (data.drinks) {
    setCocktails(data.drinks);
  } else {
    setCocktails([]);
  }
  setLoading(false);
};
export default fetchByCategory;
