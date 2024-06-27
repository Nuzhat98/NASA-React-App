import React from "react";

export default function Main(props) {
  const { data } = props;

  if (data.media_type == "video")
    return (
      <>
        <div>
          <iframe src={data.url} alt={data.title} className="iframe_vid" />
        </div>
      </>
    );
  else if (data.media_type == "image")
    return (
      <>
        <div className="imageContainer">
          <img src={data.hdurl} alt={data.title} className="bg-Image" />
        </div>
      </>
    );
}
