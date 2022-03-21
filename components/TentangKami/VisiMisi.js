import React from "react";

export default function VisiMisi() {
  return (
    <>

    <section className="pb-20 relative block bg-white">
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

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-42 sm:pb-48 sm:pt-36 xs:pb-32 xs:pt-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold text-blueGray-700">
                  Visi
                </h2>
                <p className="text-lg font-medium leading-relaxed mt-4 mb-4 text-blueGray-500">
                    Menjadi media edukasi dan penyedia solusi Halal Crypto, 
                    Teknologi Blockchain, dan Web3 terbesar di Indonesia
                </p>
              </div>
            </div>
            <div className="flex flex-wrap text-center justify-center w-full lg:w-12/12 px-4 pt-12">
              <h2 className="text-4xl font-bold text-blueGray-700">
                  Misi
              </h2>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-4/12 px-6 text-center">
                <div className="text-white p-3 w-12 h-12 shadow-lg rounded-full bg-red-400 inline-flex items-center justify-center">
                  <i className="fas fa-book text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-bold text-blueGray-700">
                  Edukasi
                </h6>
                <p className="mt-2 mb-4 font-medium text-blueGray-500">
                Memberikan edukasi menyeluruh terkait teknologi blockchain dan aset crypto baik dari sisi syariat, 
                fikih, teknologi, implementasi, hingga manajemen risiko yang dapat memberikan kemaslahatan kepada umat secara umum.
                </p>
              </div>
              <div className="w-full lg:w-4/12 px-6 text-center">
                <div className="text-white p-3 w-12 h-12 shadow-lg rounded-full bg-lightBlue-400 inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-bold text-blueGray-700">
                  Kolaborasi
                </h5>
                <p className="mt-2 mb-4 font-medium text-blueGray-500">
                Membangun kolaborasi bersama pakar blockchain, edukator crypto, dan asatidzah/ulama untuk membangun ekosistem 
                halal crypto dan pengembangan teknologi blockchain yang dapat memberi kemaslahatan untuk umat secara umum.
                </p>
              </div>
              <div className="w-full lg:w-4/12 px-6 text-center">
                <div className="text-white p-3 w-12 h-12 shadow-lg rounded-full bg-emerald-400 inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-bold text-blueGray-700">
                  Solusi
                </h5>
                <p className="mt-2 mb-4 font-medium text-blueGray-500">
                Menyediakan solusi blockchain dan implementasi teknologinya kepada bisnis dan usaha umat agar dapat meningkatkan 
                daya saing dengan memanfaatkan seluruh keunggulan blockchain yang sesuai dengan prinsip syariat Islam.
                </p>
              </div>
            </div>
          </div>
    </section>

    </>
  );
}
