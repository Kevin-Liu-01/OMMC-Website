import "../App.css";
import React from "react";

export default function PDFViewer(props) {
  return (
    <div className="border-2 border-dotted border-gray-400 bg-slate-100 rounded-lg h-96 dark:border-gray-700 dark:bg-gray-900 ">
      <div className="w-full h-full overflow-hidden">
        <iframe
          title={props.title}
          src={props.src}
          className="w-full h-full border-4 border-slate-100 dark:border-gray-900 rounded-lg bg-gray-300 drop-shadow-lg"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
