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
        <div className="d-none d-md-flex justify-content-between px-4 w-50">
          <Button
            color="transparent"
            onClick={() => {
              scrollToDiv("home");
            }}
          >
            <span className="text-white" style={{ fontSize: 14 }}>
              HOME
            </span>
          </Button>
          <Button
            color="transparent"
            onClick={() => {
              scrollToDiv("program");
            }}
          >
            <span className="text-white" style={{ fontSize: 14 }}>
              PROGRAM
            </span>
          </Button>
          <Button
            color="transparent"
            onClick={() => {
              scrollToDiv("package");
            }}
          >
            <span className="text-white" style={{ fontSize: 14 }}>
              PAKET
            </span>
          </Button>
        </div>
        <div className="d-flex w-25 text-right justify-content-end">
          <Button color="transparent" onClick={() => {}}>
            <span style={{ color: "#53F60F", fontSize: 14 }}>
              WHATSAPP FLEX
            </span>
          </Button>
        </div>
      </div>
      <div className="d-flex d-md-none justify-content-between w-100 px-4">
        <Button
          color="transparent"
          onClick={() => {
            scrollToDiv("home");
          }}
        >
          <span className="text-white" style={{ fontSize: 14 }}>
            HOME
          </span>
        </Button>
        <Button
          color="transparent"
          onClick={() => {
            scrollToDiv("program");
          }}
        >
          <span className="text-white" style={{ fontSize: 14 }}>
            PROGRAM
          </span>
        </Button>
        <Button
          color="transparent"
          onClick={() => {
            scrollToDiv("package");
          }}
        >
          <span className="text-white" style={{ fontSize: 14 }}>
            PAKET
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
