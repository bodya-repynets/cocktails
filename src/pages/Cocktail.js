import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchById from "../utils/fetchById";
import { useGlobalContext } from "../context";
import { Box, Stack, Typography } from "@mui/material";

const Cocktail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({})
  useEffect(()=>{
    fetchById(id, setItem)
  },[])
  const strIngr=[];

  for(let key in item){
    if(key.includes('strIngredient')&&item[key]!==null){
    strIngr.push(item[key])
    }
  }

  if(item){
  return(
   <Stack alignItems={'center'} direction={'row'} margin={'50px auto'}>
    <Box sx={{width: '50%'}}>
    <img className="img" src={item.strDrinkThumb} alt="" />
    </Box>
    <Stack width={'50%'} textAlign={'center'} sx={{color: 'grey', padding: '0 50px', }}>
    <Typography gutterBottom color={'#e57373'} variant="h3">{item.strDrink}</Typography>
    <Typography>{item.strCategory}</Typography>
    <Typography>{item.strAlcoholic}</Typography>
    <Typography gutterBottom marginTop={'40px'} color={'#9e9d24'} variant="h4">Ingredients:</Typography>
    {strIngr.map(ing=>{
      return <Typography key={ing}>{ing}</Typography>
    })}
    <Typography gutterBottom marginTop={'40px'} color={'#689f38'} variant="h4">Instructions</Typography>
    <Typography>{item.strInstructions}</Typography>
    </Stack>
   </Stack>
  ) 
  }else{
    <h1>loading</h1>
  }
};

export default Cocktail;
