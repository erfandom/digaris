/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Hero from "../components/Home/Hero";
import TentangKami from "../components/Home/TentangKami";
import Publikasi from "../components/Home/Publikasi";
import Tim from "../components/Home/Tim";
import Footer from "../components/Footers/Footer";

const Index = () => {
  return (
    <>
      <Hero/>
      <TentangKami/>
      <Publikasi/>
      <Tim/>
      <Footer />
    </>
  );
}

export default Index
