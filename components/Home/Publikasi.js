import React from "react";

export default function Publikasi() {
  return (
    <>

    <section className="relative py-10">
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

        <div className="container mx-auto overflow-hidden xs:pb-32 sm:pb-84 pb-84">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-32">
              <h3 className="text-3xl mb-2 font-bold leading-normal">
                Kajian dan Publikasi
              </h3>
              <p className="text-lg font-medium leading-relaxed mt-4 mb-4 text-blueGray-500">
                Berikut adalah hasil kajian ISCHAIN berkolaborasi dengan pakar 
                dan spesialis di bidang teknologi blockchain, cryptocurrency, 
                web3, beserta para Asatidzah. Hasil kajian disajikan dalam bentuk
                Ebook yang dapat diakses secara gratis.
              </p>
              <a href="/publikasi" target="_blank">
                    <button
                        className="hover:bg-blue-300 bg-blue-500 text-white active:bg-blueGray-700 text-md font-semibold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                        type="button"
                    >
                        Lihat Semua
                    </button>
              </a>
            </div>
            
            <div className="w-8/12 md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative xs:relative sm:relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <div className="w-full align-middle rounded-lg absolute shadow-xl max-w-150-px left-40-px -top-225-px z-2">  
                  <img
                    src="/img/ebook1.png"
                    alt="" 
                  />
                </div>
                <a
                  href="/publication/[ISCHAIN] Soal Jawab Cryptocurrency.pdf" target="_blank"
                  className="align-middle rounded absolute shadow-lg left-145-px -top-60-px z-3"
                >
                  <button
                    className="hover:bg-yellow-300 bg-yellow-500 text-blueGray-700 active:bg-blueGray-700 text-md max-w-100-px font-semibold 
                    px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150
                    align-middle rounded shadow absolute shadow-xl max-w-120-px"
                    type="button"
                  >
                    Unduh
                  </button>
                </a>
                <div className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-260-px -top-160-px">
                  <img
                    src="/img/ebook2.png"
                    alt=""
                  />
                </div>
                <a
                  href="/publication/[ISCHAIN] 8 Faidah Hukum Bitcoin.pdf" target="_blank"
                  className="align-middle rounded absolute shadow-lg left-145-px -top-60-px z-3"
                >
                  <button
                    className="hover:bg-yellow-300 bg-yellow-500 text-blueGray-700 active:bg-blueGray-700 text-md max-w-100-px font-semibold px-4 py-2 
                    rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150
                    align-middle rounded shadow absolute shadow-xl max-w-120-px left-85-px top-95-px"
                    type="button"
                  >
                    Unduh
                  </button>
                </a>
                <div className="w-full align-middle rounded-lg absolute shadow-2xl max-w-180-px -left-100-px top-25-px">
                  <img
                    src="/img/ebook3.png"
                    alt=""
                  />
                </div>
                <a
                  className="align-middle rounded absolute shadow-lg left-145-px -top-60-px z-3"
                >
                  <button
                    className="bg-yellow-500 text-blueGray-700 active:bg-blueGray-700 text-md font-semibold px-4 py-2 
                    rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150
                    align-middle rounded shadow absolute shadow-xl left-0-px top-200-px"
                    type="button"
                  >
                    Coming Soon
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>

    </>
  );
}
