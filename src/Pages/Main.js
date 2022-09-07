import "../App.css";

import {
  ClockIcon,
  UserIcon,
  CheckIcon,
  GiftIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Navbar from "../Reusable-Elements/Navbar.js";
import Banner from "../Reusable-Elements/Banner.js";

function Main() {
  return (
    <div className="min-h-screen bg-slate-100  drop-shadow-sm">
      <Navbar page="main" />
      <Banner />

      <div className="relative bg-white drop-shadow-md">
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-1 px-4 sm:px-6 lg:px-8 "></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-14 lg:px-8 ">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-5xl tracking-tight font-extrabold text-gray-900  sm:text-6xl pb-3">
                  <span className=" inline">Welcome to</span>{" "}
                  <span className=" text-red-800 inline ">OMMC</span>
                </h1>
                <div className="border border-b-2 border-t-0 border-x-0 mt-3 mb-6"></div>
                <p className="mt-3  text-gray-500 sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Online Monmouth Math Competition, or OMMC, is a nonprofit
                  organization which aims to give talented high school and
                  middle school students an exciting and engaging way to develop
                  their skills in mathematics. We provide an annual original
                  high quality math competition, in addition to various
                  educational materials and a community Discord server. Our
                  competition is available to all students who are 18 or
                  younger.
                </p>
                <div className="mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-start ">
                  <div className="rounded-md shadow md:mr-4 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="https://artofproblemsolving.com/community/c5h2837951"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      Visit our AoPS
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 hover:scale-105 transform duration-150 ease-in-out ">
                    <a
                      href="/sample"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                    >
                      See sample problems
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
            src="https://wallpaperaccess.com/full/931292.png"
            alt=""
          />
        </div>
      </div>
      <div className="py-12 bg-slate-100 relative z-20  border">
        <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex">
            <div className="self-center">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Staff
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Who are we?
              </p>
              <p className="mt-4 mb-3 max-w-2xl text-xl text-gray-500 ">
                We are currently led by Evan Chang, Ishaan Akula, and Bill Fei,
                who serve as the directors.
              </p>
            </div>
            <div className="md:flex">
              <div className="mt-8">
                <div className="absolute flex items-center justify-center mb-2 h-12 w-12 rounded-md text-red-700 ">
                  <CheckIcon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-[17px] text-gray-500">
                  Our staff consists of highly qualified and experienced
                  individuals who are highly committed to our cause of advancing
                  math education.
                </p>
              </div>
              <div className="mt-8">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                  <CheckIcon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-[17px] text-gray-500">
                  Staff members have excelled at AMC 10/12, AIME, USAJMO and
                  USAMO, and some members have attended the prestigious MOP
                  summer program.
                </p>
              </div>
              <div className="mt-8">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                  <CheckIcon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="ml-16 max-w-2xl text-[17px] text-gray-500">
                  Our competition problems have been selectively written, chosen
                  and reviewed by math students around the world to be original,
                  creative, and inspirational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-content-center bg-white ">
        <div className="py-12 self-center mt-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="self-center ">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Competition
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How will it work?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto ">
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
        <main className="flex place-content-center ">
          <div className=" self-center max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <ol className="relative border-l border-gray-300 my-6">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <h3 className="text-lg font-semibold text-gray-900 ">Start</h3>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-800 ">
                  May 27 - June 5
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  Contest Dates
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500">
                  The OMMC contest will be held through these days.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-800  ">
                  June 6
                </time>
                <h3 className="text-lg font-semibold text-gray-900 ">
                  OMMC discussion opened
                </h3>
                <p className="text-base font-normal text-gray-500">
                  Participants will be allowed to discuss the competition.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none text-red-800  ">
                  Late June - Early July
                </time>
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Conclusion of competition
                </h3>
                <p className="text-base font-normal text-gray-500 ">
                  Solutions are released, winners announced, and prizes sent
                  out.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                <h3 className="text-lg font-semibold text-gray-900 ">End</h3>
              </li>
            </ol>
          </div>
        </main>
      </div>
      <div className="py-12 bg-slate-100 align-center border">
        <div className="justify-center flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex mb-5">
            <div className="self-center">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Prizes
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What do participants gain?
              </p>
            </div>
          </div>

          <div className="md:flex ">
            <div className="mt-5">
              <div className="ml-5 absolute items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                <GiftIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl  text-gray-500 ">
                Prizes shouldn’t be the main reason someone takes OMMC, but in
                previous years we have been sponsored by organizations such as
                AoPS, Maplesoft, and Wolfram Alpha, who have provided hundreds
                of dollars to top scoring competitors. We expect this year to be
                no different.
              </p>
            </div>
            <div className=" mt-5">
              <div className="ml-5 absolute items-center justify-center h-12 w-12 rounded-md text-red-700 ">
                <UsersIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl  text-gray-500">
                Students will have the opportunity to compete in teams,
                developing valuable teamwork and collaboration skills. In the
                competition, they will be able to solve thought-provoking
                challenging mathematics questions. They will also be able to
                reap the benefits of our educational materials and community
                Discord server.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-rows-1 sm:py-5 md:grid-cols-2 bg-white place-content-center px-10">
        <div className="md:ml-0 md:mr-10 my-10">
          <iframe
            title="DiscordLink"
            src="https://discord.com/widget?id=796756256022200350&theme=dark"
            class="shadow-lg w-full h-full rounded-xl"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>

        <div className="md:mr-10 ml-5 md:ml-0 place-content-center mt-10 mb-10 ">
          <div className="mt-auto">
            <p className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in touch
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
              We highly recommend competitors join our Community Discord for the
              latest updates on OMMC. There is no sign up process for OMMC this
              year.
            </p>
            <div>
              <div className="absolute mt-1 flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white ">
                <ClockIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-lg  text-gray-500 mt-10">
                Because the competition is untimed, we have chosen to let teams
                just fill out their registration information with their final
                submission. The test portal will be linked on this page during
                the testing period.
              </p>
            </div>
            <dt>
              <div className="absolute  flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white ">
                <UserIcon className=" h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-2xl text-lg text-gray-500 mt-10">
                Solo participants are allowed and will be treated simply as one
                man teams. They will be eligible for the same prizes as teams
                with multiple people.
              </p>
            </dt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
