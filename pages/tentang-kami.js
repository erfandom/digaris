/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Header from "../components/Headers/Header.js";
import Tentang from "../components/TentangKami/Tentang.js";
import VisiMisi from "../components/TentangKami/VisiMisi.js";
import Tim from "../components/Home/Tim.js";
import Footer from "../components/Footers/Footer.js";

export default function TentangKami() {
  return (
    <>
      <Header
        Judul= "Tentang Kami"
        SubJudul= "Tentang Kami"/>
      <Tentang/>
      <VisiMisi/>
      <Tim/>
      <Footer />
    </>
  );
}
