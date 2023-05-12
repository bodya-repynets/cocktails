import React from "react";
import { Box, TextField, Typography, Stack, Button, Drawer } from "@mui/material";
import { useGlobalContext } from "../context";
import Cocktails from "./Cocktails";
import Categories from "./Categories";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';


const Main = () => {
    const {categories, loading, name, setName, cocktails, showFilter, setShowFilter, category} =useGlobalContext();

  return (
    <Box component="main" sx={{ marginTop: "80px", display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Box component={'section'} sx={{height:'250px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Box sx={{textAlign: 'center',}}>
        <Typography variant="h5" sx={{marginBottom: '20px', backgroundColor: 'primary.main', padding: '20px', color: 'white'}}>Search your favourite cocktail on our website</Typography>
        <TextField autoFocus={true} sx={{width: '100%', textAlign: 'center', backgroundColor: 'white'}} placeholder={'Margarita'} onChange={(e)=>setName(e.currentTarget.value)} variant="outlined"> </TextField>
        </Box>
      </Box>
        <Stack direction={'row'} marginBottom={'40px'} gap={'20px'}>
            <Button onClick={()=>setShowFilter(true)} variant="contained">
                <Typography>Filter category</Typography>
                <FilterAltIcon className="filter"/>
                
            </Button>
            <Button disabled={category==='all'} variant="contained">
                <Typography>Cancel filter</Typography>
                <FilterAltOffIcon className="filter"/>
                <Typography color={'black'} sx={{fontWeight: 700}}>{category}</Typography>
            </Button>
        </Stack>
      {!loading?
      <Cocktails/>
      :<Typography>Loading</Typography>}
      <Drawer anchor="left" open={showFilter} onClose={()=>setShowFilter(!showFilter)}>
        <Categories/>
      </Drawer>
      </Box>
  );
};

export default Main;
