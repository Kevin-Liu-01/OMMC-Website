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
        " min-h-screen bg-slate-100 dark:bg-gray-900 duration-150"
      }
    >
      <Navbar page="samples" dark={props.dark} setDark={props.setDark} />
      <Banner />
      <header className="drop-shadow-lg bg-white dark:bg-[#182133] duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-extrabold text-gray-900  dark:text-white">
            Sample Problems
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-4 ">
          <PDFViewer
            src="https://drive.google.com/file/d/1H5gUQEoebRQqxeyBeuP-f_JRmNYvJ5hh/preview"
            title="sample1"
          />
          <PDFViewer
            src="https://drive.google.com/file/d/10RqmbpctXW9TxhohGcZcn1suS-xE6mJ4/preview"
            title="sample2"
          />
        </div>
      </main>
      <header className="bg-white drop-shadow-lg dark:bg-gray-800 duration-150">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Solutions
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="font-bold text-lg py-12 text-slate-500">
          Solutions are currently unavailable. Stay tuned!
        </div>
        {/* <div className="grid md:grid-cols-2 gap-4 ">
          <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900 ">
            <div className=" w-full h-full overflow-hidden">
              <iframe
                title="sample1"
                src="https://drive.google.com/file/d/1H5gUQEoebRQqxeyBeuP-f_JRmNYvJ5hh/preview"
                className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-lg bg-gray-300 drop-shadow-lg"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
          <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900 ">
            <div className="w-full h-full overflow-hidden">
              <iframe
                title="sample2"
                src="https://drive.google.com/file/d/10RqmbpctXW9TxhohGcZcn1suS-xE6mJ4/preview"
                className="w-full h-full border-4 border-gray-100 dark:border-gray-400 rounded-lg bg-gray-300 drop-shadow-lg"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
