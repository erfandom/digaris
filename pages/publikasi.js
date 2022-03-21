/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Header from "../components/Headers/Header.js";
import _Publikasi from "../components/Publikasi/_Publikasi.js";
import Footer from "../components/Footers/Footer.js";

export default function Publikasi() {
  return (
    <>
      <Header
        Judul= "Publikasi"
        SubJudul= "Publikasi"/>
      <_Publikasi/>
      <Footer />
    </>
  );
}
