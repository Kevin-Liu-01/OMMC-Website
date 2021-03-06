import "../App.css";
import Navbar from "../Reusable-Elements/Navbar.js";
import Banner from "../Reusable-Elements/Banner.js";

function Leaderboard() {
  return (
    <div className="bg-slate-200 ">
      <Navbar page="leaderboard" />
      <Banner />
      <header className=" shadow-lg bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            OMMC 2022 Leaderboard
          </h1>
        </div>
      </header>
      <div className="min-h-screen max-w-7xl mx-auto px-4 bg-slate-200 mt-10 ">
        <div className="overflow-x-auto drop-shadow-lg sm:rounded-lg bg-slate-500">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 border-b uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className=" px-6 py-3">
                  Team Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Team Members
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="text-lg inline-block">🥇 </div>{" "}
                  <div className="inline-block">The Nads</div>
                </th>
                <td className="px-6 py-4">
                  Melvin Jang, Gary Jang, Ethan Johnson
                </td>
              </tr>
              <tr className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="text-lg inline-block">🥈 </div>{" "}
                  <div className="inline-block">amogus</div>
                </th>
                <td className="px-6 py-4">
                  Allan Yuan, Channing Yang, Yushen Li, Charles Zhang
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="text-lg inline-block">🥉 </div>{" "}
                  <div className="inline-block">=A1/0 </div>
                </th>
                <td className="px-6 py-4">
                  Advaith Avadhanam, Henrick Rabinovitz, Karthik Vedula,
                  Srinivas Arun
                </td>
              </tr>
              <tr className="bg-gray-100 border-b dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">4. </div>{" "}
                  <div className="inline-block">cash or kredit </div>
                </th>
                <td className="px-6 py-4">
                  Kiran Reddy, Liam Reddy, Aarush Khare, Jordan Lefkowitz
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">5. </div>{" "}
                  <div className="inline-block">Anonymous Team </div>
                </th>
                <td className="px-6 py-4 text-gray-300">Anonymous</td>
              </tr>
              <tr className="bg-gray-100 border-b dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">6. </div>{" "}
                  <div className="inline-block">sarcastic pichus </div>
                </th>
                <td className="px-6 py-4">
                  Ethan Lee, Sammy Ross, Lucas Qi, Alexander Toker-Katskee
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">7. </div>{" "}
                  <div className="inline-block">l'Internationale</div>
                </th>
                <td className="px-6 py-4">
                  Neal Yan, Emily Yu, Pranav Choudhary, Lincoln Liu
                </td>
              </tr>
              <tr className="bg-gray-100 border-b dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">8. </div>{" "}
                  <div className="inline-block">672+1586-1586=665 </div>
                </th>
                <td className="px-6 py-4">
                  Feodor Yevtushenko, Arnav Iyengar, Jiahe Liu, Andrew Xie
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">9. </div>{" "}
                  <div className="inline-block">Blobcosy </div>
                </th>
                <td className="px-6 py-4">
                  Ian Zhang, Aaron Li, Shrey Gupta, Olga Zhukova
                </td>
              </tr>
              <tr className="bg-gray-100 border-b dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">10. </div>{" "}
                  <div className="inline-block">
                    bluelinfish tries to beat teams{" "}
                  </div>
                </th>
                <td className="px-6 py-4">Andrew Lin</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <div className="font-bold ml-2 inline-block">11. </div>{" "}
                  <div className="inline-block">Synthetic geo sucks </div>
                </th>
                <td className="px-6 py-4">Peter Powell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
