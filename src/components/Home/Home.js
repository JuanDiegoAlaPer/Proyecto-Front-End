import React, { useEffect, useState } from "react";
import "./Home.scss";
import Cubo from "../cubo/Cubo";
import Menu from "../menu/Menu";
import Service from "../Services/Service";
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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
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
          <h1>Services</h1>
          <Service />
        </div>
        <div className="seccion3" id="seccion3">
          <h1>Contacts</h1>
        </div>
        <div className="seccion4" id="seccion4">
          <h1>Products</h1>
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
              <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
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
              <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
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
              viewBox="0 0 448 512"
            >
              <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
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
