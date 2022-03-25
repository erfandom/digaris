import React from "react";
import Link from "next/link";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link href="/sp2020/beranda">
                  <a className="navbar-brand">
                    <img
                      src= "/img/logo/sp1.png" 
                      alt= "logo" 
                    />
                  </a>
                </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/dokumentasi">
                <a
                  className="hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="hover:text-blue-500 text-blueGray-400 far fa-folder text-lg leading-lg xs:ml-0 lg:ml-3 mr-2"></i>
                  Dokumentasi
                </a></Link>
              </li>
              <li className="flex items-center">
                <Link href="/publisitas">
                <a
                  className="hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="hover:text-blue-500 text-blueGray-400 far fa-newspaper text-lg leading-lg mr-2"></i>
                  Publisitas
                </a></Link>
              </li>
              <li className="flex items-center">
                <Link href="/mitigasi">
                <a 
                  className="hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="hover:text-blue-500 text-blueGray-400 far fa-newspaper text-lg leading-lg mr-2"></i>
                  Mitigasi Risiko
                </a></Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">

               {/* <EntitasDropdown /> */}

              </li>
              <li className="flex items-center">
                <Link href="/sp2020/tentang-dkpmr">
                <a
                  className="hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <span>Tentang DKPMR LF SP-2020</span>
                </a></Link>
              </li>

              <li className="flex items-center">
                <Link href="/">
                <a
                  className="hover:text-blue-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <span>Kembali ke DIGARIS</span>
                </a></Link>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-red-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://instagram.com/bpsprovsultra"
                  target="_blank" rel="noreferrer"
                >
                  <i className="hover:text-red-500 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-lightBlue-600 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://facebook.com/bpsprovsultra"
                  target="_blank" rel="noreferrer"
                >
                  <i className="hover:text-lightBlue-600 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              {/* <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
