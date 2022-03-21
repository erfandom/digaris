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
        Judul= "Urgensi Belajar Fikih Muamalat" 
        Tanggal= "5 Maret 2022"
        Author= "Tim Fikih ISCHAIN"
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
                     Gambarx = "https://bafybeifb2csn47jjz724vrz3z5p5mf2zz6i5h7r7pnbheiotpk3hn6zmo4.ipfs.nftstorage.link/"
                  />
                </div>
              </div>
              <div className="w-full w-12/12 px-4 lg:order-3 text-justify self-center">
                  <Paragraf
                     Kalimat = "Seiring perkembangan teknologi maka muncul berbagai macam muamalat kontemporer, maka harus bagi seorang muslim untuk mendalami fiqih tersebut, apalagi kebanyakan manusia (atau bahkan seluruhnya, tidak lepas dari kebutuhan untuk melakukan transaksi kontemporer tersebut."
                  />
                  <Paragraf
                     Kalimat = "Ambil contoh: kartu ATM. Saat ini seluruh manusia atau kebanyakan dari mereka menggunakanya."
                  />
                  <Paragraf
                     Kalimat = "Mereka butuh pengetahuan berbagai permasalahan tersebut beserta hukum fikihnya, apalagi para pelaku yang berkecimpung di dunia perdagangan dan jual beli."
                  />
                  <Paragraf
                     Kalimat = "Terdapat atsar yang diriwayatkan dari Umar bin Khattab -semoga Allah meridhainya- bahwa beliau mengusir orang yang tidak paham fiqh jual beli dari pasar, seraya berkata: &quot;Dilarang hadir di pasar kaum muslimin orang yang tidak faham ilmu halal dan haram.&quot; Tujuan beliau adalah agar orang tadi (yang tidak faham halal-haram) tidak terjerumus dalam riba dan menyebabkan kaum muslimin terjatuh dalam riba."
                  />
                  <Paragraf
                     Kalimat = "✒️ Silahkan dilihat: Ihya Ulumuddin 2/59, Mawahib Al-Jalil 5/356, Kasyaaf Al-Qina 3/145, Mathalib Ulin Nuha 3/3"
                  />
                  <Paragraf
                     Kalimat = "✒️ [Nukilan dari Fiqh Al-Mumalat Al-Maliyah Al-Muashiroh oleh Dr. Saad bin Turki Al-Khatslan]"
                  />
                  <Paragraf
                     Kalimat = "📝 Alih bahasa: Ustadz Ade Setiawan (Advisory Board ISCHAIN)"
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
