const fetchById = async (id, setItem) => {
  
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setItem(data.drinks[0])
  };
  export default fetchById;