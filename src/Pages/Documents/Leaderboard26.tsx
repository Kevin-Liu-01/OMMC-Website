import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

export default function Leaderboard24(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "min-h-screen bg-slate-100 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="leaderboard" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className=" shadow-lg bg-white dark:bg-[#182133] duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white duration-150">
            <p className="text-red-700 dark:text-red-600 inline duration-150">
              OMMC 2024{" "}
            </p>{" "}
            Leaderboard
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto md:px-8 px-4 pb-10 mt-10 ">
        <div className="overflow-auto drop-shadow-lg rounded-2xl bg-slate-500 border border-slate-300 dark:border-slate-700">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 border-b dark:border-gray-700 uppercase bg-slate-50 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="" className=" sm:px-6 px-3 py-4 ">
                  Team Name
                </th>
                <th scope="col" className="sm:px-6 px-3 py-4">
                  Team Members
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>
                  <div className="inline-block">joy=le </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Ryan Tang, David Fox, Yoll Feng, Aleksei Lopatin
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 🥈 </div>{" "}
                  <div className="inline-block"> Crystal Meth</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Reyaansh Agrawal, Arham Gada, Aritra Saha, Siddharth Singh
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 🥉 </div>{" "}
                  <div className="inline-block"> mmmpmmpmmpmmpmmpmmpmmp </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  James Stewart, Oron Wang, Arnav Iyengar, Benjamin Jump
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 4 </div>{" "}
                  <div className="inline-block"> 3 orz 1 norz</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Karam Gill, Rananjay Parmar, Neil Iyer, Maxwell Tsai
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 5 </div>{" "}
                  <div className="inline-block"> Bi-Coastal United </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Davis Liu, Yucheng Hu, Tattva Patel, Rabtej Kalra
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 5 </div>{" "}
                  <div className="inline-block"> Sigma </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  HasanBaddour, Batool Ali, Younes Mhrez, Ahmad Issa
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 7 </div>{" "}
                  <div className="inline-block"> pieceofpi </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Steve Cui
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 8 </div>{" "}
                  <div className="inline-block"> 4 Idiots </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Allen Tang, Alex Kong, Natalie Song, Ariana-Stefania Mocanu
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block"> 9  </div>{" "}
                  <div className="inline-block">  2026 OregOMMC A </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Garud Shah, John Kong, Vihaan Paliwal, Kevin Cheng
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">10 </div>{" "}
                  <div className="inline-block text-xs">
                    <span className="hidden md:inline"> Mathletes United</span>
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Johann Qiu, Ryan Kim, Jessie Li, Ayden Bi
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
