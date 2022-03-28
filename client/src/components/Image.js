import React from "react";

export default function Image({ image }) {
  return (
    <a data-rel="lightbox" href={image.urls.regular} data-toggle="lightbox">
      <img
        className="rounded m-2 border border-3 border-danger"
        src={image.urls.thumb}
        alt="random"
        height="300px"
        width="300px"
      />
    </a>
  );
}
