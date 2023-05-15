import React from 'react'
import {Box, Typography, TextField} from '@mui/material'
import { useGlobalContext } from '../context'

const Banner = () => {
    const {name, setName} = useGlobalContext();
  return (
    <Box
        component={"section"}
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "300px", sm: "500px", md: "600px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "20px",
              padding: "20px",
              color: "primary.main",
              fontSize: { xs: "28px", sm: "36px" },
            }}
          >
            Search your favourite cocktail on our website
          </Typography>
          <TextField
            autoFocus={true}
            sx={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "white",
            }}
            placeholder={"Margarita"}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            variant="outlined"
          >
            {" "}
          </TextField>
        </Box>
      </Box>
  )
}

export default Banner