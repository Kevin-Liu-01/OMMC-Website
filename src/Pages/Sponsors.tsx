import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

const sponsors = [
  {
    id: 1,
    href: "https://www.desmos.com/",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Desmos_logo.svg/1200px-Desmos_logo.svg.png",
    imageAlt: "Desmos",
  },
  {
    id: 2,
    href: "https://www.geogebra.org/?lang=en",
    imageSrc:
      "https://www.norwich-school.org.uk/norwich-school-prod/assets/Image/geogebra-logo-name-1024.png",
    imageAlt: "GeoGebra",
  },
  {
    id: 3,
    href: "https://www.janestreet.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/760189295067004962/976149016087756800/unknown.png",
    imageAlt: "Jane Street",
  },
  {
    id: 4,
    href: "https://artofproblemsolving.com/?utm_source=google&utm_medium=cpc&utm_campaign=&cmid=15593084286&agid=130908271813&search_keyword=aops&search_type=e&netid=g&adid=570025226859&adpos=&dvt=&ptid=&gclid=CjwKCAjw9-KTBhBcEiwAr19ig5zqOPfgTA0t67MDU_L08vklZ7FVHIaEoJP-ojcUrDLBWjeR6_YyMxoC_7sQAvD_BwE",
    imageSrc: "https://assets.artofproblemsolving.com/images/aops-logo.svg",
    imageAlt: "AoPS",
  },
  {
    id: 5,
    href: "https://www.wolframalpha.com/",
    imageSrc:
      "https://content.wolfram.com/uploads/sites/10/2016/06/wolfram-language-text-logo.png",
    imageAlt: "Wolfram",
  },
  {
    id: 6,
    href: "https://www.maplesoft.com/",
    imageSrc:
      "https://logos-download.com/wp-content/uploads/2021/01/Maplesoft_Logo.png",
    imageAlt: "Maplesoft",
  },
  {
    id: 7,
    href: "https://www.3blue1brown.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/753798704082714715/975569527930781696/unknown.png",
    imageAlt: "3blue1brown",
  },
  {
    id: 8,
    href: "https://www.taskade.com/",
    imageSrc:
      "https://www.taskade.com/static_images/taskade-circle-logo-full-black.png",
    imageAlt: "Taskade",
  },
  {
    id: 9,
    href: "https://brilliant.org/",
    imageSrc:
      "https://s3.amazonaws.com/media.thecrimson.com/photos/2021/08/22/234751_1350991.png",
    imageAlt: "Brilliant",
  },
  {
    id: 10,
    href: "https://thebeautyofmath.net/pages/home",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0536/6651/3088/files/unnamed_180x.jpg?v=1612934980",
    imageAlt: "TheBeautyOfMath",
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
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Sponsors</h2>
        <div className="bg-white dark:bg-slate-800 border dark:border-slate-900 rounded-2xl drop-shadow-lg">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6">
            {sponsors.map((sponsor) => (
              <a key={sponsor.id} href={sponsor.href} className="group  ">
                <div className="flex self-center w-full items-center  align-center justify-center group-hover:scale-105 transform duration-150 ease-in-out rounded-md overflow-hidden object-contain">
                  <img
                    src={sponsor.imageSrc}
                    alt={sponsor.imageAlt}
                    className="w-64 h-36 md:h-40 object-contain rounded-xl"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
