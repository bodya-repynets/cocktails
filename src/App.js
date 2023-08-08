import React from "react";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Cocktail from "./pages/Cocktail";
import Home from "./pages/Home";
import Random from "./pages/Random";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/random" element={<Random />} />
          <Route path="/cocktails/:id" element={<Cocktail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
