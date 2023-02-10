import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

export default function Sponsors(props) {
  return (
    <div className={props.dark ? "dark" : ""}>
      <div className="bg-gradient-to-b from-slate-200 to-slate-100 min-h-screen dark:from-gray-800 dark:to-gray-900 duration-150 ease-in-out">
        <Navbar dark={props.dark} setDark={props.setDark} />
        <Banner />
        <div className=" ">
          <header className="drop-shadow-lg bg-[url('https://wallpaper.dog/large/20468528.jpg')] bg-cover">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
              <h1 className="text-4xl font-extrabold text-white text-center">
                OMMC 2023 Sponsorship Prospectus
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
              <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-xl h-[100vh] dark:border-gray-700 dark:bg-gray-900 ">
                <div className="w-full h-full overflow-hidden">
                  <iframe
                    title="tiebreaker"
                    src="https://drive.google.com/file/d/1Qsa1P7rYnJSSYgbHgDKhULJZm0vhUU2L/preview"
                    className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-xl bg-gray-300 drop-shadow-lg"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
