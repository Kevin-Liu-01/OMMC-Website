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
        "bg-slate-200 min-h-screen dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="testdocs22" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-slate-100 dark:bg-gray-800 duration-150 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2">
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white  ">
            OMMC 2022 Test Documents
          </div>
          <a href="/2022-leaderboard" className="lg:ml-auto mt-2 lg:mt-0">
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
              title="test2022"
              src="https://drive.google.com/file/d/1eE5VRCuH5qBoGlfqo1zarOPA0kiFSbsx/preview"
            />
          </div>
        </div>
      </section>
      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Tiebreaker
          </h1>
        </div>
      </header>
      <section className="rows-2">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <PDFViewer
              title="tiebreaker"
              src="https://drive.google.com/file/d/18gzfx_VjCUSvsEFsA8GsHUSwj2e4Gk1q/preview"
            />
          </div>
        </div>
      </section>

      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Solutions
          </h1>
        </div>
      </header>
      <section className="rows-2 ">
        <div className="max-w-7xl mx-auto py-3 pt-7 pb-7  sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <PDFViewer
              title="solutions"
              src="https://drive.google.com/file/d/1XqDo3fqmGLzZyswu7ohd0z7DJxBnDa5z/preview"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
