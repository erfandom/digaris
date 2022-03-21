import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";

// components

import IndexNavbar from "../Navbars/IndexNavbar.js";

export default function HeaderArtikel({
    Judul,
    Tanggal,
    Author,
  }) {
  return (
    <>
      <IndexNavbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/bg-artikel.png')",
            }}
          >
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-9/12 ml-auto mr-auto text-center">
                <div className="pr-0">
                  <h1 className="text-white font-semibold text-4xl">
                     {Judul}
                  </h1>
                  <p className="mt-5 text-md font-normal text-blueGray-200">
                       <Link href="/artikel"><a className="hover:text-yellow-500 font-normal">Kembali ke Artikel</a></Link> | <i className="fa fa-calendar ml-2 mr-2"/> {Tanggal} | <i className="fa fa-user ml-2 mr-2"/> {Author}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}

HeaderArtikel.defaultProps = {
    Judul: "Judul",
    Tanggal: "Tanggal",
    Author: "Penulis"
  };
  
HeaderArtikel.propTypes = {
    Judul: PropTypes.string,
    Tanggal: PropTypes.string,
    Author: PropTypes.string,
  };