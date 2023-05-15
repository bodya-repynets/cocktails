import React from 'react'
import {
    Box,
    Typography,
    Drawer,
    Pagination,
  } from "@mui/material";
  import { useGlobalContext } from "../context";
  import Cocktails from "../components/Cocktails";
  import Categories from "../components/Categories";
  import Banner from "../components/Banner";
  import Filter from "../components/Filter";

const Home = () => {
    const {
        loading,
        cocktails,
        showFilter,
        setShowFilter,
        currentPage,
        setCurrentPage,
      } = useGlobalContext();
    
      const perPage = 12;
      const num = Math.ceil(cocktails.length / perPage);
      const lastItem = currentPage * perPage;
      const firstItem = lastItem - perPage;
      const items = cocktails.slice(firstItem, lastItem);
      const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 250, behavior: "smooth" });
      };
      return (
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Banner />
          <Filter />
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "grey",
              fontWeight: 700,
              marginBottom: "50px",
            }}
          >
            {cocktails.length} items was found
          </Typography>
          {!loading ? (
            <Cocktails items={items} />
          ) : (
            <Typography>Loading</Typography>
          )}
          <Drawer
            anchor="left"
            open={showFilter}
            onClose={() => setShowFilter(!showFilter)}
          >
            <Categories />
          </Drawer>
          <Pagination
            color="primary"
            sx={{ marginBottom: "40px" }}
            size={"large"}
            count={num}
            page={currentPage}
            onChange={paginate}
          />
        </Box>
      );
}

export default Home