import React from "react";

export default function TentangKami() {
  return (
    <>

    <section className="mt-48 md:mt-40 pb-32 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-12/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <div className="w-full align-middle rounded-t-lg">  
                  <img
                    alt="..."
                    src="/img/tentang.png"
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
                  <h4 className="text-xl font-bold text-white">
                    Tentang ISCHAIN
                  </h4>
                  <p className="text-md font-medium mt-2 text-white">
                  ISCHAIN (Islamic Cryptocurrency and Blockchain) Community
                  adalah sebuah komunitas islami penggiat industri web3 halal, 
                  termasuk di antaranya aset crypto, teknologi blockchain, dan 
                  aplikasi desentral. 
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                    <h3 className="text-3xl mb-2 font-bold leading-normal">
                        Pandangan Kami
                    </h3>
                    <p className="text-lg font-medium leading-relaxed mt-4 mb-4 text-blueGray-500">
                        ISCHAIN Community percaya bahwa industri 
                        web3 akan menjadi sebuah ekonomi baru yang revolusioner yang 
                        disebut sebagai ekonomi token (token economy), dan umat Islam 
                        harus menjadi yang terdepan dalam pengadopsiannya tanpa 
                        melanggar kaidah dan prinsip Islam.
                    </p>
                    <div className="mt-3">
                    <a href="/tentang-kami" target="_blank">
                        <button
                             className="hover:bg-blue-300 bg-blue-500 text-white active:bg-blueGray-700 text-md font-semibold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                             type="button"
                        >
                             Selengkapnya
                        </button>
                    </a>
                    </div>
              </div>
            </div>
          </div>
        </div>

    </section>

    </>
  );
}
