import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Problem from "../Components/Problem";
import React from "react";

const posts = [
  {
    igLink:
      "https://www.instagram.com/p/CwtLQtKRH_d/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CvgCy4gRJw8/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CudcKcws1tJ/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CtB8dsQrewI/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/Cr8fi9mMXBI/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CqvT7VeMuCM/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CpWLrCEs_7b/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CoI0iLPMmrq/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/Cm48xFjLHqm/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CmAVZmarN6R/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/Ckb2ESGrrmY/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CjLIodgOR9N/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/Ch_RXursdG4/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CgufDO9lMzn/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CfeLT4YLxI2/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CePTUVelhEn/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/Cc_pjWKFdvo/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/Cb3pCJHFmPx/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CanVq_ElJ3m/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CZdR0VLFEvT/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CYP8Dz_lDqx/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CXMt2kVlR5S/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
  {
    igLink:
      "https://www.instagram.com/p/CWjZnwalm71/embed/?cr=1&amp;v=14&amp;wp=489&amp;rd=http%3A%2F%2Fwww.ommcofficial.org&amp;rp=%2FPOTM#%7B%22ci%22%3A0%2C%22os%22%3A314.20000000298023%2C%22ls%22%3A289.20000000298023%2C%22le%22%3A307.79999999701977%7D",
  },
];

export default function POTD(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-100 dark:bg-gray-900 min-h-screen duration-150"
      }
    >
      <Navbar page="potm" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-white dark:bg-[#182133] duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Problem of the Month
          </h1>
        </div>
      </header>
      <main className="">
        <div className="max-w-7xl mx-auto py-3 pt-7 pb-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0 ">
            <div className=" grid gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-4 mb-6">
              {posts.map((posts) => (
                <Problem igLink={posts.igLink} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
