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
    <div
      className="d-flex flex-row justify-content-between align-items-center py-2 paddingComponentRight paddingComponentLeft"
      style={{ backgroundColor: "black" }}
    >
      <div className="d-flex align-items-center" style={{ width: "25%" }}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div
        className="d-none d-md-flex flex-row justify-content-between align-items-center gap-5"
        // style={{ width: "75%" }}
      >
        <div className="d-flex flex-row justify-content-between align-items-center gap-5">
          {listMenu.map((e) => (
            <div key={e?.id}>
              <Button
                color="transparent"
                onClick={() => {
                  scrollToDiv(e?.id);
                }}
              >
                <span className="text-white">{e?.label}</span>
              </Button>
            </div>
          ))}
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          // style={{ width: "10%" }}
        >
          <span className="text-white">|</span>
        </div>
        <div
          className="d-flex flex-row justify-content-between gap-5"
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
        <div className="d-flex d-md-none">
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
            <div className="d-flex flex-column justify-content-between align-items-center gap-5">
              {listMenu.map((e) => (
                <div key={e?.id}>
                  <Button
                    color="transparent"
                    onClick={() => {
                      scrollToDiv(e?.id);
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <span className="text-white">{e?.label}</span>
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
