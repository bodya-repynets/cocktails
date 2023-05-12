 const fetchCategories = async (setCategories, setLoading) => {
    setLoading(true);
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await response.json();
    setCategories(data.drinks)
    setLoading(false)
  };
  export default fetchCategories;