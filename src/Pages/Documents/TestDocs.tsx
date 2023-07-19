import "../../App.css";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import React from "react";

function TestDocs(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-200 min-h-screen dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="testdocs" dark={props.dark} setDark={props.setDark} />
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
      <main className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900">
              <div className=" w-full h-full overflow-hidden">
                <iframe
                  title="test"
                  src="https://drive.google.com/file/d/1eE5VRCuH5qBoGlfqo1zarOPA0kiFSbsx/preview"
                  className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-lg bg-gray-300 drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
      </main>
      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Tiebreaker
          </h1>
        </div>
      </header>
      <main className="rows-2">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900 ">
              <div className="w-full h-full overflow-hidden">
                <iframe
                  title="tiebreaker"
                  src="https://drive.google.com/file/d/18gzfx_VjCUSvsEFsA8GsHUSwj2e4Gk1q/preview"
                  className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-lg bg-gray-300 drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
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
      </main>
    </div>
  );
}

export default TestDocs;
