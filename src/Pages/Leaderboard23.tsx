import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

function Leaderboard23(props) {
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
              OMMC 2023{" "}
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
                  <div className="inline-block">The Inkredibles</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Liam Reddy, Kiran Reddy, Jordan Lefkowitz, Aarush Khare
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥈 </div>{" "}
                  <div className="inline-block">stayhomedomikichus62</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Culver Kwan, Sebastian Chase, Michael Tarren, Chu Cheuk Hei
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥉 </div>{" "}
                  <div className="inline-block">red panda</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Andrew Lin, David Dong, Aaryan Vaishya, Feodor Yevtushenko
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">4. </div>{" "}
                  <div className="inline-block text-xs">amogus </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Rohan Garg, Alan Cheng, Andy Xu, Jonathan Du
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">5. </div>{" "}
                  <div className="inline-block text-xs">FRIENDS </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Weian Xie, Arnav Iyengar, Grisham Paimagam, Oron Wang
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">6. </div>{" "}
                  <div className="inline-block text-xs">Sillies</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Aditya Pahuja, Andrew Li, Mikayla Lin, Calvin Zhang
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">7. </div>{" "}
                  <div className="inline-block text-xs">PDX Mathletes</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Anay Aggarwal, Manu Isaacs, Shreyan Paliwal, Arjun Agarwal
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">8. </div>{" "}
                  <div className="inline-block text-xs">𝓑𝓲𝓼𝔀𝓪𝓭𝓮𝓿 𝓓𝓮𝓿 𝓡𝓸𝔂 </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Jiwu Jang, Joshua Rohyun Im
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">9. </div>{" "}
                  <div className="inline-block text-xs">omnomc </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Tony Zhang, Eric Ding, Christopher Sakaliyski, Grant Blitz
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">10. </div>{" "}
                  <div className="inline-block text-xs">
                    <span className="hidden md:inline">red pandamogus</span>
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Jiahe Liu, Allan Yuan, Channing Yang, Charles Zhang
                </td>
              </tr>
              <tr className="bg-white dark:bg-[#192231]">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">11. </div>{" "}
                  <div className="inline-block text-xs">
                    the quadratic rizzidues
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Victor Chen, Benny Wang, Evan Fan, Albert Lu
                </td>
              </tr>
              <tr className="bg-white dark:bg-[#192231]">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">12. </div>{" "}
                  <div className="inline-block text-xs">
                    I don’t like red pandas
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Lucas Qi, Milind Sharma, Alexander Toker-Katskee, Kyan Yang
                </td>
              </tr>
              <tr className="bg-white dark:bg-[#192231]">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">13. </div>{" "}
                  <div className="inline-block text-xs">
                    ᗢ MCAFEE ANTIVIRUS IS THE BEST
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Gary Jang, Carl Chen, Ethan Johnson, Melvin Jang
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard23;
