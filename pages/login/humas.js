import React, { useState } from "react";
import { useRouter } from 'next/router'


// layout for page

import Footer from "/components/Footers/Footer.js";

export default function Login({href}) {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
    if (password == "humas74") {
      router.push("https://drive.google.com/drive/folders/1AdzdLrB7mudY-Vg0_RuZb_yX6PHG5iqa?usp=sharing")
    }
  };

  return (
    <>
    <div
      className="absolute top-0 w-full h-full bg-indigo-900 bg-no-repeat bg-full"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <h6 className="text-white text-sm mb-6 mx-auto items-center w-full font-bold">
            <a href="http://localhost:3000"><i className="fas fa-chevron-circle-left"></i>  Kembali ke Beranda </a>
            </h6>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="/img/logo/humas.png"
              />
                <div className="text-center mb-3 mt-4">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Masuk
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onClick={submitForm}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Kata Kunci" value={password} onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <input
                      className="bg-indigo-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit" value="Masuk"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}
