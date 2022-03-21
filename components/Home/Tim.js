import React from "react";
import Advisor from "../Tim/Advisor.js";
import Board from "../Tim/Board";
import Specialist from "../Tim/Specialist";

export default function Tim() {
  return (
    <>

    <section className="pb-16 bg-blueGray-100 relative pt-32">
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10 bg-blueGray-700">
            <div className="px-4 md:px-3 mx-auto w-full">
              
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4 text-center mb-12">
                  <h2 className="text-xl text-white font-semibold">Tim ISCHAIN</h2>
                </div>

              <div className="w-full lg:w-6/12 xl:w-4/12 px-3">
                <Advisor/>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-3">
                <Board/>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-3">
                <Specialist/>
              </div>

            </div>
            </div>
          </div>
        </div>
    </section>

    </>
  );
}