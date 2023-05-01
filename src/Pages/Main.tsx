import "../App.css";

import {
  ClockIcon,
  UserIcon,
  CheckIcon,
  GiftIcon,
  UsersIcon,
  ArrowSmRightIcon,
  BookOpenIcon,
  LightningBoltIcon,
  UserGroupIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

function Main(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen overflow-hidden dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="main" dark={props.dark} setDark={props.setDark} />
      <Banner />

      <div className="relative duration-150">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 duration-150 2xl:pb-20 lg:pb-12 lg:max-w-[44rem] lg:w-full ">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-56 text-white  duration-150 dark:text-gray-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-1 px-4 sm:px-6 lg:px-8 "></div>

            <main className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 2xl:mt-14 lg:mt-6 lg:px-8 py-3">
              <div className="relative">
                <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-transparent  sm:text-6xl sm:pb-3">
                  <span className=" duration-150 tiny:text-[3rem] text-4xl sm:text-6xl inline lg:border-l-[10px] lg:pl-3 border-red-700 dark:border-red-700 bg-clip-text bg-gradient-to-l from-red-600 via-red-700 to-red-700">
                    Welcome to{" "}
                  </span>
                  <span className="text-[5rem] tiny:text-[3.5rem] sm:text-5xl font-[900] text-transparent bg-clip-text bg-gradient-to-r from-red-700 dark:from-red-600 to-red-700 dark:to-red-600  inline ">
                    OMMC
                  </span>
                  <div className="w-24 absolute h-40 ml-8 overflow-hidden tiny:hidden inline-block">
                    <div className=" h-24 bg-red-700 -rotate-45 transform origin-top-right"></div>
                  </div>
                </h1>
                <div className="border border-b-2 border-t-0 border-x-0 mt-3 mb-6 dark:border-gray-800 duration-150"></div>
                <p className=" duration-150 pb-4 md:pb-0 mt-3 text-gray-500 dark:text-gray-400  z-10 relative sm:mt-5 text-md 2xl:text-lg  sm:mx-auto md:mt-5 lg:mx-0">
                  <div className="w-4 absolute  overflow-hidden   inline-block">
                    <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="ml-6 mb-4  duration-150 lg:mr-6 bg-gray-100 border-2 border-gray-200 dark:border-[#182133] dark:bg-[#1d263a]  rounded-xl p-2">
                    <span className="dark:text-gray-300 font-semibold  duration-150">
                      Online Monmouth Math Competition
                    </span>
                    , or{" "}
                    <span className="dark:text-gray-300 font-semibold  duration-150">
                      OMMC
                    </span>
                    , is a 501c3 accredited nonprofit organization which aims to
                    give talented high school and middle school students an
                    exciting and engaging way to develop their skills in
                    mathematics.{" "}
                  </div>
                  <div className="w-4 absolute  overflow-hidden   inline-block">
                    <div className=" h-16 bg-red-600 dark:bg-red-700 rotate-45 transform origin-top-left"></div>
                  </div>
                  <div className="ml-6  duration-150 lg:mr-6 bg-gray-100 border-2 border-gray-200 dark:border-[#182133] dark:bg-[#1d263a] rounded-xl p-2 ">
                    We provide an annual{" "}
                    <span className="dark:text-gray-300 font-semibold  duration-150">
                      original high-quality math competition,
                    </span>{" "}
                    in addition to various educational materials and a community{" "}
                    <span className="dark:text-gray-300 font-semibold  duration-150">
                      Discord server
                    </span>
                    . Our competition is available to all students who are 18 or
                    younger.
                  </div>
                </p>
                <div className="mt-5 sm:mt-12 sm:flex ">
                  <div className="sm:mr-4 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="https://artofproblemsolving.com/community/c5h2837951"
                      className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                      rounded-xl shadow text-white bg-gradient-to-r from-red-700 to-red-800 md:py-4 md:text-lg select-none"
                    >
                      See our latest competition{" "}
                      <ArrowSmRightIcon className="h-5 w-5 my-auto ml-2"></ArrowSmRightIcon>
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-1 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="/sample"
                      className="shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-red-700 dark:text-red-800 bg-red-100 dark:bg-red-200 hover:bg-red-200 dark:hover:bg-red-300 md:py-4 md:text-lg select-none duration-150"
                    >
                      See sample problems{" "}
                      <BookOpenIcon className="h-5 w-5 my-auto ml-2"></BookOpenIcon>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900 ">
          <div className="w-11 absolute overflow-hidden lg:hidden inline-block">
            <div className="h-16 bg-white dark:bg-gray-900 rotate-45 transform origin-top-right"></div>
          </div>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full select-none lg:dark:opacity-60 "
            src="https://wallpaperaccess.com/full/931292.png"
            alt="Formulas"
            loading="lazy"
          />

          <div className="absolute left-0 right-0 lg:right-1/2 xl:right-3/4 top-0 bottom-0 inset-0 opacity-[10%] transform-gpu animate-blob1 rounded-full blur-2xl bg-red-900 "></div>
          <div className="w-11 absolute right-0 bottom-0 overflow-hidden lg:hidden inline-block">
            <div className=" h-16  bg-slate-100 dark:bg-[#182133] rotate-45 transform origin-bottom-left"></div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-slate-100 dark:bg-[#182133] relative z-20 duration-150">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="lg:grid grid-cols-4">
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
            <div className="mt-8 flex bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <div className="absolute flex items-center justify-center mb-2 h-12 w-12 text-red-700">
                <CheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className=" ml-16 max-w-2xl text-[17px] text-gray-500 dark:text-gray-400 pr-2">
                Our staff consists of highly qualified and experienced
                individuals who are committed to our cause of advancing math
                education.
              </p>
            </div>
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                <CheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-[17px] text-gray-500 dark:text-gray-400 pr-2">
                Staff members have excelled at AMC 10/12, AIME, USAJMO and
                USAMO, and some have also attended the MOP program.
              </p>
            </div>
            <div className="mt-8 bg-[#fcfeff] dark:bg-[#222d41] rounded-xl pr-2 py-3 md:ml-5">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                <CheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-[17px] text-gray-500 dark:text-gray-400 pr-2">
                Our competition problems have been selectively written, chosen
                and reviewed to be original, creative, and inspirational.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex place-content-center">
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
                  Our competition has two rounds. The main round, open to teams
                  of up to 4, has 25 questions over 10 days, consisting of
                  questions similar in difficulty to well-established MAA math
                  competitions. Top teams advance to the final round, where they
                  solve 10 challenging proof questions over 4 days.
                </div>
              </p>
            </div>
          </div>
        </div>
        <main className="md:flex place-content-center">
          <div className=" self-center max-w-7xl mx-auto md:pt-6 pb-6 px-6 lg:px-8">
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-600 my-6">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <h3 className="text-lg font-semibold text-white bg-gradient-to-tr from-red-500 to-red-700 dark:from-red-700 dark:to-red-800 rounded-xl inline py-1 px-2">
                  Start
                </h3>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  May 12th - May 24th
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Main Round
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  The Main Round of the contest is held {"(25 questions)"}
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  May 26th - May 29th
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Final Round
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  The Final Round of the contest is held
                  {" (10 questions, proof)"}
                </p>
              </li>
              <li className="mb-10 ml-4 text-white bg-gray-100 dark:bg-[#1d263a] border-2 border-gray-200 dark:border-[#182133] rounded-xl p-2">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900 "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-700 dark:text-red-600">
                  Late June - Early July
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 ">
                  Conclusion of Competition
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500  dark:text-gray-400">
                  Discussion opened. Solutions released, winners announced,
                  <div>and prizes sent out to winners.</div>
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-[0.415rem] border border-white dark:border-gray-900  "></div>
                <h3 className="text-lg font-semibold text-white bg-gradient-to-tr from-red-500 to-red-700 dark:from-red-700 dark:to-red-800 rounded-xl inline py-1 px-2">
                  End
                </h3>
              </li>
            </ol>
          </div>
        </main>
      </div>
      <div className="py-12 bg-slate-100 dark:bg-[#182133] align-center duration-150">
        <div className="w-4 absolute ml-[-5px] overflow-hidden lg:hidden inline-block">
          <div className=" h-16 bg-red-700 rotate-45 transform origin-top-left"></div>
        </div>
        <div className="justify-center lg:grid lg:grid-cols-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
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

          <div className="mt-8 md:mt-5 col-span-2 rounded-xl bg-[#fcfeff] dark:bg-[#212c42] p-3">
            <div className="flex absolute items-center justify-center h-12 w-12 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl">
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
          <div className=" mt-5 col-span-2 rounded-xl bg-[#fcfeff] dark:bg-[#212c42] p-3 ">
            <div className="flex absolute items-center justify-center h-12 w-12 text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="ml-16 max-w-2xl  text-gray-500 dark:text-gray-400">
              Students will have the opportunity to compete in teams, developing
              valuable teamwork and collaboration skills. In the competition,
              they will be able to solve thought-provoking, challenging
              mathematics questions, and will be able to use our educational
              materials and community Discord server.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="md:grid grid-rows-2 md:grid-rows-1 sm:py-5 md:grid-cols-2 max-w-7xl mx-auto place-content-center px-4 md:px-8 md:pt-0 pt-4">
          <div className="md:ml-0 md:mr-24 mt-10 sm:my-10">
            <iframe
              title="DiscordLink"
              src="https://discord.com/widget?id=796756256022200350&theme=dark"
              className="drop-shadow-lg w-full h-full rounded-xl select-none min-h-[25rem]"
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
              <div className="flex rounded-xl bg-gray-100 dark:bg-[#1d263a] p-3 mt-8 border-[1.5px] border-gray-200 dark:border-[#182133]">
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <ClockIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg  text-gray-500 dark:text-gray-400">
                  We will be posting updates and announcements on the Discord,
                  so make sure to join! We also host special events in addition
                  to the standard competitions.
                </p>
              </div>
              <div className="flex rounded-xl bg-gray-100 dark:bg-[#1d263a] p-3 mt-6 border-[1.5px] border-gray-200 dark:border-[#182133]">
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-[#5865F2] to-[#3f4fc8]">
                  <UserIcon className=" h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
                  The community Discord is a great way to meet other OMMC
                  members and interact with the OMMC team. The Discord is a
                  great place to ask for help or solve a problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 dark:bg-[#182133] pb-4 md:pb-0">
        <div className="md:grid grid-rows-2 md:grid-rows-1 sm:py-5 md:grid-cols-2 max-w-7xl mx-auto place-content-center px-4 md:px-8 md:pt-0 pt-4">
          <div className="md:mr-10 place-content-center mt-8 md:mt-10 mb-10">
            <div className="mt-auto">
              <p className="border-l-[10px] border-red-600 pl-3  pb-2 sm:pb-0 text-gray-900 text-[2rem] md:text-4xl leading-8 font-extrabold tracking-tight dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-red-600 dark:to-red-700 ">
                OMMC Atlas
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
                OMMC Atlas is a comprehensive database of all OMMC Year 1
                questions. Use it to practice and prepare for your next OMMC
                competition!
              </p>
              <div className="flex rounded-xl  bg-[#fcfeff] dark:bg-[#212c42] p-3 mt-8 border-[1.5px] border-gray-200 dark:border-[#182133]">
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br  from-red-600 to-red-700">
                  <LightningBoltIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg  text-gray-500 dark:text-gray-400">
                  OMMC Atlas is lightning-fast when it comes to studying and
                  preparing for the OMMC competition. Stay ahead of the game
                  with the latest OMMC Year 1 materials.
                </p>
              </div>
              <div className="flex rounded-xl  bg-[#fcfeff] dark:bg-[#212c42] p-3 mt-6 border-[1.5px] border-gray-200 dark:border-[#182133]">
                <div className="absolute flex items-center justify-center h-12 w-12  text-white rounded-xl mb-4 bg-gradient-to-br from-red-600 to-red-700">
                  <UserGroupIcon className=" h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
                  OMMC Atlas is a community-driven resource, with contributions
                  from OMMC competitors and organizers alike. Join the community
                  and start contributing today!
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://ommc-atlas.vercel.app/"
            className="relative flex justify-center items-center md:mx-10 p-4 md:p-8 rounded-2xl md:rounded-3xl mt-10 sm:my-10 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 dark:from-red-900 dark:via-red-700 dark:to-red-500 duration-150 ease-in-out drop-shadow-md"
          >
            <img
              src="/ommc-atlas.png"
              alt="OMMC Atlas"
              className="h-full w-full object-contain md:object-cover rounded-lg "
            />{" "}
            <div className="absolute h-full w-full flex justify-end items-end pr-4 pb-4">
              <a href="https://ommc-atlas.vercel.app/">
                <button className="flex flex-row items-center relative z-10 text-sm rounded-lg py-1 px-2 dark:text-white font-semibold bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:opacity-70 duration-150">
                  Visit OMMC Atlas <LinkIcon className="h-4 w-4 ml-2" />
                </button>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
