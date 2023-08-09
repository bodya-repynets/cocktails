import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Box
        component={"header"}
        sx={{
          position: "fixed",
          width: "100vw",
          zIndex: 100,
          height: "80px",
          backgroundColor: "primary.main",
        }}
      >
        <Box
          component={"nav"}
          sx={{
            width: { xs: "300px", sm: "500px", md: "800px" },
            height: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            color={"white"}
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "700" }}
          >
            COCKTAILS
          </Typography>
          <Button
            onClick={() => setState(!state)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon sx={{ color: "white", fontSize: "3rem" }} />
          </Button>
          <Stack
            direction={"row"}
            sx={{
              gap: { xs: "10px", sm: "20px", md: "40px" },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Link to={"/"} className="link">
              <Typography variant="h6" color={"white"}>
                Home
              </Typography>
            </Link>
            <Link to={"/random"} className="link">
              <Typography variant="h6" color={"white"}>
                Random cocktail
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Box>
      <Drawer anchor={"top"} open={state} onClose={() => setState(!state)}>
        <List>
          <ListItem>
            <Link to={"/"} onClick={() => setState(false)} className="link">
              <ListItemText primaryTypographyProps={{ fontSize: "1.5rem" }}>
                Home
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem sx={{ fontSize: "10px" }}>
            <Link
              to={"/about"}
              onClick={() => setState(false)}
              className="link"
            >
              <ListItemText primaryTypographyProps={{ fontSize: "1.5rem" }}>
                About
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to={"/random"}
              onClick={() => setState(false)}
              className="link"
            >
              <ListItemText primaryTypographyProps={{ fontSize: "1.5rem" }}>
                Random cocktail
              </ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
