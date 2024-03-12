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

const REPSImages = [
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
            Rutgers Exposition in Problem Solving
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="md:grid-cols-6 flex-col flex md:grid gap-6">
          <div className="md:col-span-6 md:grid md:grid-cols-6 gap-4 text-gray-800 dark:text-gray-400 ">
            <div className="md:col-span-2 mb-4 md:mb-0 md:mr-2 flex justify-end items-end border border-gray-200 dark:border-gray-800 rounded-xl bg-center bg-cover bg-[url('/public/meme/meme-hero.jpg')]">
              <img
                src="/favicon.png"
                className="w-12 mt-36 md:mt-0 sm:w-24 m-4"
                alt="OMMC Logo"
              />
            </div>
            <div className="flex flex-col md:col-span-4 text-gray-900 dark:text-gray-200 gap-4">
              <div className="inline font-extrabold text-3xl lg:border-l-[10px] lg:pl-3 border-red-600 dark:border-red-600">
                What is REPS?
              </div>
              <div className="border border-b-2 border-t-0 border-x-0  dark:border-gray-700 duration-150"></div>
              <div className="relative">
                <div className="w-4 absolute  overflow-hidden   inline-block">
                  <div className="h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                </div>
                <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                    <UserGroupIcon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div>
                    This spring, OMMC will be hosting the Rutgers Expo in
                    Problem Solving (REPS) event, where we present various
                    speakers in mathematics, holding conferences and panels, and
                    provide a hub for people all over to learn and enjoy.
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-4 absolute  overflow-hidden   inline-block">
                  <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                </div>
                <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                    <VariableIcon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div>
                    Many previous OMMC events have all been online, due to the
                    COVID-19 pandemic. At OMMC, we are deeply passionate about
                    advancing math and problem solving education by creating
                    exciting, engaging, and inspirational events and resources.
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-4 absolute  overflow-hidden   inline-block">
                  <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                </div>
                <div className="ml-6 flex gap-4 text-gray-800 lg:items-center dark:text-gray-200 border-2  border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-center p-4 h-16 w-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white">
                    <LocationMarkerIcon
                      className="h-8 w-8"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    Starting in 2023, we began hosting in-person events in order
                    to reach and motivate people in our local community to
                    become better thinkers, and give them a magical experience
                    with mathematics that they will hopefully remember for a
                    lifetime.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 relative">
              <div className="border border-b-2 border-t-0 border-x-0  dark:border-gray-800 duration-150"></div>
              <div className="overflow-hidden dark:text-gray-200 border-2 mt-4 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-4">
                <p className="font-extrabold text-3xl  pb-2">Logistics</p>
                <p className="mb-3">
                  REPS 2024 will be held at the Science and Engineering Resource
                  Center at Rutgers University New Brunswick in Auditoriums
                  111,117,118, on April 7th, 2024, from 1-7PM EST. The address
                  is 96 Frelinghuysen Rd, Piscataway, NJ 08854.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <iframe
                    className="flex rounded-md overflow-hidden border-gray-200 dark:border-gray-900 border-2 col-span-1 h-72 sm:h-96 w-full"
                    title="REPS 2024 Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.3486121817082!2d-74.46399501907499!3d40.52261266929816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c70d74aba1dd%3A0x52c84edb693c6460!2sScience%20and%20Engineering%20Resource%20Center!5e0!3m2!1sen!2sus!4v1708738570047!5m2!1sen!2sus"
                    // style="border:0;"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <div className="flex rounded-md overflow-hidden border-gray-200 dark:border-gray-900 border-2 "></div> */}
                  <iframe
                    title="REPS 2024 Registration Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSey-grNhA5pzu7r_-c0YJtEVU6UI4mPlWQx7aOULYiBAiX0tA/viewform?embedded=true"
                    className="flex rounded-md overflow-hidden border-gray-200 dark:border-gray-800 border-2 col-span-1 h-72 sm:h-96 w-full bg-gray-200 dark:bg-gray-600"
                    width="640"
                    height="3814"
                  >
                    Loading…
                  </iframe>
                  <iframe
                    title={"REPS Itinerary"}
                    src={"/documents/REPS_Itinerary_1.pdf"}
                    className="h-72 sm:h-96 w-full border-2 border-gray-200 dark:border-gray-800 rounded-lg bg-gray-300 drop-shadow-lg col-span-1 sm:col-span-2"
                    allow="autoplay"
                  ></iframe>
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
              <div className="relative p-2 sm:p-4 bg-[url('/public/meme/meme-bg.png')] rounded-lg md:max-w-7xl h-[42rem]">
                <OMMCCarousel REPSImages={REPSImages} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
