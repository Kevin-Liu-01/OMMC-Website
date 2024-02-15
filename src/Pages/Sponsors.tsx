import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

const goldSponsors = [
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
];

const silverSponsors = [
  {
    id: 1,
    href: "https://www.janestreet.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/760189295067004962/976149016087756800/unknown.png",
    imageAlt: "Jane Street",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
];

const bronzeSponsors = [
  {
    id: 1,
    href: "https://www.sparc.camp/",
    imageSrc: "/sponsors/sparc.webp",
    imageAlt: "Sparc",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
  },
];

export default function Sponsors(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-100 min-h-screen dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="sponsors" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="shadow-lg bg-white dark:bg-[#182133] duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Sponsors
          </h1>
        </div>
      </header>
      <div className="grid grid-rows-3 gap-4 max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="p-4 bg-gradient-to-r from-amber-400 to-amber-300 rounded-2xl drop-shadow-lg">
          <h3 className="pb-4 text-3xl font-extrabold text-gray-800">
            Gold Tier
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
            {goldSponsors.map((sponsor) =>
              sponsor.id !== "empty" ? (
                <a key={sponsor.id} href={sponsor?.href} className="group  ">
                  <div className="bg-amber-500 bg-opacity-50 flex self-center w-full items-center  align-center justify-center group-hover:scale-[1.02] transform duration-150 ease-in-out rounded-lg overflow-hidden object-contain">
                    <img
                      src={sponsor.imageSrc}
                      alt={sponsor.imageAlt}
                      className="w-64 h-36 md:h-40 object-contain rounded-xl"
                    />
                  </div>
                </a>
              ) : (
                <div className="bg-amber-500 bg-opacity-50 flex self-center w-full items-center h-36 md:h-40 align-center justify-center rounded-lg overflow-hidden object-contain"></div>
              )
            )}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-indigo-200 to-indigo-100 rounded-2xl drop-shadow-lg">
          <h3 className="text-3xl font-extrabold text-gray-800 pb-4">
            Silver Tier
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
            {silverSponsors.map((sponsor) =>
              sponsor.id !== "empty" ? (
                <a key={sponsor.id} href={sponsor.href} className="group  ">
                  <div className="bg-indigo-300 bg-opacity-50 flex self-center w-full items-center  align-center justify-center group-hover:scale-[1.02] transform duration-150 ease-in-out rounded-lg overflow-hidden object-contain">
                    <img
                      src={sponsor?.imageSrc}
                      alt={sponsor?.imageAlt}
                      className="w-64 h-36 md:h-40 object-contain rounded-xl"
                    />
                  </div>
                </a>
              ) : (
                <div className="bg-indigo-300 bg-opacity-50 flex self-center w-full items-center h-36 md:h-40 align-center justify-center rounded-lg overflow-hidden object-contain"></div>
              )
            )}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl drop-shadow-lg">
          <h3 className="pb-4 text-3xl font-extrabold text-gray-900">
            Bronze Tier
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
            {bronzeSponsors.map((sponsor) =>
              sponsor.id !== "empty" ? (
                <a key={sponsor.id} href={sponsor?.href} className="group  ">
                  <div className="bg-amber-800 bg-opacity-50 flex self-center w-full items-center  align-center justify-center group-hover:scale-[1.02] transform duration-150 ease-in-out rounded-lg overflow-hidden object-contain">
                    <img
                      src={sponsor.imageSrc}
                      alt={sponsor.imageAlt}
                      className="w-64 h-36 md:h-40 object-contain rounded-xl"
                    />
                  </div>
                </a>
              ) : (
                <div className="bg-amber-800 bg-opacity-50 flex self-center w-full items-center h-36 md:h-40 align-center justify-center rounded-lg overflow-hidden object-contain"></div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
