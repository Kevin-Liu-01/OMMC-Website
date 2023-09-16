import "../App.css";
import React from "react";

export default function Problem(props) {
  return (
    <div className="flex place-content-center grow mt-2" key={props.igLink}>
      <div className="shadow-lg grow w-full">
        <iframe
          className="instagram-media instagram-media-rendered w-full bg-white dark:bg-gray-800 duration-150"
          title="instagramProblem"
          id="instagram-embed-0"
          src={props.igLink}
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
  );
}
