/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import HeaderArtikel from "/components/Headers/HeaderArtikel.js";
import Gbr from "/components/KontenArtikel/Gbr.js";
import Paragraf from "/components/KontenArtikel/Paragraf.js";
import Footer from "/components/Footers/Footer.js";

export default function tempKontenArtikel() {
  return (
    <>
      <HeaderArtikel
        Judul= "Travel Menggunakan Crypto Asset" 
        Tanggal= "12 Maret 2022"
        Author= "Board ISCHAIN"
      />

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

q     <div className="container mx-auto px-4 pb-2">
        <div className="relative flex flex-wrap z-10 min-w-0 bg-white w-full mb-6 shadow-xl rounded-lg -mt-48">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4 lg:order-3 lg:text-justify lg:self-center">
                
                <div className="py-6 px-3 sm:mt-0">
                  <Gbr
                     Gambarx = "https://bafybeiacci2jio4lukq5aqacge2xktjhipwftkyg4esypjgh6izqj3wlky.ipfs.nftstorage.link/"
                  />
                </div>
              </div>
              <div className="w-full w-12/12 px-4 lg:order-3 text-justify self-center">
                  <Paragraf
                     Kalimat = "Bagi sebagian orang yg sudah memiliki crypto asset, mungkin masih belum bisa merasakan kegunaan nyata dari suatu crypto asset selain sebagai store of value. Pun sebagai medium of exchange hanya sebatas di CEX ataupun DEX, yaitu menukarkan antara aset kripto satu dengan yang lain. Pengalaman nyata yang sering kita rasakan mungkin adalah beli rendah dan jual tinggi untuk ambil profit, baru bisa kita withdraw untuk digunakan beli jajan, atau liburan bersama keluarga. Adopsi masal terhadap penggunaan aset kripto ini yang paling ditunggu-tunggu menggantikan era ekonomi digital menjadi era ekonomi token."
                  />
                  <Paragraf
                     Kalimat = "Dan jangan salah, ternyata adopsi itu sudah terlihat masif di dunia travelling, paling tidak ada 2 aplikasi yang bisa sobat ischain pakai sekarang juga, baik beli tiket pesawat, ataupun book hotel dengan aset kripto. Apa itu ?"
                  />
                  <ol className="list-decimal list-outside text-lg px-4 text-lg leading-relaxed text-blueGray-800">
                    <li className="px-3"><Paragraf Kalimat="Travala, " Link ="https://travala.com" Kalimat1="(seperti Traveloka)"/></li>
                    <li className="px-3"><Paragraf Kalimat="Dtravel " Link="https://app.dtravel.com" Kalimat1="(mirip AirBnB)"/></li>
                  </ol>
                  <Paragraf
                     Kalimat = "Kami tidak akan review detail kedua platform tersebut, ini sebagai info kepada sobat ISCHAIN bahwa inilah salah satu adopsi penggunaan aset kripto. Yang bisa digunakan pun beragam, mulai dari BTC, ETH, dan altcoin lain. Dan standar harga menggunakan USD. Mau travel ke Jakarta, Surabaya, Bali ? Bisa. Lalu mungkin ada pertanyaan, jadi ini menunjukkan di Indonesia sudah diperbolehkan menggunakan kripto aset sebagai alat pembayaran? Tidak, kedua platform tsb masuk ke dalam kategori agen travel internasional, pembayaran mereka ke maskapai dan hotel masih menggunakan fiat. Wallahua'lam"
                  />
                  <Paragraf
                     Kalimat = "Silahkan selanjutnya bisa diulik sendiri detil untuk mendapatkan pengalaman travel dengan aset kripto antum. Dan jangan lupa bagi cerita pengalaman antum disini dalam proses pesan tiket dan book hotel dengan kedua platform tersebut."
                  />
                  <Paragraf
                     Kalimat = "Salam, selamat berakhir pekan"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}
