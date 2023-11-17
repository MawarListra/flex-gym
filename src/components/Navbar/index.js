import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Button } from "reactstrap";
import { Menu, XCircle } from "react-feather";

const Navbar = ({
  listMenu,
  listAction,
  scrollToDiv,
  openMenu,
  setOpenMenu,
}) => {
  return (
    <div className=" d-flex flex-row justify-content-between align-items-center py-2 paddingComponentRight paddingComponentLeft">
      <div className="d-flex align-items-center" style={{ width: "25%" }}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div
        className="d-none d-md-flex flex-row justify-content-between align-items-center gap-4"
        // style={{ width: "75%" }}
      >
        <div
          className="d-flex flex-row justify-content-between align-items-center gap-5"
          id="container-button-menu"
        >
          {listMenu.map((e, i) => (
            <div key={e?.id}>
              <Button
                color="transparent"
                onClick={() => {
                  if (e?.id !== "contact") {
                    scrollToDiv(e?.id);
                    var menuItems = document.querySelectorAll(
                      "#container-button-menu div button span"
                    );
                    menuItems.forEach(function (item) {
                      item.classList.remove("active-menu-item");
                      item.classList.add("text-white");
                    });
                    const element = document.getElementById("button-menu-" + i);
                    element.classList.remove("text-white");
                    element.classList.add("active-menu-item");
                  } else {
                    window.open(
                      "https://api.whatsapp.com/send?phone=+62895378229030&text=Halo%20min!%20saya%20berminat%20untuk%20mendaftar%20member%20di%20Flex%20Gym%20and%20Cafe",
                      "_blank"
                    );
                  }
                }}
              >
                <span className="text-white" id={`button-menu-` + i}>
                  {e?.label}
                </span>
              </Button>
            </div>
          ))}
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginRight: 8 }}
          // style={{ width: "10%" }}
        >
          <span className="text-white">|</span>
        </div>
        <div
          className="d-flex flex-row justify-content-between gap-3 ml-4"
          // style={{ width: "25%" }}
        >
          {listAction.map((e) => (
            <div key={e?.id}>
              <Button
                className="px-4 py-2"
                style={{
                  backgroundColor: e?.color,
                  borderTopLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderColor: e?.borderColor,
                }}
                onClick={e?.onClick}
              >
                <span style={{ color: e?.textColor }}>{e?.label}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
      {!openMenu && (
        <div
          className="d-flex d-md-none"
          style={{ zIndex: 999, position: "sticky" }}
        >
          <Menu
            style={{ color: "#53F60F", cursor: "pointer" }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      )}
      {openMenu && (
        <div className="d-flex d-md-none flex-column overlay px-2 py-4 gap-5">
          <div className="d-flex justify-content-end">
            <XCircle
              style={{ color: "#53F60F", cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
          <div className="d-flex flex-column gap-5">
            <div
              className="d-flex flex-column justify-content-between align-items-center gap-5"
              id="container-button-menu"
            >
              {listMenu.map((e, i) => (
                <div key={e?.id}>
                  <Button
                    color="transparent"
                    onClick={() => {
                      scrollToDiv(e?.id);
                      setOpenMenu(!openMenu);
                      var menuItems = document.querySelectorAll(
                        "#container-button-menu div button span"
                      );
                      menuItems.forEach(function (item) {
                        item.classList.remove("active-menu-item");
                        item.classList.add("text-white");
                      });
                      const element = document.getElementById(
                        "button-menu-" + i
                      );
                      element.classList.remove("text-white");
                      element.classList.add("active-menu-item");
                    }}
                  >
                    <span className="text-white" id={`button-menu-` + i}>
                      {e?.label}
                    </span>
                  </Button>
                </div>
              ))}
            </div>
            <div className="d-flex flex-row justify-content-center gap-4">
              {listAction.map((e) => (
                <div key={e?.id}>
                  <Button
                    className="px-4 py-2"
                    style={{
                      backgroundColor: e?.color,
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderColor: e?.borderColor,
                    }}
                    onClick={e?.onClick}
                  >
                    <span style={{ color: e?.textColor }}>{e?.label}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
