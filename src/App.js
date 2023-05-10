import React from 'react'
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const App = () => {
  const fetchData=async()=>{
  const response =await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  const data=await response.json();
  console.log(data)

  }
  fetchData();
  return (
    <div>

    </div>
  )
}

export default App