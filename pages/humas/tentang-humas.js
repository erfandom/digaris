/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Footer from "/components/Footers/Footer";
import NavbarHumas from "../../components/Navbars/NavbarHumas";
import HeaderHumas from "../../components/Headers/HeaderHumas";

const humas = () => {
  return (
    <>
      <NavbarHumas/>
      <HeaderHumas
        Judul= "Tentang Humas BPS Provinsi Sulawesi Tenggara"
        SubJudul= "Tentang Kami"/>

      <section className="pb-20 relative block bg-white">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-24 sm:pb-48 sm:pt-36 xs:pb-24 xs:pt-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-10/12 px-4">
                <h2 className="text-2xl font-medium text-black mb-4">
                  Tim Humas BPS Provinsi Sulawesi Tenggara
                </h2>
                <iframe src="https://drive.google.com/file/d/1DIYUmNLwJfTdOZPOlHkqPHdKbfqBwos3/preview" width="100%" height="600" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
    </section>
    <Footer/>

    </>
  );
}

export default humas
