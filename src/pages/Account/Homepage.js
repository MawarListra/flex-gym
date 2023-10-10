import React from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import ProfPic from "../../assets/sporty girl workout.png";

const Homepage = () => {
  const navigate = useNavigate();

  const dataUser = [
    {
      value: "email",
      label: "Email",
      mandatory: true,
      type: "email",
    },
    {
      value: "password",
      label: "Password",
      mandatory: true,
      type: "password",
    },
  ];
  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column p-4 justify-content-between w-100 gap-2"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <div style={{ width: 45, height: 39, flexShrink: 0 }}>
              <img
                src={Logo}
                style={{ width: 45, height: 39, flexShrink: 0 }}
                alt="logo"
              />
            </div>
            <div
              className="d-flex border"
              style={{
                width: 40,
                height: 40,
                borderColor: "#999",
                borderRadius: "50%",
              }}
            >
              <img
                className="d-flex contain w-100 h-100"
                src={ProfPic}
                alt="profile-picture"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-between gap-4"
            style={{ marginTop: 44 }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center"
              style={{ marginBottom: 16 }}
            >
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Nunito Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: 0.5,
                }}
              >
                Masuk
              </span>
            </div>
            <div className="d-flex flex-column gap-2"></div>
          </div>
        </div>

        <div className="d-flex flex-column h-100 justify-content-end gap-4">
          <div className="d-flex w-100">
            <Button
              className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
              style={{
                backgroundColor: "#53f60f",
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
                height: 48,
              }}
            >
              <span
                className="text-black"
                style={{
                  color: "#030304",
                  textAlign: "center",
                  fontFamily: "Nunito Sans",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontweight: 700,
                  lineheight: "18px" /* 128.571% */,
                }}
              >
                Masuk
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
