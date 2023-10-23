import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";
import { Button } from "@mui/material";

export const Slide = ({ noticias, handleOpen }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider_noticias_container">
      <Slider {...sliderSettings}>
        {noticias.map((noticia, index) => (
          <div key={index}>
            {noticia.Image && (
              <img
                src={noticia.Image}
                alt={`Imagen ${index + 1}`}
                className="image"
              />
            )}
            <div className="slide_content">
              <h2>{noticia.noticiaTitle}</h2>
              <p>{noticia.noticiaSubtitle}</p>
            </div>
            <div className="slide-button-container">
              <Button onClick={() => handleOpen(noticia)}>Ver más</Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
