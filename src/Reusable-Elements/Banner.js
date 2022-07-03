import "../App.css";
import { useState } from "react";
import { XIcon, SpeakerphoneIcon } from "@heroicons/react/outline";

function Banner() {
  const [banner, setBanner] = useState(false);

  return (
    <>
      {banner ? (
        <></>
      ) : (
        <div className="bg-red-700 shadow-lg ">
          <div className="max-w-7xl mx-auto pt-1 pb-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-red-900 ">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white "
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">OMMC is back!</span>
                  <span className="hidden md:inline">
                    OMMC Year 2 has concluded, with submissions from more than 100 teams! 
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="https://artofproblemsolving.com/community/c5h2837951"
                  className="shadow-lg  flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-800 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only ">Dismiss</span>
                  <XIcon
                    onClick={() => setBanner(true)}
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
