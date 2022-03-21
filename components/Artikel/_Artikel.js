import React from "react";

import ArtikelCard from "../Artikel/ArtikelCard.js";

export default function _Artikel() {
  return (
    <>

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

        {/* Artikel Mulai Dari Sini */}

        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-32">
              <div className="flex flex-wrap">

            {/* Start Input Artikel Card 3*/}
            <div className="w-full lg:w-4/12 px-4">
              <ArtikelCard
                Gambar = "https://bafybeiacci2jio4lukq5aqacge2xktjhipwftkyg4esypjgh6izqj3wlky.ipfs.nftstorage.link/"
                Tanggal = "12 Maret 2022"
                JudulArtikel = "Travel Menggunakan Crypto Asset"
                Deskripsi = "Bagi sebagian orang yg sudah memiliki crypto asset, mungkin masih belum bisa merasakan kegunaan nyata dari suatu crypto asset selain sebagai store of value."
                LinkArtikel = "/artikel/travel-menggunakan-crypto"
              />
            </div>
            {/* End Input Artikel Card */}

            {/* Start Input Artikel Card 2*/}
            <div className="w-full lg:w-4/12 px-4">
              <ArtikelCard
                Gambar = "https://bafybeibsfb2ash6g4pkjphxfax7lvguxe5azapfyqmksnprbqhih745wa4.ipfs.nftstorage.link/"
                Tanggal = "11 Maret 2022"
                JudulArtikel = "Menilai Valuasi Proyek Blockchain dengan Melihat Rasio MC/TVL"
                Deskripsi = "Menilai valuasi suatu proyek blockchain, protocol, atau DApps sehingga dikatakan apakah ini harga masih wajar atau tidak dan masih murah atau mahal memang cukup sulit."
                LinkArtikel = "/artikel/valuasi-proyek-blockchain-mc-tvl"
              />
            </div>
            {/* End Input Artikel Card */}

            {/* Start Input Artikel Card 1*/}
            <div className="w-full lg:w-4/12 px-4">
              <ArtikelCard
                Gambar = "https://bafkreietizqghyztxnw4rr5mbgezcpxamvfwsm3u2badikqslyjzdymas4.ipfs.nftstorage.link/"
                Tanggal = "5 Maret 2022"
                JudulArtikel = "Urgensi Belajar Fikih Muamalah"
                Deskripsi = "Seiring perkembangan teknologi maka muncul berbagai macam muamalat kontemporer, maka harus bagi seorang muslim untuk mendalami fikih tersebut, apalagi kebanyakan manusia (atau bahkan seluruhnya, tidak lepas dari kebutuhan untuk melakukan transaksi kontemporer tersebut."
                LinkArtikel = "/artikel/urgensi-belajar-fikih-muamalat"
              />
            </div>
            {/* End Input Artikel Card */}

              </div>
              {/* Pagination */}
              <div className="justify-center py-2 mx-auto items-center flex flex-wrap mt-2">
                <ul className="flex pl-0 rounded list-none flex-wrap lg:w-12/12">
                    <li>
                        <a href="/Artikel" className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-blueGray-700 text-white">
                          <i className="fas fa-chevron-left -ml-px"></i>
                          <i className="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#pablo" className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                          <i className="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/Artikel#1" className="1 first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                          1
                        </a>
                    </li>
                    <li>
                          <a href="#pablo" className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                          <i className="fas fa-chevron-right -mr-px"></i>
                          </a>
                    </li>
                    <li>
                    <a href="#pablo" className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-blueGray-700 text-white">
                          <i className="fas fa-chevron-right -mr-px"></i>
                          <i className="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

</>
);
}


                                                      