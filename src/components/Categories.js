import React from "react";
import { useGlobalContext } from "../context";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Categories = () => {
  const { categories, setShowFilter, setCategory } = useGlobalContext();
  const handleClick = (category) => {
    setShowFilter(false);
    setCategory(category);
  };
  return (
    <List sx={{ width: "300px" }}>
      {categories.map((item) => {
        return (
          <ListItem key={item.strCategory}>
            <ListItemButton onClick={() => handleClick(item.strCategory)}>
              <ListItemText>{item.strCategory}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Categories;
