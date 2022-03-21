import React from "react";
import PropTypes from "prop-types";

export default function PublikasiComing({
  Gambar,
  Edisi,
  JudulBuku,
  Deskripsi,
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

                  <span className="text-sm font-normal text-white"> {Edisi} </span>
                  <h4 className="text-xl font-bold text-white">
                    {JudulBuku}
                  </h4>
                  <p className="text-md font-normal mt-2 text-white">
                  {Deskripsi}
                  </p>

                  <div className="mt-4">
                      <button
                        className="hover:bg-blueGray-200 bg-blueGray-200 text-blueGray-700 active:bg-blueGray-200 text-md font-semibold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Coming Soon
                      </button>
                  </div>
                </blockquote>
              </div>
    </>
  );
}

PublikasiComing.defaultProps = {
  Gambar: "/img/ebook1.png",
  Edisi: "Ebook 1",
  JudulBuku: "Judul Buku",
  Deskripsi: "Deskripsi di sini ya",
};

PublikasiComing.propTypes = {
  Gambar: PropTypes.string,
  Edisi: PropTypes.string,
  JudulBuku: PropTypes.string,
  Deskripsi: PropTypes.string,
};