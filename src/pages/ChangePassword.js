import React from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dataUser = [
    {
      value: "used-password",
      label: "Password lama",
      mandatory: true,
      type: "password",
    },
    {
      value: "new-password",
      label: "Password baru",
      mandatory: true,
      type: "password",
    },
    {
      value: "confirm-pass",
      label: "Masukkan ulang Password",
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
        className="d-flex flex-column p-4 justify-content-between w-100 gap-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column gap-4">
          <div
            className="d-flex flex-row justify-content-start gap-2 align-items-center h-auto"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <ChevronLeft color="white" style={{ width: 24, height: 24 }} />
            <span
              className="text-white"
              style={{
                fontSize: 14,
                fontFamily: "Nunito Sans",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
              }}
            >
              Ganti Password
            </span>
          </div>
          <div className="d-flex flex-column gap-2">
            <span
              className="text-white"
              style={{
                fontFamily: "Nunito Sans",
                fontSize: 18,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: 0.5,
              }}
            >
              Ganti Password
            </span>
            <span
              style={{
                color: "#999",
                fontFeatureSettings: "clig off liga off",
                fontFamily: "Nunito Sans",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: 0.5,
                marginBottom: 16,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
              egestas amet id pretium.
            </span>
            <div className="d-flex flex-column gap-2">
              {dataUser.map((e) => (
                <Input
                  label={e?.label}
                  required={e?.mandatory}
                  placeholder={e?.label}
                  type={e?.type}
                />
              ))}
            </div>
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
                Ganti Password
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
