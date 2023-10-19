import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";
import infoAlert from "../../assets/icon/info_outline.svg";
import bcaIc from "../../assets/bca-removebg-preview 1.png";
import buktiTransfer from "../../assets/Text Field.png";
import { Button } from "reactstrap";
import ProfPic from "../../assets/sporty girl workout.png";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("cek id", id);

  const listMenu = [
    {
      id: "update-profile",
      label: "Ubah Profile",
      onClick: () => navigate("/update-profile"),
    },
    {
      id: "manage-payment-account",
      label: "Kelola Akun Pembayaran",
      onClick: () => navigate("/account-payment"),
    },
    {
      id: "renew-membership",
      label: "Perpanjang Member",
      onClick: () => navigate("/renew-membership"),
    },
    {
      id: "change-password",
      label: "Change Password",
      onClick: () => navigate("/change-password"),
    },
    {
      id: "logout",
      label: "Logout",
      onClick: () => navigate("/"),
    },
  ];

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
          className="d-flex flex-row justify-content-start gap-2 align-items-center h-auto"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
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
            Profile
          </span>
        </div>
        <div className="d-flex flex-column mt-2 pb-2 gap-2">
          <div
            className="d-flex flex-row align-items-center p-3 gap-3"
            style={{ borderRadius: "5px", border: "0.5px solid #999" }}
          >
            <div
              className="d-flex border "
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
            <div className="d-flex flex-column">
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
                className="d-flex flex-column"
                style={{
                  fontFamily: "Nunito Sans",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: 0.5,
                }}
              >
                <span style={{ color: "#999" }}>
                  Membership kamu hingga tanggal
                </span>
                <span style={{ color: "#F15C59" }}>8 September 2023</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between mt-2">
            {listMenu.map((e) => {
              return (
                <div
                  className="d-flex flex-row justify-content-between align-items-center w-100 py-2"
                  style={{
                    borderBottom: "0.5px solid #999",
                    cursor: "pointer",
                  }}
                  onClick={e?.onClick}
                >
                  <span
                    style={{
                      color: e?.id === "logout" ? "#F15C59" : "#FFF",
                      fontFeatureSettings: "clig off liga off",
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {e?.label}
                  </span>
                  <ChevronRight
                    style={{
                      width: 24,
                      height: 24,
                      color: e?.id === "logout" ? "#F15C59" : "#FFF",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
