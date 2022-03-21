/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import Header from "../components/Headers/Header.js";
import CardFAQ from "../components/Tabel/CardFAQ.js";
import Footer from "../components/Footers/Footer.js";

export default function FAQ() {
  return (
    <>
      <Header
        Judul= "Frequently Asked Question"
        SubJudul= "FAQ"/>
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

            <div className="container mx-auto">
                <div className="justify-center flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4  -mt-32">
                        <div className="flex flex-wrap">
                            <CardFAQ/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
  );
}
