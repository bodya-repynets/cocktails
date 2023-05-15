import { Box, Typography } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
      <Box sx={{ margin: "200px auto 0 auto", fontSize: "36px", textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
            About 
        </Typography>
        <Link to={'/'}>return to home page</Link>
      </Box>

    </>
  );
};

export default About;
