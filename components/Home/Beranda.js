/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Footer from "../Footers/Footer";

export default function Beranda() {
  return (
    <>
    <section className="pb-20 relative block bg-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-42 sm:pb-48 sm:pt-36 xs:pb-32 xs:pt-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-9/12 px-4">
              <img
                alt="..."
                className="max-w-full mx-auto mb-4 w-24"
                src="/img/logo/digaris.png"
              />
                <h2 className="text-4xl font-medium text-black">
                  Selamat Datang di <span className="text-indigo-600">DIGARIS (Digital Arsiparis)</span>
                </h2>
                <p className="text-black text-md font-normal leading-relaxed mt-4 mb-4">
                  DIGARIS (Digital Arsiparis) BPS Provinsi Sulawesi Tenggara merupakan portal dokumentasi satu pintu. Dokumentasi bisa berupa foto, video, powerpoint, dokumen, dan sebagainya </p>
              </div>
            </div>

            <div className="flex flex-wrap text-center justify-center w-full lg:w-12/12 px-4 pt-12">
              <div
                className="bg-indigo-600 text-white active:bg-indigo-600 text-md font-bold uppercase px-3 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Masuk Sebagai:
              </div>
            </div>
            
            <div className="flex flex-wrap mt-5 justify-center">
              <div className="w-full lg:w-4/12 px-6 text-center">
                <a href="/login/humas">
                  <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="/img/logo/humas.png"
                      />
                      <button className="bg-white mt-4 text-orange-500 active:bg-indigo-600 text-md font-bold uppercase px-3 py-1 rounded 
                      outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Humas
                      </button>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-4/12 px-6 text-center">
                <a href="/login-sp2020">
                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="/img/logo/sp.png"
                      />
                      <button className="bg-white mt-4 text-lightBlue-500 active:bg-indigo-600 text-md font-bold uppercase px-3 py-1 rounded 
                      outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        SP2020
                      </button>
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-4/12 px-6 text-center">
                <a href="/login-keuangan">
                  <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="/img/logo/keuangan.png"
                      />
                      <button className="bg-white mt-4 text-green-500 active:bg-indigo-600 text-md font-bold uppercase px-3 py-1 rounded 
                      outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Keuangan
                      </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
    </section>
    <Footer/>
    </>
  );
}
