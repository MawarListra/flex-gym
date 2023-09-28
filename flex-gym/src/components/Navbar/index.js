import React from "react";
import Logo from "../../assets/Logo.png";
import { Button } from "reactstrap";

const Navbar = ({ listMenu, listAction }) => {
  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center py-2"
      style={{ backgroundColor: "black", paddingLeft: 52, paddingRight: 52 }}
    >
      <div className="d-flex align-items-center" style={{ width: "40%" }}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-center "
        style={{ width: "60%" }}
      >
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ width: "65%" }}
        >
          {listMenu.map((e) => (
            <div key={e?.id}>
              <Button color="transparent">
                <span className="text-white">{e?.label}</span>
              </Button>
            </div>
          ))}
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "10%" }}
        >
          <span className="text-white">|</span>
        </div>
        <div
          className="d-flex flex-row justify-content-between"
          style={{ width: "25%" }}
        >
          {listAction.map((e) => (
            <div key={e?.id}>
              <Button
                className="px-4 py-2"
                style={{
                  backgroundColor: e?.color,
                  borderTopLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderColor: e?.textColor,
                }}
              >
                <span style={{ color: e?.textColor }}>{e?.label}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
