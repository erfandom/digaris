import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-100 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-3/12 px-4 mx-auto text-center">
            <div className="lg:mb-0 mb-6">
                <Link href="https://fb.com/bpsprovsultra" target="_blank" rel="noreferrer">
                <a>
                  <button 
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fab fa-facebook"></i>
                  </button>
                </a></Link>

                <Link href="https://instagram.com/bpsprovsultra" target="_blank" rel="noreferrer">
                <a>
                  <button 
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fab fa-instagram"></i>
                  </button>
                </a></Link>

                <Link href="https://youtube.com/c/bpsprovsultra" target="_blank" rel="noreferrer">
                <a>
                  <button 
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fab fa-youtube"></i>
                  </button>
                </a></Link>

                <Link href="mailto:sultra@bps.go.id" target="_blank" rel="noreferrer">
                <a>
                  <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fa fa-envelope"></i>
                  </button>
                </a></Link>
              </div>

              <div className="text-sm text-blueGray-500 font-semibold py-1 mt-4">
                DIGARIS © {new Date().getFullYear()}.{" "}
                <Link href="https://sultra.bps.go.id"><a
                  className="text-indigo-500 hover:text-blueGray-800"
                >
                  IPDS BPS Provinsi Sulawesi Tenggara
                </a></Link>
                .
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
