import React from "react";
import PropTypes from "prop-types";


// components

export default function CardFAQ({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* FAQ table */}
          <table className="items-center w-full bg-transparent border-collapse text-blueGray-700">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-md font-bold uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  No.
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-md font-bold uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Pertanyaan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-md font-bold uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Jawaban
                </th>            
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal p-4 text-left flex ml-3">
                  1
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-medium whitespace-nowrap p-4">
                  Apa itu ISCHAIN?
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                ISCHAIN (Islamic Cryptocurrency and Blockchain) Community adalah sebuah komunitas islami penggiat industri web3 halal, 
                termasuk diantaranya aset crypto, teknologi blockchain, dan aplikasi desentral. ISCHAIN Community percaya bahwa industri 
                web3 akan menjadi sebuah ekonomi baru yang revolusioner yang disebut sebagai ekonomi token (token economy), dan umat 
                Islam harus menjadi yang terdepan dalam pengadopsiannya tanpa melanggar kaidah dan prinsip Islam.
                </td>
              </tr>

              <tr>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal p-4 text-left flex ml-3">
                  2
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-medium whitespace-nowrap p-4">
                  Apakah ISCHAIN komunitas yang terbuka untuk umum?
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                  Ya, ISCHAIN terbuka untuk seluruh kaum muslimin yang ingin mengetahui tentang seluk beluk Blockchain atau Cryptocurrency sesuai kaidah dan prinsip Islam.
                </td>
              </tr>

              <tr>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal p-4 text-left flex ml-3">
                  3
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-medium whitespace-nowrap p-4">
                  Bagaimana cara bergabung dengan ISCHAIN?
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                  Komunitas ISCHAIN bisa diakses melalui <a href="https://t.me/ischainlounge" className="text-blue-500 hover:text-blueGray-700 font-semibold">Telegram</a>.
                </td>
              </tr>
              
              <tr>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal p-4 text-left flex ml-3">
                  4
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-medium whitespace-nowrap p-4">
                  Adakah tulisan pendahuluan tentang Cryptocurrency?
                </td>
                <td className="border-t-0 px-6 align-top border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                  Ya ada, bisa kunjungi halaman <a href="https://ischain.id/publikasi" className="text-blue-500 hover:text-blueGray-700 font-semibold">Publikasi</a> di website kami.
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardFAQ.defaultProps = {
  color: "light",
};

CardFAQ.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
