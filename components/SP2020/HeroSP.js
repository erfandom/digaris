/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "../Navbars/IndexNavbar";

export default function Hero() {
  return (
    <>

    <IndexNavbar fixed />
    <   div className="relative pt-4 pb-4 flex content-center items-center justify-center h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/bg-artikel.png')",
            }}
          >
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-9/12 ml-auto mr-auto text-center">
                <div className="pr-0">
                  <h1 className="text-white font-semibold text-4xl">
                     Portal Kolaborasi Tim DKPMR LF SP-2020
                  </h1>
                  <p className="mt-4 text-md font-normal text-white">
                      Badan Pusat Statistik Provinsi Sulawesi Tenggara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <section className="pb-10 bg-white -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-600">
                      <i className="fa fa-folder"></i>
                    </div>
                    <h6 className="text-xl font-bold">Dokumentasi</h6> <hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Arsip Surat:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1ZU-KKrxxuCRywJKAOxL5b4kTMO9YzQ2l?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-envelope-open mr-1"></i> Surat Masuk 
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1ru0Nx7e1i0zSTvj-CMFHSURp7wmzvXQP?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-envelope mr-1"></i> Surat Keluar
                            </button></a>
                          </div> 
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Dokumentasi:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/15vkdj1YsedmuRkAib1HFB7skUgKSEenr?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-user mr-1"></i> Kegiatan Rapat 
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1vxeRB3b_a0bm1jgXzVlUpv7P4XITxcA0?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-file mr-1"></i> Kegiatan Non Rapat 
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/14kOZTCW7DH3fEzvS-ANhqPcBFKV4qVhh?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-camera mr-1"></i> Foto dan Video
                            </button></a>
                          </div><hr className="mt-2"></hr>
                    </div>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Dokumen Cetak:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1LA-WtBVs3FUzypiOASB5aIJdAsrYQzuP?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-book mr-1"></i> Buku Pedoman 
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/16sY7AbYbEKsI33YjBTxBoUBDe7LJZpuN?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-file mr-1"></i> Kuesioner LF
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1RarymQOkdLe_VX6Snm_hgdAn3CIy_dNZ?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-file mr-1"></i> Suplemen LF 
                            </button></a>
                          </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-500">
                      <i className="fa fa-bullhorn"></i>
                    </div>
                    <h6 className="text-xl font-bold">Publisitas</h6> <hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Pedoman:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1UuopNxPX8lg-ncTXteQCwb0RhKU1ErWQ?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-sticky-note mr-1"></i> Pedoman Publisitas 
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Timeline:</span>
                          <div>
                            <a href="https://docs.google.com/spreadsheets/d/1c8vddGkNDLbYLp0cQFyRvMmlaSxMnNgZ5u-PbpxeQUg/edit?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-calendar mr-1"></i> Jadwal Publisitas
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Konten Publisitas:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1Di0I97n6oZCLbgdZn8LRXQ2ZnTBz8fZy?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-home mr-1"></i> Luar Ruang
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1WRxtMN3QNxI7T3SirxpXBByU770FfEtK?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-globe mr-1"></i> Media Sosial
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/13OqvJYXqXZxGLsRwMSQYQHIlDbUER8B8?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-video mr-1"></i> Video Publisitas
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1-ClGWw02MRSlzzJ4Nvki6EYxmpgxRpQA?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-microphone mr-1"></i> Video Testimoni
                            </button></a>
                          </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h6 className="text-xl font-bold">Mitigasi Risiko</h6> <hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Mitigasi Risiko:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1MNTpeHsa9yzD2SWLHLjixC8lWY4pBehq?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-lightbulb mr-1"></i> Provinsi
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1ZdxaEC9wPyISM3AcFoOoQmspIYb4Vrak?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-lightbulb mr-1"></i> Kabupaten/Kota
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Materi:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1EwMPNFKRhOrpzGPp0Ue4qLudPY-NiBjG?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-lightbulb mr-1"></i> Capacity Building MR
                            </button></a>
                          </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  );
}