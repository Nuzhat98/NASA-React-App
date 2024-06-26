import React from "react";

export default function Main(props) {
  const { data } = props;
  return (
    <>
      if ({data.media_type}==="video")
      {
        <div>
          <iframe src={data.url} alt={data.title} className="iframe_vid" />
        </div>
      }
      else
      <div className="imageContainer">
        <img src={data.hdurl} alt={data.title} className="bg-Image" />
      </div>
    </>
  );
}
