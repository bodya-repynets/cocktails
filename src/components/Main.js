import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const fetchData = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );
  const data = await response.json();
};
fetchData();
const Main = () => {
    
  return (
    <Box component="main" sx={{ marginTop: "80px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box component={'section'} sx={{height:'300px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Box sx={{textAlign: 'center'}}>
        <Typography variant="h5" sx={{marginBottom: '2rem'}}>Search your favourite cocktail on our website</Typography>
        <TextField sx={{width: '100%'}} variant="outlined" label='Type here...'> </TextField>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
