import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

export default function NotFound(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-200 min-h-screen dark:bg-gray-900"
      }
    >
      <Navbar page="" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center md:text-left md:pt-24">
        <div className="grid md:grid-cols-2 md:gap-8">
          <div className="my-auto ">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white pb-6 lg:pb-10">
              This page doesn't exist!
            </div>
            <div className="text-lg lg:text-2xl md:max-w-xl font-semibold text-gray-800 dark:text-gray-300 pb-4 lg:pb-8">
              Sorry about that! Please visit our homepage to get to where you
              want to go.
            </div>
            <a href="/" className=" md:mr-4 ">
              <button className="hover:scale-105 transform duration-150 ease-in-out px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 md:py-4 md:text-lg md:px-10 select-none">
                Back to home
              </button>
            </a>
          </div>
          <div className="relative md:mt-0 mt-12">
            <img
              src="https://cdn.discordapp.com/attachments/1051864478918131732/1070074375694450808/nVLtbk0czrH8.png"
              className="select-none w-72 md:w-96 mx-auto object-contain relative z-10"
              alt="404"
            />
            <div className="absolute left-0 right-0 top-0 bottom-0 inset-0 opacity-[15%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-400 dark:bg-red-800 "></div>
          </div>
        </div>
      </header>
    </div>
  );
}
