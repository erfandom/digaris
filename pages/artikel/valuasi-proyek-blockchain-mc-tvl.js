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
        Judul= "Menilai Valuasi Proyek Blockchain dengan Melihat Rasio MC/TVL" 
        Tanggal= "11 Maret 2022"
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
                     Gambarx = "https://bafybeibsfb2ash6g4pkjphxfax7lvguxe5azapfyqmksnprbqhih745wa4.ipfs.nftstorage.link/"
                  />
                </div>
              </div>
              <div className="w-full w-12/12 px-4 lg:order-3 text-justify self-center">
                  <Paragraf
                     Kalimat = "Menilai valuasi suatu proyek blockchain, protocol, atau DApps sehingga dikatakan apakah ini harga masih wajar atau tidak dan masih murah atau mahal memang cukup sulit. Tidak seperti di saham yang sudah lebih mature terlebih dahulu cara valuasinya untuk suatu emiten misalnya dengan Price Earning Ratio (PER) atau Price Book Value (PBV)."
                  />
                  <Paragraf
                     Kalimat = "Cara yang paling banyak dipakai orang untuk melihat apakah suatu koin/token proyek murah hanya sebatas harga per koin, padahal ini bisa menjadi missleading, karena ada faktor sirkulasi koin. Sehingga untuk menilai apakah suatu koin masih murah atau mahal adalah dengan melihat marketcap (harga per coin x sirkulasi coin yg beredar). Jika kita riset dan berkesimpulan bahwa suatu proyek bagus, dan marketcap kok masih rendah (khususnya jika dibandingkan dengan koin lain yg serupa) maka ini bisa dimasukkan di watchlist kita. Dan ini data marketcap ini bisa kita pantau di coinmarketcap atau coingecko."
                  />
                  <Paragraf
                     Kalimat = "Dengan berkembangnya proyek2 DeFi di ekosistem blockchain, maka ada suatu indikator baru yang namanya Total Value Locked (TVL) yaitu angka yang terkunci dalam suatu smart contract dalam sebuah DeFi, biasanya berupa liquiditas exchange, lending, atau protokol lainnya. Sehingga TVL ini bisa menjadi indikator dalam kita menilai suatu proyek menjadi worth untuk dibeli atau tidak. Dan untuk bisa membandingkan satu proyek dengan proyek lainnya, maka rasio MC/TVL bisa dijadikan acuan. Dan ini bisa dicek di" 
                     Link = "https://defillama.com"
                  /> 
                  <Paragraf
                     Kalimat = "Stepnya bagaimana? Misal kita mau cek proyek blockchain ya..."
                  />
                  <ol className="list-decimal list-outside text-lg px-4 text-lg leading-relaxed text-blueGray-800">
                    <li className="px-3"><Paragraf Kalimat="Buka " Link ="https://defillama.com/chains"/></li>
                    <li className="px-3"><Paragraf Kalimat="Pastikan urutan TVL dari tertinggi ke terendah"/></li>
                    <li className="px-3"><Paragraf Kalimat="Cek kolom paling kanan (MCap/TVL), itulah rasio MC terhadap TVL"/></li>
                    <li className="px-3"><Paragraf Kalimat="Supaya lebih fair, mungkin bs dikelompokkan sendiri...misal dari 10 besar terlebih dahulu"/></li>
                    <li className="px-3"><Paragraf Kalimat="Dari 10 besar TVL, mana yg dibawah 1 atau dibawah 2 misalnya."/></li>
                    <li className="px-3"><Paragraf Kalimat="Maka kita dapatkan calon proyek pilihan, kalo per hari ini (3/10/2021) yaitu : Waves, Fantom, Terra dan Polygon (untuk MC/TVL dibawah 2 diantara Top 10 TVL)"/></li>
                    <li className="px-3"><Paragraf Kalimat="Selanjutnya tetep perlu diriset sendiri calon proyek tsb, cek whitepaper/doc, bagaimana proyeknya, timnya, komunitasnya, use casenya, dan tokenomicnya."/></li>
                  </ol>
                  <Paragraf
                     Kalimat = "Dengan cara yang sama bisa kita filter untuk protokol lain, silahkan diulik di defillama. Bisa juga difilter Top 20, Top 100...dst. Misal untuk Dexes yang masih rendah MC/TVL nya untuk Top 10 TVL yaitu Saber, Curve, Balancer...dst"
                  />
                  <Paragraf
                     Kalimat = "Kelemahan untuk metode ini adalah jika proyek-proyek blockchain tsb bukan koin smartcontract, semisal BTC atau belum masuk DeFi dan masih bertumbuh, padahal ada potensi juga secara jangka panjang untuk di Hold. Misal Cardano, Polkadot, dll"
                  />
                  <Paragraf
                     Kalimat = "Not Financial Advice, Always DYOR"
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
