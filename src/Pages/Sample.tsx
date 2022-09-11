import "../App.css";
import Navbar from "../Reusable-Elements/Navbar";
import Banner from "../Reusable-Elements/Banner";
import React from "react";

function Sample() {
  return (
    <div className=" min-h-screen">
      <Navbar page="samples" />
      <Banner />
      <header className="drop-shadow-lg bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900 ">Sample Problems</h1>
        </div>
      </header>
      <main className="bg-slate-200">
        <div className="max-w-7xl mx-auto py-3 pt-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 ">
              <div className="p-2 w-full h-full overflow-hidden">
                <iframe
                  title="sample1"
                  src="https://drive.google.com/file/d/1p3RhXHcfPYCvm0oAAYodsUujbMPVwOR8/preview"
                  className="w-full h-full border-2 border-gray-400 rounded-lg  drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-4 pb-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 ">
              <div className="p-2 w-full h-full overflow-hidden">
                <iframe
                  title="sample2"
                  src="https://drive.google.com/file/d/1VWXcQy5waWyRwuG8J64LxkJUETCPTvC4/preview"
                  className="w-full h-full border-2 border-gray-400 rounded-lg  drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
      </main>
      <header className="bg-white drop-shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 ">Solutions</h1>
        </div>
      </header>
      <main className="rows-2 bg-slate-200">
        <div className="max-w-7xl mx-auto py-3 pt-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 ">
              <div className="p-2 w-full h-full overflow-hidden">
                <iframe
                  title="sol1"
                  src="https://drive.google.com/file/d/1CZKocvVETJW7p0_bQLMWfkWCo8kEuJYr/preview"
                  className="w-full h-full border-2 border-gray-400 rounded-lg  drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-4 pb-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-400 bg-slate-100 rounded-lg h-96 ">
              <div className="p-2 w-full h-full overflow-hidden">
                <iframe
                  title="sol2"
                  src="https://drive.google.com/file/d/1NDweAK-Os3m9M4b3Pp2Mf_x7wDUTjPsr/preview"
                  className="w-full h-full border-2 border-gray-400 rounded-lg  drop-shadow-lg"
                  allow="autoplay"
                ></iframe>
              </div>{" "}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sample;
