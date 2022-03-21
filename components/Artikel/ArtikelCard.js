import React from "react";
import PropTypes from "prop-types";

export default function ArtikelCard({
  Gambar,
  Tanggal,
  JudulArtikel,
  Deskripsi,
  LinkArtikel,
}) {
  return (
    <>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <div className="w-full align-middle rounded-t-lg">
                  <img
                    src= {Gambar}
                    alt= ""
                  />
                </div>
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>

                  <span className="text-sm font-normal text-white"> <i className="fa fa-calendar"></i> {Tanggal} </span>
                  <h4 className="text-xl font-bold text-white">
                    {JudulArtikel}
                  </h4>
                  <p className="text-md font-normal mt-2 text-white">
                  {Deskripsi}
                  </p>

                  <div className="mt-4">
                    <a href= {LinkArtikel}>
                      <button
                        className="hover:bg-blue-300 bg-blue-500 text-white active:bg-blueGray-700 text-md font-semibold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Selengkapnya
                      </button>
                    </a>
                  </div>
                </blockquote>
              </div>
    </>
  );
}

ArtikelCard.defaultProps = {
  Gambar: "/img/ebook1.png",
  Tanggal: "Ebook 1",
  JudulArtikel: "Judul Artikel",
  Deskripsi: "Deskripsi di sini ya",
  LinkArtikel: "https://link"
};

ArtikelCard.propTypes = {
  Gambar: PropTypes.string,
  Tanggal: PropTypes.string,
  JudulArtikel: PropTypes.string,
  Deskripsi: PropTypes.string,
  LinkArtikel: PropTypes.string,
};