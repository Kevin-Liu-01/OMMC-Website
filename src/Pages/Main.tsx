import "../App.css";

import {
  ClockIcon,
  UserIcon,
  CheckIcon,
  GiftIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

function Main(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "min-h-screen drop-shadow-sm overflow-hidden "
      }
    >
      <Navbar page="main" dark={props.dark} setDark={props.setDark} />
      <Banner />

      <div className="relative bg-white dark:bg-gray-800 drop-shadow-md">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-800 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-1 px-4 sm:px-6 lg:px-8 "></div>

            <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-14 lg:px-8 py-4">
              <div className="sm:text-center lg:text-left">
                <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 sm:text-6xl sm:pb-3">
                  <span className=" tiny:text-[3rem] text-5xl sm:text-6xl inline lg:border-l-[10px] lg:pl-3 border-red-700 dark:border-red-900">
                    Welcome to
                  </span>{" "}
                  <span className="text-[5rem] tiny:text-[3.5rem] sm:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800  inline ">
                    OMMC
                  </span>
                  <div className="w-24 absolute h-40 ml-8 overflow-hidden tiny:hidden inline-block">
                    <div className=" h-24 bg-red-700 -rotate-45 transform origin-top-right"></div>
                  </div>
                </h1>
                <div className="border border-b-2 border-t-0 border-x-0 mt-3 mb-6 dark:border-gray-600"></div>
                <p className="pb-4 md:pb-0 mt-3  text-gray-500 dark:text-gray-400  sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Online Monmouth Math Competition, or OMMC, is a 501c3
                  accredited nonprofit organization which aims to give talented
                  high school and middle school students an exciting and
                  engaging way to develop their skills in mathematics. We
                  provide an annual original high-quality math competition, in
                  addition to various educational materials and a community
                  Discord server. Our competition is available to all students
                  who are 18 or younger.
                </p>
                <div className="mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-start ">
                  <div className="rounded-md shadow md:mr-4 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="https://artofproblemsolving.com/community/c5h2837951"
                      className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-red-700 to-red-800 md:py-4 md:text-lg md:px-10 select-none"
                    >
                      See our latest competition
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="/sample"
                      className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10 select-none duration-150"
                    >
                      See sample problems
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2  ">
          <div className="w-11 absolute overflow-hidden lg:hidden inline-block">
            <div className=" h-16 bg-white dark:bg-gray-800 rotate-45 transform origin-top-right"></div>
          </div>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full select-none"
            src="https://wallpaperaccess.com/full/931292.png"
            alt=""
          />
          <div className="w-11 absolute right-0 bottom-0 overflow-hidden lg:hidden inline-block">
            <div className=" h-16  bg-slate-100 dark:bg-gray-900 rotate-45 transform origin-bottom-left"></div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-slate-100 dark:bg-gray-900 relative z-20">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="md:grid grid-cols-4">
            <div>
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase ">
                Staff
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
                Who are we?
              </p>
              <p className="mt-4 mb-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 ">
                We are currently led by Evan Chang, Ishaan Akula, and Bill Fei,
                who serve as the directors.
              </p>
            </div>
            <div className="mt-8 ">
              <div className="absolute flex items-center justify-center mb-2 h-12 w-12 text-red-700">
                <CheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-[17px] text-gray-500 dark:text-gray-400 ">
                Our staff consists of highly qualified and experienced
                individuals who are highly committed to our cause of advancing
                math education.
              </p>
            </div>
            <div className="mt-8">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                <CheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-[17px] text-gray-500 dark:text-gray-400 ">
                Staff members have excelled at AMC 10/12, AIME, USAJMO and
                USAMO, and some members have attended the prestigious MOP summer
                program.
              </p>
            </div>
            <div className="mt-8">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                <CheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-[17px] text-gray-500 dark:text-gray-400 ">
                Our competition problems have been selectively written, chosen
                and reviewed by math students around the world to be original,
                creative, and inspirational.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex place-content-center bg-white dark:bg-gray-800">
        <div className="py-12 self-center md:mt-2 mb-2">
          <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
            <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="self-center ">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Competition
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300 ">
                How will it Work?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-400 ">
                <div className="md:mr-12">
                  Our current competition consists of 1 round of 25 questions
                  for a team of up to 4 people, administered over the span of 10
                  whole days, consisting of questions with similar difficulty as
                  those posed on the well-established MAA math competitions.
                </div>
              </p>
            </div>
          </div>
        </div>
        <main className="md:flex place-content-center">
          <div className=" self-center max-w-7xl mx-auto md:pt-6 pb-6 px-6 lg:px-8">
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-600 my-6">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <h3 className="text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 dark:from-red-700 dark:to-red-800 rounded-xl inline py-1 px-2">
                  Start
                </h3>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-gray-700  rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Late May - Early June
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Contest Dates
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  The OMMC contest is held.
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-gray-700 rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Early June
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  OMMC discussion opened
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Participants will be allowed to discuss the competition.
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-gray-700 rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Late June - Early July
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Conclusion of competition
                </h3>
                <p className="text-base font-normal text-gray-500  dark:text-gray-400">
                  Solutions are released, winners announced, and prizes sent
                  out.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <h3 className="text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 dark:from-red-700 dark:to-red-800 rounded-xl inline py-1 px-2">
                  End
                </h3>
              </li>
            </ol>
          </div>
        </main>
      </div>
      <div className="py-12 bg-slate-100 dark:bg-gray-900 align-center">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center md:grid md:grid-cols-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className="md:flex mb-5 col-span-1">
            <div className="lg:self-center">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Prizes
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
                What do Participants Gain?
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-5 col-span-2">
            <div className="flex absolute items-center justify-center h-12 w-12 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-xl">
              <GiftIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="ml-16 max-w-2xl  text-gray-500 dark:text-gray-400 ">
              Prizes shouldn’t be the main reason someone takes OMMC, but in
              previous years we have been sponsored by organizations such as
              AoPS, Maplesoft, and Wolfram Alpha, who have provided hundreds of
              dollars to top scoring competitors. We expect this year to be no
              different.
            </p>
          </div>
          <div className=" mt-5 col-span-2">
            <div className="flex absolute items-center justify-center h-12 w-12 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-xl">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="ml-16 max-w-2xl  text-gray-500 dark:text-gray-400 ">
              Students will have the opportunity to compete in teams, developing
              valuable teamwork and collaboration skills. In the competition,
              they will be able to solve thought-provoking, challenging
              mathematics questions, and will be able to use our educational
              materials and community Discord server.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-gray-800">
        <div className="grid grid-rows-2 md:grid-rows-1 sm:py-5 md:grid-cols-2 max-w-7xl mx-auto place-content-center px-4 md:px-8">
          <div className="md:ml-0 md:mr-24 mt-10 sm:my-10">
            <iframe
              title="DiscordLink"
              src="https://discord.com/widget?id=796756256022200350&theme=dark"
              className="drop-shadow-lg w-full h-full rounded-xl select-none"
              allowTransparency={true}
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>

          <div className="md:mr-10 place-content-center mt-8 md:mt-10 mb-10 ">
            <div className="mt-auto">
              <p className="border-l-[10px] pb-2 sm:pb-0 border-[#5865F2] pl-3 text-gray-900 text-[2rem] md:text-4xl leading-8 font-extrabold tracking-tight dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-[#5865F2] dark:to-[#3f4fc8] ">
                Join us on Discord!
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 ">
                We highly recommend competitors join our Community Discord for
                the latest updates on OMMC. There is no sign up process for OMMC
                this year.
              </p>
              <div>
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <ClockIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg  text-gray-500 dark:text-gray-400 mt-10">
                  We will be posting updates and announcements on the Discord,
                  so make sure to join! We also host special events in addition
                  to the standard competitions.
                </p>
              </div>
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <UserIcon className=" h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mt-10">
                  The community Discord is a great way to meet other OMMC
                  members and interact with the OMMC team. The Discord is a
                  great place to ask for help or solve a problem.
                </p>
              </dt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
