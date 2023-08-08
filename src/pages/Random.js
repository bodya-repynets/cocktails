import { Button, Stack, Box, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import fetchRandom from "../utils/fetchRandom";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Link } from "react-router-dom";

const Random = () => {
  const [random, setRandom] = useState({});
  const { idDrink, strDrinkThumb, strCategory, strDrink, strAlcoholic } =
    random;
  return (
    <Stack
      sx={{ margin: { xs: "50px auto", sm: "100px auto" } }}
      alignItems={"center"}
      gap={"30px"}
    >
      {random.strDrink !== undefined ? (
        <Stack
          sx={{
            width: { xs: "250px", sm: "550px", md: "800px" },
            height: { xs: "500px", sm: "300px", md: "400px" },
            backgroundColor: "primary.main",
            overflow: "hidden",
            flexDirection: { xs: "column", sm: "row" },
            borderRadius: "20px",
          }}
        >
          <img src={strDrinkThumb} alt="random photo" />
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto auto"}
          >
            <Typography
              gutterBottom
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" }, color: "white" }}
            >
              {strDrink}
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "1rem", md: "1.5rem" },
                lineHeight: "2",
                color: "#cddc39",
              }}
            >
              {strCategory}
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "1rem", md: "1.5rem" },
                lineHeight: "2",
                color: "#8bc34a",
              }}
            >
              {strAlcoholic}
            </Typography>
            <Link to={`/cocktails/${idDrink}`}>
              <Button
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#f48fb1",
                  "&:hover": { backgroundColor: "#e91e63" },
                }}
                size="large"
                variant="contained"
              >
                find more
              </Button>
            </Link>
          </Stack>
        </Stack>
      ) : (
        <QuestionMarkIcon
          sx={{
            fontSize: "10rem",
            backgroundColor: "primary.main",
            borderRadius: "50%",
            color: "white",
          }}
        />
      )}

      <Button
        size="large"
        variant="contained"
        onClick={() => fetchRandom(setRandom)}
      >
        get random cocktail
      </Button>
    </Stack>
  );
};

export default Random;
