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
                  <div className="inline-block">bychance</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Aarya Garimella, Angie Huang, Samuel Kretzschmar, William Hua
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">Illinois Seniors</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Krishna, Wilbert
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">The French Projection</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Solal P, Auguste Ramondou, Anatole Bouton, Serge Bidallier
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">NO I GOT A C</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Allan Yuan, Channing Yang, Ava Berenji, Jiahe Liu
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">Tractor </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Andrew Lin, Allen Wang, Linus Tang
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">l bozo + cope + ratio (lemma)</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Chris Chen, Sepehr Golsefidy, Rohan Mallick, Kai Yi
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-[#192231] dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">The Cheshire Kats</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Andrew Li, Aditya Pahuja, Noam Pasman, Daniel Potievsky
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">reddy to win</div>
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
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">Meal Enjoyers</div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Culver Kwan, Drew Michael Terren, Akash Thiagarajan, Sebastian Chase
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap "
                >
                  <div className="font-bold ml-2 inline-block">10. </div>{" "}
                  <div className="inline-block text-xs">
                    <span className="hidden md:inline">baad at sheep wars</span>
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Benjamin Fu, Alansha Jiang, Daniel Ge, Aryan Agrawal
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">10. </div>{" "}
                  <div className="inline-block text-xs">
                    RetiringHobbit
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Ben
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">12. </div>{" "}
                  <div className="inline-block text-xs">
                    Cousin Spuckers
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Lucas Qi, Tony Zhang, Milind Sharma, Tarun Rapaka
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">12. </div>{" "}
                  <div className="inline-block text-xs">
                    Yappy math club
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Alex Sun, Edward Chen, Edward Li, Raymond Zhao
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">14. </div>{" "}
                  <div className="inline-block text-xs">
                    FRIENDS
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Arnav Iyengar, Grisham Paimagam, Oron Wang, Weian Xie
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">14. </div>{" "}
                  <div className="inline-block text-xs">
                    Hwisoo Fan Club
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Eric Wang, Shixun Song, Yollengo Feng, Shengdao Ke
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">14. </div>{" "}
                  <div className="inline-block text-xs">
                    Untitled
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Zongshu Wu, Paixiao Seeluangsawa, Abby Trinh, Ivan Neduzhyi
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">17. </div>{" "}
                  <div className="inline-block text-xs">
                    OMC/PDX Mathletes A
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Anay Aggarwal, Arjun Agarwal, Shreyan Paliwal, Kai Yamashita
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">18. </div>{" "}
                  <div className="inline-block text-xs">
                    The Matthew-Maticians
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Kevin Yang, Thanh Can, Rachel Chen, Aryan Saha
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800">
                <th
                  scope="row"
                  className="sm:px-6 px-3 py-5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">19. </div>{" "}
                  <div className="inline-block text-xs">
                    Skibidi 四
                  </div>
                </th>
                <td className="sm:px-6 px-3 py-5">
                  Rohan Pavuluri, Aaryan Vaishya, Rohan Garg, Alan Cheng
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
