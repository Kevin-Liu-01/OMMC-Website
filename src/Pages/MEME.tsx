import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import {
  UserGroupIcon,
  VariableIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import React from "react";
import OMMCCarousel from "../Components/Carousel";

// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const MEMEImages = [
  {
    src: "/meme/meme1.jpg",
    caption: "MEME Stage at Bell Works",
  },
  {
    src: "/meme/meme2.jpg",
    caption: "How to Learn (and love) Probabilistic Thinking",
  },
  {
    src: "/meme/meme3.jpg",
    caption: "The Beauty Of Math speaking virtually",
  },
  {
    src: "/meme/meme4.jpg",
    caption: "Students participate in the Estimathon",
  },
  {
    src: "/meme/meme5.jpg",
    caption: "The OMMC team and speakers at MEME!",
  },
];

export default function MEME(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150 "
      }
    >
      <Navbar page="meme" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-[url('/public/meme/meme-bg.png')] bg-cover">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Monmouth Exploratory Math Expo
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="md:grid-cols-6 flex-col flex md:grid gap-6">
          <div className="drop-shadow-lg md:col-span-2 flex justify-end items-end border border-gray-200 dark:border-gray-800 rounded-xl bg-center bg-cover bg-[url('/public/meme/meme-hero.jpg')]">
            <img
              src="/favicon.png"
              className="w-12 mt-36 md:mt-0 sm:w-24 m-4"
              alt="OMMC Logo"
            />
          </div>
          <div className="flex flex-col md:col-span-4 text-gray-900 dark:text-gray-200 gap-4">
            <div className="inline font-extrabold text-3xl lg:border-l-[10px] lg:pl-3 border-red-600 dark:border-red-600">
              What is MEME?
            </div>
            <div className="border border-b-2 border-t-0 border-x-0  dark:border-gray-800 duration-150"></div>
            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className="h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                  <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  Every spring, OMMC hosts the Monmouth Exploratory Math Expo
                  (MEME) event, where we present various speakers in
                  mathematics, holding conferences and panels, and provide a hub
                  for people all over to learn and enjoy.
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                  <VariableIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  Previous OMMC events have all been online, due to the COVID-19
                  pandemic. At OMMC, we are deeply passionate about advancing
                  math and problem solving education by creating exciting,
                  engaging, and inspirational events and resources.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-4 absolute  overflow-hidden   inline-block">
                <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
              </div>
              <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                  <LocationMarkerIcon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  This year, we hosted an in-person event in order to reach and
                  motivate people in our local community to become better
                  thinkers, and give them a magical experience with mathematics
                  that they will hopefully remember for a lifetime.
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 text-gray-800 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-[1rem] p-4 ">
            <div className=" text-gray-800 dark:text-gray-200">
              <p className="font-extrabold text-3xl lg:border-l-[10px] lg:pl-3 border-red-600 dark:border-red-600  mb-2">
                Monmouth Exploratory Math Exposition (MEME) 2023
              </p>
              <p className="mb-3">
                Last year in 2023, we held a similar in person event at a more
                local level. The Monmouth Exploratory Math Exposition 2023 was
                held at Bell Works, in Holmdel, on Sunday, April 2nd, 2023, from
                4-8 PM EST. Events included several breakout sessions and games
                like an Estimathon, and guest speakers included Dr. Min Xu, The
                Beauty Of Math, and our surprise impromptu speaker Po Shen Loh!
              </p>
              {/*Carousel*/}
              <div className="relative p-4 bg-[url('/public/meme/meme-bg.png')] rounded-lg md:max-w-7xl">
                <OMMCCarousel REPSImages={MEMEImages} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
