/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "../Navbars/IndexNavbar";

export default function Hero() {
  return (
    <>

    <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">

              <h2 className="font-bold text-4xl text-blueGray-700">
                ISCHAIN (Islamic Cryptocurrency and Blockchain) Community
              </h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-blueGray-500">
                ISCHAIN adalah komunitas Islami penggiat industri Web3 halal. Visi kami menjadi media edukasi dan penyedia solusi Halal Crypto, Teknologi Blockchain, dan Web3 terbesar di Indonesia
              </p>
              <div className="mt-12">
                <a href="https://t.me/ischainlounge" target="_blank">
                  <button
                    className="hover:bg-blue-300 bg-blue-500 text-white active:bg-blueGray-700 text-md font-semibold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-telegram"></i> Bergabung
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px">
        <img
          src="/img/hero.png"
          alt="..."
        />
        </div>
      </section>

      <section className="pb-10 bg-white -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fa fa-book"></i>
                    </div>
                    <h6 className="text-xl font-bold">Edukasi</h6>
                    <p className="mt-2 mb-4 font-medium text-blueGray-500">
                    Memberikan edukasi menyeluruh terkait teknologi blockchain dan aset crypto baik dari sisi syariat, fikih, teknologi, implementasi, hingga manajemen risiko yang dapat memberikan kemaslahatan kepada umat secara umum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl font-bold">Kolaborasi</h6>
                    <p className="mt-2 mb-4 font-medium text-blueGray-500">
                    Membangun kolaborasi bersama pakar blockchain, edukator crypto, dan asatidzah/ulama untuk membangun ekosistem halal crypto dan pengembangan teknologi blockchain yang dapat memberi kemaslahatan untuk umat secara umum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h6 className="text-xl font-bold">Solusi</h6>
                    <p className="mt-2 mb-4 font-medium text-blueGray-500">
                    Menyediakan solusi blockchain dan implementasi teknologinya kepada bisnis dan usaha umat agar dapat meningkatkan daya saing dengan memanfaatkan seluruh keunggulan blockchain yang sesuai dengan prinsip syariat Islam.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  );
}