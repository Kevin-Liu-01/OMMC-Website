import "../../App.css";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import PDFViewer from "../../Components/PDFViewer";
import React from "react";

export default function TestDocs(props) {
  return (
    <div
      className={
        (props.dark ? "dark" : "") +
        "bg-slate-100 min-h-screen dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="testdocs26" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-white dark:bg-gray-800 duration-150 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2">
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white  ">
            OMMC 2026 Test Documents
          </div>
        </div>
      </header>
      <section className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <PDFViewer
              title="test"
              src="https://drive.google.com/file/d/1CvPUeIUbIeEJQb-6tqKNKjWD27bK_XLP/preview"
            />
          </div>
        </div>
      </section>
      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Final Round
          </h1>
        </div>
      </header>
      <section className="rows-2">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="px-4 sm:px-0">
            <PDFViewer
              title="final_round"
              src="https://drive.google.com/file/d/10C_oBJeR00iVCpTIPc_-_ZGPpqIZTZMt/preview"
            />
          </div>
        </div>
      </section>

      {/* <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Solutions
          </h1>
        </div>
      </header>
      <main className="rows-2 ">
        <div className="max-w-7xl mx-auto py-3 pt-7 pb-7  sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900 ">
              <div className=" w-full h-full overflow-hidden">
                <iframe
                  title="solutions"
                  src="https://drive.google.com/file/d/1XqDo3fqmGLzZyswu7ohd0z7DJxBnDa5z/preview"
                  className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-lg bg-gray-300 drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
}
