/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "/components/Navbars/IndexNavbar";
import Header from "/components/Headers/Header.js";
import Footer from "/components/Footers/Footer";

const dkpmr = () => {
  return (
    <>
      <IndexNavbar/>
      <Header
        Judul= "Tentang DKPMR LF SP2020"
        SubJudul= "Tentang Kami"/>

      <section className="pb-20 relative block bg-white">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-24 sm:pb-48 sm:pt-36 xs:pb-24 xs:pt-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-2xl font-medium text-black mb-4">
                  Tim Pelaksana Kegiatan Long Form Sensus Penduduk 2020 BPS Provinsi Sulawesi Tenggara
                </h2>
                <iframe src="https://drive.google.com/file/d/14G_VPM2zEo0h1hoTEaSZg3dAtHN8u7UX/preview" width="100%" height="600" allow="autoplay"></iframe>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-2xl font-medium text-black mb-4">
                  Unit Pengelola Risiko Long Form Sensus Penduduk 2020 BPS Provinsi Sulawesi Tenggara
                </h2>
                <iframe src="https://drive.google.com/file/d/1cOIdmSAopm7FUqJyM7l7Pew8lcnjjPi7/preview" width="100%" height="600" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
    </section>
    <Footer/>

    </>
  );
}

export default dkpmr
