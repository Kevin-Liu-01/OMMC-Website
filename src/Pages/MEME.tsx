import "../App.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import React from "react";

function Sample(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-200 dark:bg-gray-900 duration-150 "
      }
    >
      <Navbar page="meme" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-[url('https://e7.pngegg.com/pngimages/621/108/png-clipart-orange-and-pink-illustration-red-orange-geometry-orange-colored-background-color-splash-orange.png')] bg-cover">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Monmouth Exploratory Math Expo
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="md:grid-cols-6 grid gap-6">
          <div className="drop-shadow-lg md:col-span-2 flex justify-center items-center border border-gray-200 dark:border-gray-800 rounded-2xl  bg-cover bg-[url('https://cdn.discordapp.com/attachments/760189295067004962/1064901339915759706/image.png')]">
            <img
              src="https://cdn.discordapp.com/attachments/1044744976942243880/1045383726756003880/OMMC-Logo_1.png"
              className="w-24 my-4"
              alt="Watercolor Splash"
            />
          </div>
          <div className=" md:col-span-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 drop-shadow-lg">
            <p className="font-extrabold text-2xl text-gray-800 dark:text-gray-300 pb-2">
              What is MEME?
            </p>
            This spring, OMMC plans to host the Monmouth Exploratory Math Expo
            (MEME) event, presenting various speakers in mathematics, holding
            conferences and panels, and providing a hub for people all over to
            learn and enjoy. Previous OMMC events have all been online, due to
            the reach of the COVID-19 pandemic. At OMMC, we are deeply
            passionate about advancing math and problem solving education by
            creating exciting, engaging, and inspirational events and resources.
            This year, we intend to host an in-person event in order to reach
            and motivate people in our local community to become better
            thinkers, and give them a magical experience with mathematics that
            they will hopefully remember for a lifetime.
          </div>
          <div className=" md:col-span-3 text-gray-800 dark:text-gray-400 border  border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-2xl p-4 drop-shadow-lg ">
            <div className="">
              <p className="font-extrabold text-2xl text-gray-800 dark:text-gray-300 pb-2">
                Where will it be?
              </p>
              <p className="mb-3">
                Our desired venue is at Bell Works, 101 Crawfords Corner Rd,
                Holmdel, NJ 07733. As of now, we are planning for MEME to take
                place on Sunday, April 2nd, 2023, at 7-8 PM EST. If you are
                interested in joining us for a day full of meeting other OMMC
                members and having fun, fill out the form.
              </p>
              <div>
                <iframe
                  title="Bell Works"
                  className="w-full rounded-lg bg-gray-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5416.582754718771!2d-74.17036455300682!3d40.3655342430469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2325e255385d1%3A0x7f2a68b5d5d7da2d!2sBell%20Works!5e0!3m2!1sen!2sus!4v1674356641631!5m2!1sen!2sus"
                  height="320"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-gray-800 border bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-800 rounded-2xl  drop-shadow-lg ">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScnsg8Ji2iTe6wXx1Rkf_qIG2LKhZs3t1m8Etu5NCGT0akVRQ/viewform?embedded=true"
              className="w-full rounded-2xl bg-gray-100 "
              height="500"
              title="MEME Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sample;
