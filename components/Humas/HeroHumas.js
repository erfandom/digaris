/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import NavbarHumas from "../Navbars/NavbarHumas";

export default function HeroHumas() {
  return (
    <>

    <NavbarHumas fixed />
    <   div className="relative pt-4 pb-4 flex content-center items-center justify-center h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/bg-humas.jpg')",
            }}
          >
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-9/12 ml-auto mr-auto text-center">
                <div className="pr-0">
                  <h1 className="text-white font-semibold text-4xl">
                     Portal Kolaborasi Tim Humas
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
                        <span className="font-medium mb-2">Foto Pegawai:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1uWqOfa-k59MQBk1zbkRUoEVipQlkZ70P?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-crown mr-1"></i> Pimpinan BPS RI 
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1g-ZevOxIHHuqNsG7SddO7ZqAWLKJMkhG?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-crown mr-1"></i> Kepala BPS Se-Sultra
                            </button></a>
                          </div> 
                          <div>
                            <a href="https://drive.google.com/drive/folders/16-T33TZ0zBlxshWGZ8Hv9DeEwLcnmuuq?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-user mr-1"></i> Pegawai BPS Prov. Sultra
                            </button></a>
                          </div> 
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Dokumentasi (Foto dan Video):</span><br></br>
                        <span className="font-regular text-xs mb-2">Dokumentasi foto/video aktivitas dalam ruang, baik untuk keperluan filler videografi maupun sebagai laporan kegiatan dan publisitas media sosial</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1LoAMAY1wVLC4zXlw5l-tdlK66NuOIdj4?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-camera mr-1"></i> Lama: 2018-2021
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1Dy8hJzvZBN4claemUy4cUdcu3zZrmcai?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-camera mr-1"></i> Terbaru: 2022 
                            </button></a>
                          </div><hr className="mt-2"></hr>
                    </div>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Footage (Foto dan Video):</span><br></br>
                        <span className="font-regular text-xs mb-2">Footage adalah dokumentasi foto/video aktivitas luar ruang untuk keperluan filler videografi</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1Voj2KM2belvsxg5RhKSy4TJe9a8Y9iZC?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-video mr-1"></i> Provinsi  
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1FExhFfEVbnrdIHmRCZnfTzJM7T-ZSCp5?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-video mr-1"></i> Kabupaten/Kota
                            </button></a>
                          </div><hr className="mt-2"></hr>
                    </div>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Dokumentasi Tim Lain:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1vxeRB3b_a0bm1jgXzVlUpv7P4XITxcA0?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-camera mr-1"></i> SP 2020 LF (2022)
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/16bXOvKF_FyhPqfGzZ2O1Y1cmHkQ2j3rY?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-camera mr-1"></i> SP 2020 (SPO-Sept)
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1_9gNq-wbcaJohSSXxbF1SCACxzGecqTU?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-indigo-600 text-white active:bg-indigo-500 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-camera mr-1"></i> Pembangunan Zona Integritas
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
                    <h6 className="text-xl font-bold">Proyek Kolaborasi</h6> <hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Masterplan:</span>
                          <div>
                            <a href="https://docs.google.com/spreadsheets/d/1lVI_4KYW3fVJ6YlhY_KVhRpE6aDrxG3efZ8TWlhqnFY/edit?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-calendar mr-1"></i> Jadwal Publisitas
                            </button></a>
                          </div>
                          <div>
                            <a href="https://docs.google.com/spreadsheets/d/13KwxKd6571Q1Wq0Seoxb1swpCNYLAr55SY1WzEo4fE8/edit?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-bullhorn mr-1"></i> Rencana Kerja
                            </button></a>
                          </div>
                          <div>
                            <a href="https://docs.google.com/document/d/1gIVrHc7MaeILt19ab9iK6ws6L7v94CBtF9NFOASEWsY/edit?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-search mr-1"></i> Identifikasi Kegiatan Humas
                            </button></a>
                          </div>
                          <div>
                            <a href="https://docs.google.com/spreadsheets/d/1lVI_4KYW3fVJ6YlhY_KVhRpE6aDrxG3efZ8TWlhqnFY/edit?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-user mr-1"></i> Rapat Humas
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Feed Media Sosial</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1L72xEaTHxrj-RoJ1uEW2gwPdwqAVbdh0?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-image mr-1"></i> Arsip Postingan
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1g6NLRgMDp7hH-59P8fyBc36BKwoyuNMC?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-gear mr-1"></i> Template Postingan
                            </button></a>
                          </div>
                    </div>
                    <hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Videografi:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1_2xBm-b8e7PzmitBC6Oj-SBoXRwlCl0r?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-video mr-1"></i> Proyek Video
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1KabT0VH4LcXopc2jh49OUPplnb0f9e9s?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-teal-500 text-white active:bg-teal-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-music mr-1"></i> Lagu Operator
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
                    <h6 className="text-xl font-bold">Press Release</h6> <hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Administrasi:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1FIRIjZEsXy9TfSnP1poZbP5MCAklGvOC?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-file mr-1"></i> Undangan Rilis
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1oM7TlcYDYp3nKUWzuWwk0XnQ-lpAnfk9?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-pencil mr-1"></i> Daftar Hadir
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Pengumuman Rilis:</span>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1_DcgPiqKO4BYmS3i7io2jq_fqdNPQtZN?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-image mr-1"></i> Poster Vertikal (1080x1350 px)
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/13dj2pVLMWNNEvtdJYTkOn5s1Cnlo6Dt8?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fab fa-youtube mr-1"></i> Thumbnail Youtube
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/1nUbcCXamU-AzbNCAynFh2-FRE3SLQoYe?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-gear mr-1"></i> Template Pengumuman
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/186pmP6lEhKKSa_6xoLATgIzv9AAiQivt?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-gear mr-1"></i> Template Rilis OBS 
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Infografis:</span>
                        <div>
                            <a href="https://drive.google.com/drive/folders/19ICdXMzZIyi2bUlvJd4HbA6Q2lF7kS54?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-image mr-1"></i> Infografis Medsos
                            </button></a>
                          </div>
                          <div>
                            <a href="https://drive.google.com/drive/folders/19MqJys2eVpIOdwiCJyv0322TbZSHYJBM?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-gear mr-1"></i> Template Infografis
                            </button></a>
                          </div>
                    </div><hr className="mt-2"></hr>
                    <div className="text-md mt-4">
                        <span className="font-medium mb-2">Media Massa</span>
                        <div>
                            <a href="https://drive.google.com/drive/folders/1TWKjR8zAWZj09_NCiXVmz2R1wwOg-Ah3?usp=sharing" target="_blank">
                            <button
                            className="w-10/12 mx-auto bg-orange-500 text-white active:bg-orange-400 text-md font-medium px-3 
                            py-1 rounded-full outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"> 
                            <i className="fa fa-image mr-1"></i> Kliping Berita
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