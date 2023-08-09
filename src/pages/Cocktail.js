import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchById from "../utils/fetchById";
import { useGlobalContext } from "../context";
import { Box, Stack, Typography } from "@mui/material";

const Cocktail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchById(id, setItem);
  }, []);
  const strIngr = [];

  for (let key in item) {
    if (key.includes("strIngredient") && item[key] !== null) {
      strIngr.push(item[key]);
    }
  }

  if (item) {
    return (
      <Stack
        alignItems={"center"}
        sx={{ flexDirection: { sm: "column", md: "row" } }}
        margin={"50px auto"}
        justifyContent={"space-evenly"}
        spacing={"50px"}
      >
        <Box sx={{ width: { sm: "100%", md: "50%" }, maxWidth: "400px" }}>
          <img className="img" src={item.strDrinkThumb} alt="" />
        </Box>
        <Stack
          textAlign={"center"}
          gap={"20px"}
          sx={{
            color: "#1e293b",
            padding: "0 50px",
            width: { sm: "100%", md: "50%" },
          }}
        >
          <Stack gap={"20px"}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {item.strDrink}
            </Typography>
            <Stack flexDirection={"row"} justifyContent={"center"} gap={"20px"}>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  padding: "5px",
                  backgroundColor: "#38bdf8",
                  borderRadius: "5px",
                }}
              >
                {item.strCategory}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  padding: "5px",
                  backgroundColor: "#38bdf8",
                  borderRadius: "5px",
                }}
              >
                {item.strAlcoholic}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            gutterBottom
            marginTop={"40px"}
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Ingredients:
          </Typography>
          <Stack
            flexDirection={"row"}
            gap={"20px"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {strIngr.map((ing) => {
              return (
                <Typography
                  sx={{
                    padding: "5px",
                    backgroundColor: "#38bdf8",
                    borderRadius: "5px",
                    fontFamily: "monospace",
                  }}
                  key={ing}
                >
                  {ing}
                </Typography>
              );
            })}
          </Stack>
          <Typography
            gutterBottom
            marginTop={"40px"}
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Instructions:
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              padding: "5px",
              backgroundColor: "#38bdf8",
              borderRadius: "5px",
            }}
          >
            {item.strInstructions}
          </Typography>
        </Stack>
      </Stack>
    );
  } else {
    <h1>loading</h1>;
  }
};

export default Cocktail;
