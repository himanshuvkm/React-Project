import React, { useEffect, useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsCheckLg,
} from "react-icons/bs";
import "./image-slider.css";

function ImageSlider({ url,page, limit }) {
  const [image, setImage] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [errmsg, seterrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      seterrMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious(index) {
    setCurrSlide(currSlide === 0 ? image.length - 1 : currSlide - 1);
  }
  function handleNext(index) {
    setCurrSlide(currSlide === image.length - 1 ? 0 : currSlide + 1);
  }

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  },[url, page, limit]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errmsg !== null) {
    return <div className="error-msg">⚠️ Error: {errmsg}</div>;
  }

  return (<div className="image-slider-wrapper" >
    <h1>Image Slider</h1>
    <div className="image-slider-container" >
        
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.id}
              className={
                currSlide === index
                  ? "curr-image"
                  : "curr-image hide-curr-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="btn-indicator">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currSlide === index
                    ? "curr-btn-indicator"
                    : "curr-btn-indicator inactive-indicator"
                }
                onClick={() => setCurrSlide(index)}
              ></button>
            ))
          : " "}
      </span>
    </div></div>
  );
}
export default ImageSlider;
