import React from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import SuccessIc from "../../assets/success-verif.png";

const SuccessOTP = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column p-4 w-100 h-100 gap-4 justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="d-flex flex-column gap-4 justify-content-end align-items-center"
          style={{ height: "50%" }}
        >
          <div className="">
            <img src={SuccessIc} alt="success-verif" />
          </div>
          <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
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
              Pendaftaran Berhasil!{" "}
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
                textAlign: "center",
              }}
            >
              Selamat! Kamu telah berhasil mendaftarkan akun kamu. Jangan lupa
              untuk mendaftar member Flex Gym and Cafe!
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-end gap-4"
          style={{ height: "50%", position: "sticky", bottom: 0 }}
        >
          <div className="d-flex w-100">
            <Button
              className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
              style={{
                backgroundColor: "#53f60f",
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
                height: 48,
              }}
              onClick={() => navigate("/login")}
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
                Pergi Halaman Login
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessOTP;
