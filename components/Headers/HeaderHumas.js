import React from "react";
import Link from 'next/link';
import PropTypes from "prop-types";

export default function HeaderHumas({
    Judul,
    SubJudul,
  }) {
  return (
    <>
      <main>
        <div className="relative pt-4 pb-4 flex content-center items-center justify-center h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/bg-humas.jpg')",
            }}
          >
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 ml-auto mr-auto text-center">
                <div className="pr-0">
                  <h1 className="text-white font-semibold text-4xl">
                     {Judul}
                  </h1>
                  <p className="mt-4 text-md font-bold text-blueGray-200">
                      <Link href="/sp2020/beranda"><a className="hover:text-yellow-500 font-normal">Beranda</a></Link> | {SubJudul}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

HeaderHumas.defaultProps = {
    Judul: "Judul",
    SubJudul: "SubJudul",
  };
  
HeaderHumas.propTypes = {
    Judul: PropTypes.string,
    SubJudul: PropTypes.string,
  };