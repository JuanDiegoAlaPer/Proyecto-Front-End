import React, { useEffect, useState } from "react";
import "./Home.scss";
import Cubo from "../cubo/Cubo";
import Menu from "../menu/Menu";
import Flex from "../Flex/Flex";
import Contact from "../Contacts/Contact";
import Products from "../Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
} from "@mui/material";

import servicios from "../../assets/images/servicios.png";
import pweb from "../../assets/images/descarga.png";
import nube from "../../assets/images/nube.jpg";
import recuperacion from "../../assets/images/recuperacion.jpg";
import seguridad from "../../assets/images/seguridad.jpg";
import soporte from "../../assets/images/soporte.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const [showOptionsCard, setShowOptionsCard] = useState(false);

  const handleOpenOptionsCard = () => {
    setShowOptionsCard(true);
  };

  const handleCloseOptionsCard = () => {
    setShowOptionsCard(false);
  };

  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("seccion1");
      const section2 = document.getElementById("seccion2");
      const section3 = document.getElementById("seccion3");
      const section4 = document.getElementById("seccion4");
      const section5 = document.getElementById("seccion5");

      const scrollY = window.scrollY;

      if (scrollY < section2.offsetTop - 100) {
        setCurrentSection("seccion1");
      } else if (scrollY < section3.offsetTop - 100) {
        setCurrentSection("seccion2");
      } else if (scrollY < section4.offsetTop - 100) {
        setCurrentSection("seccion3");
      } else if (scrollY < section5.offsetTop - 100) {
        setCurrentSection("seccion4");
      } else {
        setCurrentSection("seccion5");
      }

      if (window.scrollY > 100) {
        setShowFloatingMenu(true);
      } else {
        setShowFloatingMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleMenuItemClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const menuLinks = document.querySelectorAll(".menu ul li a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", handleMenuItemClick);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <Cubo></Cubo>
      <Menu></Menu>
      <div className="content">
        <div className="seccion1" id="seccion1">
          <h1>Flexbox</h1>
        </div>
        <div className="seccion2" id="seccion2">
          <h1>Servicios</h1>
          <div className="cards-container">
            <Card sx={{ maxWidth: 345, background: "#fff" }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={servicios}
                  alt="Servicios informáticos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Servicios infórmaticos
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ofrecemos soluciones informáticas integrales para satisfacer
                    todas tus necesidades tecnológicas. Desde el soporte técnico
                    y la reparación de hardware hasta el desarrollo de software
                    a medida.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleOpenOptionsCard}
                >
                  MÁS INFO
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, background: "#fff" }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={pweb}
                  alt="Servicios informáticos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Programación web
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nuestro servicio de programación web ofrece soluciones a
                    medida para tus necesidades digitales. Diseñamos y
                    desarrollamos sitios web profesionales, aplicaciones web y
                    sistemas en línea.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                >
                  MÁS INFO
                </Button>
              </CardActions>
            </Card>
            {showOptionsCard && (
              <Card sx={{ maxWidth: 345, background: "#fff" }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={soporte}
                  alt="Servicios informáticos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Soporte técnico
                  </Typography>
                </CardContent>
                 <CardMedia
                  component="img"
                  height="140"
                  image={seguridad}
                  alt="Servicios informáticos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Seguridad y redes
                  </Typography>
                </CardContent>
                 <CardMedia
                  component="img"
                  height="140"
                  image={nube}
                  alt="Servicios informáticos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Servicio de nube
                  </Typography>
                </CardContent>
                 <CardMedia
                  component="img"
                  height="140"
                  image={recuperacion}
                  alt="Servicios informáticos"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Recuperación de datos
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleCloseOptionsCard}
                >
                  CERRAR
                </Button>
              </CardActions>
            </Card>
            )}
          </div>
        </div>
        <div className="seccion3" id="seccion3">
          <h1>Products</h1>
        </div>
        <div className="seccion4" id="seccion4">
          <h1>Sección 4</h1>
        </div>
        <div className="seccion5" id="seccion5">
          <h1>Sección 5</h1>
        </div>
      </div>
      <div></div>
      <div className={`floating-menu ${showFloatingMenu ? "show" : ""}`}>
        <div
          className={`icono-1 ${currentSection === "seccion1" ? "active" : ""}`}
        >
          <a href="#seccion1" className="icono">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
            </svg>
          </a>
        </div>
        <div
          className={`icono-2 ${currentSection === "seccion2" ? "active" : ""}`}
        >
          <a href="#seccion2" className="icono">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
            </svg>
          </a>
        </div>
        <div
          className={`icono-3 ${currentSection === "seccion3" ? "active" : ""}`}
        >
          <a href="#seccion3" className="icono">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
            </svg>
          </a>
        </div>
        <div
          className={`icono-4 ${currentSection === "seccion4" ? "active" : ""}`}
        >
          <a href="#seccion4" className="icono">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z" />
            </svg>
          </a>
        </div>
        <div
          className={`icono-5 ${currentSection === "seccion5" ? "active" : ""}`}
        >
          <a href="#seccion5" className="icono">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M32.5 58.3C35.3 43.1 48.5 32 64 32H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H90.7L70.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H100.5c-39.4 0-75.4-22.3-93-57.5l-4.1-8.2c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l4.1 8.2c6.8 13.6 20.6 22.1 35.8 22.1H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H32c-9.5 0-18.5-4.2-24.6-11.5s-8.6-16.9-6.9-26.2l32-176z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
