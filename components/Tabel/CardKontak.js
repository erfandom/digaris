import React from "react";
import PropTypes from "prop-types";


// components

export default function CardKontak({ color }) {
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
          {/* Kontak table */}
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
                  
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-md font-bold uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Kontak
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-md font-bold uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Klik
                </th>            
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4 text-right">
                  <i className="fa fa-envelope text-blue-500"></i>
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4">
                  Email
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                <a href="mailto:ischain@ischain.id" className="text-blue-500 hover:text-blueGray-700 font-semibold">ischain@ischain.id</a>
                </td>
              </tr>

              <tr>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4 text-right">
                  <i className="fab fa-whatsapp text-green-500"></i>
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4">
                  Whatsapp Group
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                <a href="https://chat.whatsapp.com/CqaHz7oTJ8W1BS1yPsTWZi" className="text-blue-500 hover:text-blueGray-700 font-semibold">WhatsApp Group ISCHAIN Lounge</a>
                </td>
              </tr>

              <tr>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4 text-right">
                  <i className="fab fa-telegram text-lightBlue-400"></i>
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4">
                  Telegram
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                <a href="https://t.me/ishainlounge" className="text-blue-500 hover:text-blueGray-700 font-semibold">Telegram ISCHAIN Lounge</a>
                </td>
              </tr>
              
              <tr>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4 text-right">
                  <i className="fab fa-instagram text-red-500"></i>
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-medium p-4">
                  instagram
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md font-normal felx flex-wrap p-4">
                <a href="https://instagram.com/ischain.id" className="text-blue-500 hover:text-blueGray-700 font-semibold">Instagram ISCHAIN</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardKontak.defaultProps = {
  color: "light",
};

CardKontak.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
