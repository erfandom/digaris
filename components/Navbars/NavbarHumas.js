import React from "react";
import Link from "next/link";
// components

export default function NavbarHumas(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link href="/humas/beranda">
                  <a className="navbar-brand">
                    <img
                      src= "/img/logo/humas1.png" 
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
            {/*<ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/dokumentasi">
                <a
                  className="hover:text-orange-500 text-black px-3 py-4 lg:py-2 flex items-center text-sm  font-bold"
                >
                  <i className="hover:text-orange-500 text-black far fa-folder text-lg leading-lg xs:ml-0 lg:ml-3 mr-2"></i>
                  Freepik
                </a></Link>
              </li>
              <li className="flex items-center">
                <Link href="/publisitas">
                <a
                  className="hover:text-orange-500 text-black px-3 py-4 lg:py-2 flex items-center text-sm  font-bold"
                >
                  <i className="hover:text-orange-500 text-black far fa-newspaper text-lg leading-lg mr-2"></i>
                  Unsplash
                </a></Link>
              </li>
              <li className="flex items-center">
                <Link href="/mitigasi">
                <a 
                  className="hover:text-orange-500 text-black px-3 py-4 lg:py-2 flex items-center text-sm  font-bold"
                >
                  <i className="hover:text-orange-500 text-black far fa-newspaper text-lg leading-lg mr-2"></i>
                  Pexels
                </a></Link>
              </li>
            </ul>*/}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/humas/tentang-humas">
                <a
                  className="hover:text-orange-500 text-black px-3 py-4 lg:py-2 flex items-center text-sm  font-bold"
                >
                  <span>Tentang Humas</span>
                </a></Link>
              </li>

              <li className="flex items-center">
                <a href="https://www.bpsprovsultra.page/digaris/"
                  className="hover:text-orange-500 text-black px-3 py-4 lg:py-2 flex items-center text-sm  font-bold"
                >
                  <i className="hover:text-orange-500 text-black fas fa-arrow-circle-left text-lg leading-lg xs:ml-0 lg:ml-3 mr-2"></i>
                  <span>Kembali ke DIGARIS</span>
                </a>
              </li>

             {/* <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm font-bold  px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
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
