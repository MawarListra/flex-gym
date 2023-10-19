import React from "react";
import Logo from "../../assets/Logo.png";
import { Button } from "reactstrap";

const Footer = ({ scrollToDiv }) => {
  return (
    <div
      className="d-flex flex-md-row flex-column justify-content-between align-items-center py-2 paddingComponentRight paddingComponentLeft"
      style={{ backgroundColor: "black" }}
    >
      <div className="d-flex align-items-center justify-content-md-start justify-content-between w-100">
        <div className="d-flex w-25">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className="d-none d-md-flex justify-content-between px-4 w-50"
          id="container-button-menu"
        >
          <Button
            color="transparent"
            onClick={() => {
              scrollToDiv("home");
              var menuItems = document.querySelectorAll(
                "#container-button-menu button span"
              );
              menuItems.forEach(function (item) {
                item.classList.remove("active-menu-item");
                item.classList.add("text-white");
              });
              const element = document.getElementById("footer-home");
              element.classList.remove("text-white");
              element.classList.add("active-menu-item");
            }}
          >
            <span
              className="text-white"
              id="footer-home"
              style={{ fontSize: 14 }}
            >
              HOME
            </span>
          </Button>
          {/* <Button
            color="transparent"
            onClick={() => {
              scrollToDiv("program");
              var menuItems = document.querySelectorAll(
                "#container-button-menu button span"
              );
              menuItems.forEach(function (item) {
                item.classList.remove("active-menu-item");
                item.classList.add("text-white");
              });
              const element = document.getElementById("footer-program");
              element.classList.remove("text-white");
              element.classList.add("active-menu-item");
            }}
          >
            <span
              className="text-white"
              id="footer-program"
              style={{ fontSize: 14 }}
            >
              PROGRAM
            </span>
          </Button> */}
          <Button
            color="transparent"
            onClick={() => {
              scrollToDiv("package");

              var menuItems = document.querySelectorAll(
                "#container-button-menu button span"
              );
              menuItems.forEach(function (item) {
                item.classList.remove("active-menu-item");
                item.classList.add("text-white");
              });
              const element = document.getElementById("footer-paket");
              element.classList.remove("text-white");
              element.classList.add("active-menu-item");
            }}
          >
            <span
              className="text-white"
              id="footer-paket"
              style={{ fontSize: 14 }}
            >
              PAKET
            </span>
          </Button>
        </div>
        <div className="d-flex w-25 text-right justify-content-end">
          <Button
            color="transparent"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=+62895378229030&text=Halo%20min!%20saya%20berminat%20untuk%20mendaftar%20member%20di%20Flex%20Gym%20and%20Cafe",
                "_blank"
              )
            }
          >
            <span style={{ color: "#53F60F", fontSize: 14 }}>
              WHATSAPP FLEX
            </span>
          </Button>
        </div>
      </div>
      <div
        className="d-flex d-md-none justify-content-between w-100 px-4"
        id="container-button-menu"
      >
        <Button
          color="transparent"
          onClick={() => {
            scrollToDiv("home");

            var menuItems = document.querySelectorAll(
              "#container-button-menu button span"
            );
            menuItems.forEach(function (item) {
              item.classList.remove("active-menu-item");
              item.classList.add("text-white");
            });
            const element = document.getElementById("footer-home");
            element.classList.remove("text-white");
            element.classList.add("active-menu-item");
          }}
        >
          <span
            className="text-white"
            id="footer-home"
            style={{ fontSize: 14 }}
          >
            HOME
          </span>
        </Button>
        {/* <Button
          color="transparent"
          onClick={() => {
            scrollToDiv("program");
            var menuItems = document.querySelectorAll(
              "#container-button-menu button span"
            );
            menuItems.forEach(function (item) {
              item.classList.remove("active-menu-item");
              item.classList.add("text-white");
            });
            const element = document.getElementById("footer-program");
            element.classList.remove("text-white");
            element.classList.add("active-menu-item");
          }}
        >
          <span
            className="text-white"
            id="footer-program"
            style={{ fontSize: 14 }}
          >
            PROGRAM
          </span>
        </Button> */}
        <Button
          color="transparent"
          onClick={() => {
            scrollToDiv("package");
            var menuItems = document.querySelectorAll(
              "#container-button-menu button span"
            );
            menuItems.forEach(function (item) {
              item.classList.remove("active-menu-item");
              item.classList.add("text-white");
            });
            const element = document.getElementById("footer-paket");
            element.classList.remove("text-white");
            element.classList.add("active-menu-item");
          }}
        >
          <span
            className="text-white"
            id="footer-paket"
            style={{ fontSize: 14 }}
          >
            PAKET
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
