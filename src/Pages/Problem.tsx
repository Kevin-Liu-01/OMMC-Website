import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

const posts = [
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

function Problem(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-200 dark:bg-gray-900 min-h-screen"
      }
    >
      <Navbar page="potm" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-slate-100 dark:bg-[#182133]">
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
                <div
                  className="flex place-content-center grow mt-2"
                  key={posts.igLink}
                >
                  <div className="shadow-lg grow w-full">
                    <iframe
                      className="instagram-media instagram-media-rendered w-full bg-white dark:bg-gray-800 duration-150"
                      title="instagramProblem"
                      id="instagram-embed-0"
                      src={posts.igLink}
                      allowTransparency={true}
                      allowFullScreen={true}
                      frameBorder="0"
                      height="650"
                      data-instgrm-payload-id="instagram-media-payload-0"
                      scrolling="no"
                      style={{
                        // border: "1px solid rgb(219, 219, 219)",
                        borderRadius: "15px",
                        boxShadow: "none",
                        display: "block",
                        minWidth: "156px",
                        padding: "0px",
                        overflow: "hidden",
                      }}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Problem;
