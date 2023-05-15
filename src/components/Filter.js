import React from 'react'
import {Stack, Button, Typography} from '@mui/material'
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { useGlobalContext } from '../context';

const Filter = () => {
    const {category, setCategory, setShowFilter} = useGlobalContext();
  return (
    <Stack   
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        marginBottom={"40px"}
        gap={"20px"}
      >
        <Button onClick={() => setShowFilter(true)} variant="contained">
          <Typography>Filter category</Typography>
          <FilterAltIcon className="filter" />
        </Button>
        <Button
          disabled={category === "none"}
          variant="contained"
          onClick={() => setCategory("none")}
        >
          <Typography>Cancel filter</Typography>
          <FilterAltOffIcon className="filter" />
          <Typography color={"black"} sx={{ fontWeight: 700 }}>
            {category}
          </Typography>
        </Button>
      </Stack>
  )
}

export default Filter