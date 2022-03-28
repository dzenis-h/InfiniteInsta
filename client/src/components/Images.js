import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";
import Spinner from "../components/spinner.gif";

const Images = () => {
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);
  const count = 30;

  const fetchImages = useCallback(() => {
    setStart(start + count);
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages([...images, ...res.data]));
  }, [start, count, images]);

  const spinner = <img src={Spinner} alt="Spinner" />;

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container p-mg-5">
      <div className="row m-md-n5 text-white">
        <div className="col p-3 p-md-5 text-white">
          <div className="images">
            <InfiniteScroll
              dataLength={images.length}
              next={fetchImages}
              hasMore={true}
              loader={spinner}
              className="rounded x-auto p-3"
            >
              {images.map((image) => {
                if (images !== "undefined" && image !== "undefined") {
                  return <Image key={image.id} image={image} />;
                } else {
                  return (
                    <span role="img" aria-label="black heart">
                      🖤
                    </span>
                  );
                }
              })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
