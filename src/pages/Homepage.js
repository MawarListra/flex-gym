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
  const listMenu = [
    {
      id: "home",
      label: "HOME",
    },
    {
      id: "program",
      label: "PROGRAM",
    },
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
      onClick: () => {
        navigate("/login");
      },
    },
    {
      id: "register",
      label: "Daftar",
      color: "#53F60F",
      textColor: "black",
      onClick: () => {
        navigate("/registration");
      },
    },
  ];

  const scrollToDiv = (myDiv) => {
    console.log("cek myDiv", myDiv);
    // Replace 'myDiv' with the ID of the div you want to scroll to
    scroll.scrollTo(myDiv, {
      duration: 800, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Scroll animation easing function
    });
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
      console.log("cek here remove");
    } else {
      document.querySelector("body").classList.add("scroll");
      document.querySelector("html").classList.add("scroll");
      window.onscroll = function () {};
      console.log("cek here add");
    }
  }, [openMenu]);

  return (
    <div className="d-flex flex-column bg-black mx-3 mx-md-0">
      <Navbar
        listMenu={listMenu}
        listAction={listAction}
        scrollToDiv={scrollToDiv}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Hero id="home" />
      <Location id="contact" />
      <Facilities />
      <Program id="program" />
      <Pricing id="package" />
      <BannerJoin />
      <Footer scrollToDiv={scrollToDiv} />
    </div>
  );
};

export default Homepage;
