import React from "react";
import Link from "next/link";

import PublikasiCard from "../Publikasi/PublikasiCard.js";
import PublikasiComing from "../Publikasi/PublikasiComing.js";

export default function _Publikasi() {
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

        {/* Publikasi Mulai Dari Sini */}

        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-32">
              <div className="flex flex-wrap">
                
            {/* Start Input Publikasi Card */}
            <div className="w-full lg:w-4/12 px-4">
              <PublikasiCard
                Gambar = "https://bafybeifvb76yt2d7vc5pety2hh6istvbb2ivyr3v5yf7sghffotq5mso3q.ipfs.nftstorage.link/"
                Edisi = "Ebook #1"
                JudulBuku = "Soal Jawab Cryptocurrency"
                Deskripsi = "Berisi kumpulan soal jawab tentang beberapa permasalahan atau keraguan yang sering muncul tentang Cryptocurrency yang coba dijawab oleh Team Fiqh ISCHAIN"
                LinkUnduh = "/publication/[ISCHAIN] Soal Jawab Cryptocurrency.pdf"
              />
            </div>
            {/* End Input Publikasi Card */}

            {/* Start Input Publikasi Card */}
            <div className="w-full lg:w-4/12 px-4">
              <PublikasiCard
                Gambar = "https://ipfs.io/ipfs/bafybeia4yaeqppnn7hokzjwxu73cmnqx6ge7cva6fi3ayzkko3y4p42i2e/"
                Edisi = "Ebook #2"
                JudulBuku = "Faidah Hukum dari Bitcoin"
                Deskripsi = "ISCHAIN berinisiatif menerjemahkan sebagian isi makalah mengenai Bitcoin dari Syaikh Dr. Abdullah bin Muhammad bin Abdul Wahhab Al-Aqil hafizhahullahu ta’ala"
                LinkUnduh = "/publication/[ISCHAIN] 8 Faidah Hukum Bitcoin.pdf"
              />
            </div>
            {/* End Input Publikasi Card */}

            {/* Start Input Publikasi Card */}
            <div className="w-full lg:w-4/12 px-4">
              <PublikasiComing
                Gambar = "https://ipfs.io/ipfs/bafkreieb2n4yzpfma4xy32n76ltgupgltsvo4ityabkaxx3rm4pxt7kfpi/"
                Edisi = "Ebook #3"
                JudulBuku = "Mencari Keuntungan Halal dari Crypto"
                Deskripsi = "Coming Soon"
              />
            </div>
            {/* End Input Publikasi Card */}

            {/* Pagination */}
            <div className="py-2 mx-auto items-center flex flex-wrap">
                <ul className="flex pl-0 rounded list-none flex-wrap lg:w-12/12">
                    <li>
                      <Link href="/publikasi">
                        <a className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-blueGray-700 text-white">
                          <i className="fas fa-chevron-left -ml-px"></i>
                          <i className="fas fa-chevron-left -ml-px"></i>
                        </a></Link>
                    </li>
                    <li>
                        <Link href="#">
                        <a className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                          <i className="fas fa-chevron-left -ml-px"></i>
                        </a></Link>
                    </li>
                    <li>
                      <Link href="/publikasi#1">
                        <a className="1 first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                          1
                        </a></Link>
                    </li>
                    <li>
                      <Link href="#"> 
                          <a className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                          <i className="fas fa-chevron-right -mr-px"></i>
                          </a></Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="first:ml-0 mr-1 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-blueGray-700 text-white">
                          <i className="fas fa-chevron-right -mr-px"></i>
                          <i className="fas fa-chevron-right -mr-px"></i>
                        </a></Link>
                    </li>
                </ul>
            </div>

              </div>
            </div>
          </div>
        </div>
      </section>

</>
);
}
