import "../App.css";
import React from "react";

export default function Sponsor(props) {
  return (
    <div
      className={`p-4 bg-gradient-to-r ${props.color1} ${props.color2} rounded-2xl drop-shadow-lg`}
    >
      <h3 className="text-3xl font-extrabold text-gray-900 pb-4">
        {props.title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {props.sponsors.map((sponsor) =>
          sponsor.id !== "empty" ? (
            <a key={sponsor.id} href={sponsor.href} className="group">
              <div
                className={`grid ${props.color3} bg-opacity-50 p-2 self-center w-full items-center align-center justify-center group-hover:scale-[1.01] transform duration-150 ease-in-out rounded-lg overflow-hidden object-contain`}
              >
                <div
                  className={`col-start-1 row-start-1 z-10 h-36 md:h-40 overflow-auto rounded shadow-inner font-semibold duration-150 opacity-0 ${
                    props.title !== "Bronze Tier" && "hover:opacity-100"
                  } ${props.color3}`}
                >
                  <div className="overflow-auto scrollbar p-4 h-full w-full">
                    {sponsor.desc}
                  </div>
                </div>
                <img
                  src={sponsor?.imageSrc}
                  alt={sponsor?.imageAlt}
                  className="col-start-1 row-start-1 w-64 h-36 md:h-40 object-contain rounded-xl mx-auto flex"
                />
              </div>
            </a>
          ) : (
            <div
              className={`${props.color3} bg-opacity-50 flex self-center w-full items-center h-40 md:h-44 align-center justify-center rounded-lg overflow-hidden object-contain `}
            ></div>
          )
        )}
      </div>
    </div>
  );
}
