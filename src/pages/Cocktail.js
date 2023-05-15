import React from 'react'
import { useParams } from 'react-router-dom'

const Cocktail = () => {
    const {id}=useParams();
    console.log(id)
  return (
    <div>Cocktail {id}</div>
  )
}

export default Cocktail