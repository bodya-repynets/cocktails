const fetchRandom = async (setRandom) => {
  
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const data = await response.json();
    setRandom(data.drinks[0])
  };
  export default fetchRandom;
  