import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Sponsor from "../Components/Sponsor";
import React from "react";

const goldSponsors = [
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
  },
];

const bronzeSponsors = [
  {
    id: 1,
    href: "https://www.janestreet.com/",
    imageSrc:
      "https://cdn.discordapp.com/attachments/760189295067004962/976149016087756800/unknown.png",
    imageAlt: "Jane Street",
    desc: "Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem solving. Our trading is based on our own proprietary models and on busy days we engage in over a million trades. Technology is at the core of how we approach trading, and we consider ourselves as much a technology company as a trading firm. Our growth comes from hiring and training amazing people and giving them the tools they need to innovate. Our culture is casual and our careers are intensely rewarding.    ",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
  },
];

const silverSponsors = [
  {
    id: 1,
    href: "https://www.sparc.camp/",
    imageSrc: "/sponsors/sparc.webp",
    imageAlt: "Sparc",
    desc: "SPARC (Summer Program for Applied Rationality and Cognition) is an immersive 10 day program for 15-19 year olds keen to learn more advanced quantitative skills and apply them to better understand the world and themselves. The curriculum covers a wide range of subjects from causal modeling to decision theory to cognitive science. It's typically hosted in late July in California.",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
  },
  {
    id: "empty",
    href: "",
    imageSrc: "/sponsors/none.png",
    imageAlt: "",
    desc: "",
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

      <div className="grid grid-rows-3 gap-6 max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <Sponsor
          title="Gold Tier"
          sponsors={goldSponsors}
          color1="from-amber-400"
          color2="to-amber-300"
          color3="bg-amber-500"
        />
        <Sponsor
          title="Silver Tier"
          sponsors={silverSponsors}
          color1="from-indigo-200"
          color2="to-indigo-100"
          color3="bg-indigo-300"
        />
        <Sponsor
          title="Bronze Tier"
          sponsors={bronzeSponsors}
          color1="from-amber-700"
          color2="to-amber-600"
          color3="bg-amber-800"
        />
      </div>
    </div>
  );
}
