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
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-bold">Lebih Dekat dengan Kami</h4>
              <h5 className="text-lg mt-0 mb-2 text-black">
                Dapatkan update informasi terbaru dari ISCHAIN di:
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <Link href="https://t.me/ischainlounge" target="_blank" rel="noreferrer">
                <a>
                  <button 
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fab fa-telegram"></i>
                  </button>
                </a></Link>
                <Link href="https://chat.whatsapp.com/CqaHz7oTJ8W1BS1yPsTWZi" target="_blank" rel="noreferrer">
                <a>
                  <button
                  className="bg-white text-green-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fab fa-whatsapp-square"></i>
                  </button>
                </a></Link>
                <Link href="https://instagram.com/ischain.id" target="_blank" rel="noreferrer">
                <a>
                  <button 
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fab fa-instagram"></i>
                  </button>
                </a></Link>
                <Link href="mailto:ischain.id@gmail.com" target="_blank" rel="noreferrer">
                <a>
                  <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  >
                  <i className="fa fa-envelope"></i>
                  </button>
                </a></Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-800 text-sm font-bold mb-2">
                    Link Penting
                  </span>
                  <ul className="list-unstyled">
                    <li>
                    <Link href="/faq">
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        FAQ
                      </a></Link>
                    </li>
                    <li>
                    <Link href="/publikasi">
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Publikasi
                      </a></Link>
                    </li>
                    <li>
                    <Link href="/artikel">
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Artikel
                      </a></Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-800 text-sm font-bold mb-2">
                    Sumber Daya
                  </span>
                  <ul className="list-unstyled">
                    <li>
                    <Link href="/tentang-kami">
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Tentang Kami
                      </a></Link>
                    </li>
                    <li>
                    <Link href="/kontak">
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Hubungi Kami
                      </a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-3/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()}.{" "}
                <Link href="https://ischain.id"><a
                  className="text-blue-500 hover:text-blueGray-800"
                >
                  ISCHAIN Teknologi Indonesia
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
