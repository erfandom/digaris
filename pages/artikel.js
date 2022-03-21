/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Header from "../components/Headers/Header.js";
import _Artikel from "../components/Artikel/_Artikel.js";
import Footer from "../components/Footers/Footer.js";

export default function Artikel() {
  return (
    <>
      <Header
        Judul= "Artikel"
        SubJudul= "Artikel"/>
      <_Artikel/>
      <Footer />
    </>
  );
}
