import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import UseParams from "./UseParams";
import UseParamSingle from "./UserParamSingle";

const Pages = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home pageName="Home" />} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route path="/use-params" Component={UseParams} />
        <Route path="/use-params/:fname" Component={UseParamSingle} />
        <Route path="/*" Component={Error} />
      </Routes>
    </>
  );
};

export default Pages;
