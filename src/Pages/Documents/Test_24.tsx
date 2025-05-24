import "../../App.css";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import PDFViewer from "../../Components/PDFViewer";
import React from "react";

export default function TestDocs(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-100 min-h-screen dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="testdocs24" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-white dark:bg-gray-800 duration-150 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2">
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white  ">
            OMMC 2024 Test Documents
          </div>
          <a href="/2024-leaderboard" className="lg:ml-auto mt-2 lg:mt-0">
            <button className="bg-red-700 hover:bg-red-800 rounded-xl   hover:scale-105 duration-150 text-white font-bold py-2 px-4">
              See the leaderboard
            </button>
          </a>
        </div>
      </header>
      <section className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <PDFViewer
              title="test"
              src="https://drive.google.com/file/d/1y47bwhJ2j5s-AfX_hhGP8VhlxO12FZq_/view?usp=sharing"
            />
          </div>
        </div>
      </section>
      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Final Round
          </h1>
        </div>
      </header>
      <section className="rows-2">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <PDFViewer
              title="final_round"
              src="https://drive.google.com/file/d/1Zg9y0NW_Tx3Y_gROuUPNz1cS6rjZNr_T/view?usp=sharing"
            />
          </div>
        </div>
      </section>

      {/* <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Solutions
          </h1>
        </div>
      </header>
      <main className="rows-2 ">
        <div className="max-w-7xl mx-auto py-3 pt-7 pb-7  sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900 ">
              <div className=" w-full h-full overflow-hidden">
                <iframe
                  title="solutions"
                  src="https://drive.google.com/file/d/1XqDo3fqmGLzZyswu7ohd0z7DJxBnDa5z/preview"
                  className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-lg bg-gray-300 drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
}
