import React from "react";

export default function Board() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                Board
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                Pengarah
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial relative xs:relative sm:relative">
              <div
                className=
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
              >
                <i className="fa fa-rocket"></i>
              </div>
            </div>
          </div>
          <div className="text-md text-black mt-4">
            <p className="font-semibold text-orange-500">Chief Executive Officer</p>
              <span className="text-black mr-2">
                Yhouga A. Moppratama, S.T.
              </span>
              <div className="mt-0 lg:mb-0 mb-2">
                <a href="https://id.linkedin.com/in/yhouga-ariesta" target="_blank" rel="noreferrer"
                   className="hover:text-blue-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/yhouga.ariesta" target="_blank" rel="noreferrer"
                   className="hover:text-blue-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 mt-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                Administrator
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                Administrasi
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial relative xs:relative sm:relative">
              <div
                className=
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
              >
                <i className="fa fa-briefcase"></i>
              </div>
            </div>
          </div>
          <div className="text-md text-black mt-4">
            <p className="font-semibold text-orange-500">Treasury</p>
              <span className="text-black mr-2">
                M. Said Khairul Insan, S.E.
              </span>
              <div className="mt-0 lg:mb-0 mb-2">
                <a href="https://www.linkedin.com/in/muhammad-said-hairul-insan-8a533496/" target="_blank" rel="noreferrer"
                   className="hover:text-blue-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://facebook.com/muhammadsaidify" target="_blank" rel="noreferrer"
                   className="hover:text-blue-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/muhammadsaidify" target="_blank" rel="noreferrer"
                   className="hover:text-lightBlue-400 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
          </div>
          <div className="text-md text-black mt-4">
            <p className="font-semibold text-orange-500">Secretary</p>
              <span className="text-black mr-2">
                Rama Rizana, M.Sc.
              </span>
              <div className="mt-0 lg:mb-0 mb-2">
                <a href="https://sa.linkedin.com/in/ramarizana" target="_blank" rel="noreferrer"
                   className="hover:text-blue-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/ramarizana" target="_blank" rel="noreferrer"
                   className="hover:text-blue-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/ramarizana/?hl=id" target="_blank" rel="noreferrer"
                   className="hover:text-red-500 text-blueGray-500 font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
