import React from "react";

export default function Tentang() {
  return (
    <>

    <section className="pb-20 relative bg-blueGray-100">
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

                    <ul className="list-none mt-2">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blueGray-500">
                            Berpegang pada syariat Islam
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blueGray-500">
                            Edukasi crypto sesuai syariat Islam
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blueGray-500">
                            Solusi teknologi blockchain
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blueGray-500">
                            Pengembangan ekonomi umat
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-blueGray-500">
                            Beranggotakan Praktisi, Pakar, dan Asatidzah
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>

              </div>
            </div>
          </div>
        </div>

    </section>

    </>
  );
}
