import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import ProfPic from "../../assets/sporty girl workout.png";
import QRCode from "qrcode";

const Homepage = () => {
  const navigate = useNavigate();

  const dataUser = "Rein, active";
  const [imgUrl, setImgUrl] = useState("");
  const option = {
    width: 343,
    height: 331,
    flexShrink: 0,
    margin: 1,
  };
  const dataTransaksi = [
    {
      id: 0,
      status: "success",
      pembelian: "Paket 1 bulan - Rp150.000 (Umum)",
      tanggal: "17 Desember 2023",
    },
    {
      id: 1,
      status: "failed",
      pembelian: "Paket 1 bulan - Rp150.000 (Umum)",
      tanggal: "17 Desember 2023",
    },
    {
      id: 2,
      status: "pending",
      pembelian: "Paket 1 bulan - Rp150.000 (Umum)",
      tanggal: "17 Desember 2023",
    },
  ];

  const statusMapper = {
    success: {
      text: "Pembelian Berhasil",
      color: "#53F60F",
    },
    failed: {
      text: "Pembelian Gagal",
      color: "#F15C59",
    },
    pending: {
      text: "Sedang Diproses",
      color: "#FC9D05",
    },
  };

  useEffect(() => {
    QRCode.toDataURL(dataUser, option, (err, url) => {
      if (err) {
        console.error("cek err", err);
      } else {
        setImgUrl(url);
        console.log("cek url", url);
        // Now 'url' contains the QR code image data URL
        // You can display this image URL in an <img> tag or use it as needed
      }
    });
  }, []);
  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column p-3 w-100 gap-2"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ cursor: "pointer" }}
        >
          <div
            style={{ width: 45, height: 39, flexShrink: 0 }}
            onClick={() => navigate("/")}
          >
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
            onClick={() => navigate("/profile")}
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
          className="d-flex flex-column py-2"
          style={{ borderBottom: "0.5px solid #999" }}
        >
          <span
            style={{
              color: "#FFF",
              fontfeatureSettings: "clig off liga off",
              fontFamily: "Nunito Sans",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            Hi, Andrianto
          </span>
          <div
            className="d-flex flex-row justify-content-between align-items-end"
            style={{
              fontFamily: "Nunito Sans",
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: 0.5,
            }}
          >
            <div className="d-flex flex-column">
              <span style={{ color: "#999" }}>
                Membership kamu hingga tanggal
              </span>
              <span style={{ color: "#F15C59" }}>8 September 2023</span>
            </div>
            <div className="d-flex flex-column justify-content-end">
              <span
                style={{
                  color: "#53F60F",
                  textAlign: "right",
                  textDecoration: "underline",
                }}
              >
                Perpanjang Member
              </span>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center pt-2 pb-4 gap-2"
          style={{ borderBottom: "0.5px solid #999" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img className="d-flex cover" src={imgUrl} alt="qrUser" />
          </div>
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
            }}
          >
            Scan QR untuk masuk ke Gym
          </span>
        </div>
        <div className="d-flex flex-column justify-content-between pt-4 pb-2">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Nunito Sans",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "22px",
            }}
          >
            History Pembelian
          </span>
          <div className="d-flex flex-column justify-content-between gap-3 mt-2">
            {dataTransaksi.map((e) => {
              return (
                <div
                  className="d-flex flex-row p-3 justify-content-between align-items-center"
                  style={{
                    borderRadius: 5,
                    border: "0.5px solid #C0C3CF",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/detail-transaction/${e?.id}`)}
                >
                  <div className="d-flex flex-column justify-content-center gap-2">
                    <span
                      style={{
                        color: statusMapper[e?.status]?.color,
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "18px",
                      }}
                    >
                      {statusMapper[e?.status]?.text}
                    </span>
                    <span
                      style={{
                        color: "#FFF",
                        fontFamily: "Nunito Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "18px",
                      }}
                    >
                      {e?.pembelian}
                    </span>
                    <span
                      style={{
                        color: "#999",
                        fontFamily: "Nunito Sans",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "16px",
                      }}
                    >
                      {e?.tanggal}
                    </span>
                  </div>
                  <div className="d-flex justify-content-center slign-items-center">
                    <ChevronRight
                      style={{ color: "#999", width: "24px", height: "24px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
