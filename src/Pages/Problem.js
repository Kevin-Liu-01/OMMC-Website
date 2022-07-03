import "../App.css";
import { IGEmbed } from 'react-ig-embed';

function Problem() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <header className="bg-white shadow-lg bg-slate-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900 ">
            Problem of the Month
          </h1>
        </div>
      </header>
      <main className="bg-slate-200">
        <div className="max-w-7xl mx-auto py-3 pt-7 pb-7 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0 ">
            <div className="flex rounded-lg grow place-content-center mt-6 mb-4">
              <IGEmbed className=" shadow-lg" url="https://www.instagram.com/p/CfeLT4YLxI2/" />

            </div>
          </div>
        </div>
      </main>
    
     
    </div>
  );
}

export default Problem;
