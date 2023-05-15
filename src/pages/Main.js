import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Container maxWidth={"lg"} sx={{ margin: "80px auto 0 auto" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
