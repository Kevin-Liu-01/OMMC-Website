import "./App.css";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  SpeakerphoneIcon,
  ClockIcon,
  UserIcon,
  CheckIcon,
  GiftIcon,
  UsersIcon,
} from "@heroicons/react/outline";

function Sample() {
  return (
    <>
      <div className="bg-red-700">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-red-900">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">OMMC is back!</span>
                <span className="hidden md:inline">
                  Big news! OMMC is back for its second year this May.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://artofproblemsolving.com/community/c5h2837951"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-800 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Sample Problems</h1>
        </div>
      </header>
      <main className="rows-2 bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 rounded-lg h-96">
                <iframe
                  src="https://drive.google.com/file/d/1p3RhXHcfPYCvm0oAAYodsUujbMPVwOR8/preview"
                  class="w-full h-full"
                  allow="autoplay"
                ></iframe>{" "}
                
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 rounded-lg h-96">
                <iframe
                  src="https://drive.google.com/file/d/1VWXcQy5waWyRwuG8J64LxkJUETCPTvC4/preview"
                  class="w-full h-full"
                  allow="autoplay"
                ></iframe>{" "}
                
            </div>
          </div>
        </div>
      </main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 ">Solutions</h1>
        </div>
      </header>
      <main className="rows-2 bg-slate-200">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 rounded-lg h-96">
                <iframe
                  src="https://drive.google.com/file/d/1CZKocvVETJW7p0_bQLMWfkWCo8kEuJYr/preview"
                  class="w-full h-full"
                  allow="autoplay"
                ></iframe>{" "}
                
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 rounded-lg h-96">
                <iframe
                  src="https://drive.google.com/file/d/1NDweAK-Os3m9M4b3Pp2Mf_x7wDUTjPsr/preview"
                  class="w-full h-full"
                  allow="autoplay"
                ></iframe>{" "}
                
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sample;
