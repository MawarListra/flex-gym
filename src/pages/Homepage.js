import React, { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  Facilities,
  Program,
  Pricing,
  BannerJoin,
  Location,
  Footer,
} from "../components";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [currType, setCurrType] = useState(1);
  const listMenu = [
    {
      id: "home",
      label: "HOME",
    },
    // {
    //   id: "program",
    //   label: "PROGRAM",
    // },
    {
      id: "package",
      label: "PAKET",
    },
    {
      id: "contact",
      label: "KONTAK",
    },
  ];

  const listAction = [
    {
      id: "login",
      label: "Masuk",
      color: "black",
      textColor: "#53F60F",
      borderColor: "#53F60F",
      onClick: () => {
        navigate("/login");
      },
    },
    {
      id: "register",
      label: "Daftar",
      color: "#53F60F",
      textColor: "black",
      borderColor: "#53F60F",
      onClick: () => {
        navigate("/registration");
      },
    },
  ];

  const scrollToDiv = (myDiv) => {
    var element = document.getElementById(myDiv); // Replace 'your-div-id' with the actual ID of your div
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Use 'auto' for instant scroll or 'smooth' for smooth scrolling
      });
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.querySelector("body").classList.remove("scroll");
      document.querySelector("html").classList.remove("scroll");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      document.querySelector("body").classList.add("scroll");
      document.querySelector("html").classList.add("scroll");
      window.onscroll = function () {};
    }
  }, [openMenu]);

  document.addEventListener("DOMContentLoaded", function () {
    // Number of circles you want to create
    const numberOfCircles = 4;

    for (let i = 0; i < numberOfCircles; i++) {
      createCircle();
    }

    function createCircle() {
      const circle = document.createElement("div");
      circle.className = "circle";

      // Set random position for the circle
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      circle.style.left = `${randomX}px`;
      circle.style.top = `${randomY}px`;

      document.body.appendChild(circle);
    }
  });

  return (
    <div
      className="container-fluid d-flex w-100 flex-column bg-black px-3 px-md-0"
      style={{ position: "relative", overflowX: "hidden" }}
    >
      <Navbar
        listMenu={listMenu}
        listAction={listAction}
        scrollToDiv={scrollToDiv}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Hero id="home" />
      <div className="dot" id="dot1"></div>
      <Location id="contact" />
      <div className="dot" id="dot2"></div>
      <Facilities />
      {/* <Program id="program" /> */}
      <div className="dot" id="dot3"></div>
      <Pricing id="package" currType={currType} setCurrType={setCurrType} />
      <BannerJoin />
      <Footer scrollToDiv={scrollToDiv} />
    </div>
  );
};

export default Homepage;
