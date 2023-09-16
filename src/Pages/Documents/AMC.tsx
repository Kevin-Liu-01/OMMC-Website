import "../../App.css";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import PDFViewer from "../../Components/PDFViewer";
import React from "react";

export default function Sample(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        " min-h-screen bg-slate-100 dark:bg-gray-900"
      }
    >
      <Navbar page="amc" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold text-gray-900  dark:text-white">
            OMMC AMC Practice Test
          </h1>
          <div className="mt-6 mb-2 rounded-lg bg-blue-100 dark:bg-blue-200 p-2 border-2 border-blue-300 dark:border-blue-400">
            This was a high quality AMC 10 and AMC 12 style mock competition.
            Just like a regular AMC, this test was a 25 question multiple choice
            examination scored out of 150, meant to be taken over the course of
            75 minutes. The tools allowed were the same as what you would be
            allowed on a regular AMC. We provided two mock competitions, an AMC
            10 mock and an AMC 12 mock. Questions were shared between both
            mocks.
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-4 ">
          <PDFViewer
            title="sample1"
            src="https://drive.google.com/file/d/1fOu-Uk1ZPFMaqTucR9L_lhy_geslP3UV/preview"
          />
          <PDFViewer
            title="sample2"
            src="https://drive.google.com/file/d/12LFs7dsYAwM_zFGUbM09fln1aD5xHQdo/preview"
          />
        </div>
      </section>
      <header className="bg-white drop-shadow-lg dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Solutions
          </h1>
        </div>
      </header>
      <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-4 ">
          <PDFViewer
            title="sample1"
            src="https://drive.google.com/file/d/1jBlLvWhe5PlOdacp79lTobaMILdPT3vi/preview"
          />

          <PDFViewer
            title="sample2"
            src="https://drive.google.com/file/d/1cHXzsE38H5RYJGk5sJ6H0FBJxn2N0tIf/preview"
          />
        </div>
      </section>
    </div>
  );
}
