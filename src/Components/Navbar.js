import "../App.css";
import { Disclosure } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true, page: "main" },
  { name: "Staff", href: "/staff", current: true, page: "staff" },
  { name: "Sponsors", href: "/sponsors", current: true, page: "sponsors" },
  // {
  //   name: "Leaderboard",
  //   href: "/leaderboard",
  //   current: true,
  //   page: "leaderboard",
  // },
  {
    name: "Shop",
    href: "https://www.bonfire.com/store/ommc-merch/",
    current: true,
  },
  { name: "MEME", href: "/MEME", current: true, page: "meme" },

  { name: "POTM", href: "/problem-of-the-month", current: true, page: "potm" },

  // { name: "Portal", href: "/portal", current: true, page: },
  // { name: "Retreival", href: "/retreival", current: true, page: },
];

const solutions = [
  { name: "Sample Problems", href: "/sample", current: true, page: "samples" },
  {
    name: "OMMC 2022",
    href: "/2022-documents",
    current: true,
    page: "testdocs22",
  },
  {
    name: "OMMC 2023",
    href: "/2023-documents",
    current: true,
    page: "testdocs23",
  },
  {
    name: "OMMC AMC",
    href: "/ommc-amc",
    current: true,
    page: "amc",
  },
];

const mobileNavigation = [
  { name: "Home", href: "/", current: true, page: "main" },
  { name: "Staff", href: "/staff", current: true, page: "staff" },
  { name: "Sponsors", href: "/sponsors", current: true, page: "sponsors" },
  // {
  //   name: "Leaderboard",
  //   href: "/leaderboard",
  //   current: true,
  //   page: "leaderboard",
  // },
  {
    name: "Shop",
    href: "https://www.bonfire.com/store/ommc-merch/",
    current: true,
  },
  { name: "POTM", href: "/problem-of-the-month", current: true, page: "potm" },
  {
    name: "Monmouth Exploratory Math Expo",
    href: "/MEME",
    current: true,
    page: "meme",
  },
  { name: "Sample Problems", href: "/sample", current: true, page: "samples" },

  {
    name: "OMMC 2022",
    href: "/2022-documents",
    current: true,
    page: "testdocs22",
  },
  {
    name: "OMMC 2023",
    href: "/2023-documents",
    current: true,
    page: "testdocs23",
  },
  {
    name: "OMMC AMC",
    href: "/ommc-amc",
    current: true,
    page: "amc",
  },

  // { name: "Portal", href: "/portal", current: true, page: },
  // { name: "Retreival", href: "/retreival", current: true, page: },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar(props) {
  const [dropdown, dropController] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-900 border-0  border-b-red-700 border-b-8 z-20 transition-height duration-300 ease-in-out"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl py-3 mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 ">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transform duration-150 ease-in-out ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start ">
                <a
                  href="/"
                  className="flex-shrink-0 ml-6 lg:ml-0 flex items-center select-none transform duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    className="w-14 "
                    src="https://cdn.discordapp.com/attachments/1044744976942243880/1045383726756003880/OMMC-Logo_1.png"
                    alt="OMMCLogo"
                    href="/"
                  />
                  <div className="ml-2 my-2">
                    <span className="text-2xl font-[900] text-white dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-red-600 dark:via-red-600 dark:to-red-600 ">
                      OMMC
                    </span>
                    <div className="font-mono text-[0.6rem] text-gray-200 border text-center border-gray-600 rounded-full  bg-gradient-to-r from-gray-700 to-gray-800 block px-1">
                      Version 3.0
                    </div>
                  </div>
                </a>
                <div className="hidden my-auto lg:block md:ml-4 lg:ml-10 select-none">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.page === props.page
                            ? " text-white  border-0 border-y-2 border-b-red-700 border-t-gray-900 transform duration-150 ease-in-out "
                            : "text-gray-300 hover:bg-gray-800 hover:text-white rounded-t-md transform duration-150 ease-in-out border-red-800 border-t-2 border-t-gray-900 hover:border-b-2 hover:border-b-red-700",
                          "px-[10px] lg:px-3 py-2 text-xs md:text-sm lg:text-base font-medium rounded-t-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    {/*Dropdown*/}
                    <div className="relative">
                      <div
                        onClick={() => dropController(!dropdown)}
                        className={
                          dropdown
                            ? "px-3 py-2 lg:text-base text-sm font-medium text-white bg-gray-800 rounded-t-md transform duration-150 ease-in-out border-b-0 border-t-2 border-x-2 border-red-700"
                            : "px-3 py-2 lg:text-base text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transform duration-150 ease-in-out border-gray-800 border-b-2 border-t-2 border-x-2  hover:border-red-700"
                        }
                      >
                        <div>
                          <span className="md:hidden lg:inline">Documents</span>
                          <span className="lg:hidden md:inline">Docs</span>
                          {dropdown ? (
                            <ChevronDownIcon
                              className=" h-5 w-5 pt-1 pr-1 inline rotate-180 transform duration-150 ease-in-out"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDownIcon
                              className=" h-5 w-5 pb-1 pl-1 inline rotate-0 transform duration-150 ease-in-out"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </div>{" "}
                      {dropdown ? (
                        <div className="absolute  bg-gray-900 w-100 rounded-b-lg grid rows-2 overflow-hidden border-b-2 border-l-2 border-r-2 border-red-700">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.page === props.page
                                  ? " text-white  transform duration-150 ease-in-out bg-gray-700"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white transform duration-150 ease-in-out ",
                                "px-3 py-2 lg:text-base text-[0.75rem] font-medium text-center"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className=" flex-shrink-0 ml-auto hidden lg:flex justify-self-end items-center select-none">
                  <button
                    className="flex bg-gray-800 rounded-xl px-1 py-1 hover:bg-gray-700 duration-150 ease-in-out text-gray-400 hover:text-yellow-500"
                    onClick={() => props.setDark(!props.dark)}
                  >
                    <div className="h-9 w-9 flex items-center justify-center">
                      {props.dark ? (
                        <MoonIcon className="h-6 w-6  text-red-600"></MoonIcon>
                      ) : (
                        <SunIcon className="h-6 w-6 "></SunIcon>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              <div className="mr-2 flex-shrink-0 ml-auto flex lg:hidden justify-self-end items-center select-none">
                <button
                  className="flex bg-gray-800 rounded-xl px-1 py-1 hover:bg-gray-700 duration-150 ease-in-out text-gray-400 hover:text-gray-300"
                  onClick={() => props.setDark(!props.dark)}
                >
                  <div className="h-9 w-9 flex items-center justify-center">
                    {props.dark ? (
                      <MoonIcon className="h-6 w-6  text-red-600"></MoonIcon>
                    ) : (
                      <SunIcon className="h-6 w-6 "></SunIcon>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {mobileNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.page === props.page
                      ? " text-white  border-t-0 border-b-0 border-r-0 rounded border-l-4 border-red-700 bg-gradient-to-r from-gray-800 to-gray-900"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
