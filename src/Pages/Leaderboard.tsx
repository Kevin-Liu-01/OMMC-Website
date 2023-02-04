import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

function Leaderboard(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "min-h-screen bg-slate-200 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="leaderboard" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className=" shadow-lg bg-slate-100 dark:bg-[#182133] duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white duration-150">
            <p className="text-red-700 dark:text-red-600 inline duration-150">
              OMMC 2022{" "}
            </p>{" "}
            Leaderboard
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto md:px-8 px-4 pb-10 mt-10 ">
        <div className="overflow-auto drop-shadow-lg rounded-2xl bg-slate-500">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 border-b dark:border-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
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
                  <div className="inline-block">The Nads</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Melvin Jang, Gary Jang, Ethan Johnson
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥈 </div>{" "}
                  <div className="inline-block">amogus</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Allan Yuan, Channing Yang, Yushen Li, Charles Zhang
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥉 </div>{" "}
                  <div className="inline-block">=A1/0 </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Advaith Avadhanam, Henrick Rabinovitz, Karthik Vedula,
                  Srinivas Arun
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">4. </div>{" "}
                  <div className="inline-block text-xs">cash or kredit </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Kiran Reddy, Liam Reddy, Aarush Khare, Jordan Lefkowitz
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">5. </div>{" "}
                  <div className="inline-block text-xs">Anonymous Team </div>
                </th>
                <td className="sm:px-6 px-3 py-5 text-gray-300 dark:text-gray-600">
                  Anonymous
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">6. </div>{" "}
                  <div className="inline-block text-xs">sarcastic pichus </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Ethan Lee, Sammy Ross, Lucas Qi, Alexander Toker-Katskee
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">7. </div>{" "}
                  <div className="inline-block text-xs">l'Internationale</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Neal Yan, Emily Yu, Pranav Choudhary, Lincoln Liu
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">8. </div>{" "}
                  <div className="inline-block text-xs">672+1586-1586=665 </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Feodor Yevtushenko, Arnav Iyengar, Jiahe Liu, Andrew Xie
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">9. </div>{" "}
                  <div className="inline-block text-xs">Blobcosy </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Ian Zhang, Aaron Li, Shrey Gupta, Olga Zhukova
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">10. </div>{" "}
                  <div className="inline-block text-xs">
                    <span className="hidden md:inline">
                      bluelinfish tries to beat teams
                    </span>
                    <span className="inline md:hidden">
                      bluelinfish tries to...
                    </span>
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">Andrew Lin</td>
              </tr>
              <tr className="bg-white dark:bg-[#192231]">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">11. </div>{" "}
                  <div className="inline-block text-xs">
                    Synthetic geo sucks{" "}
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">Peter Powell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
