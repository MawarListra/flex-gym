import React, { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";
import infoAlert from "../../assets/icon/info_outline.svg";
import bcaIc from "../../assets/bca-removebg-preview 1.png";
import buktiTransfer from "../../assets/Text Field.png";
import { Button } from "reactstrap";
import ProfPic from "../../assets/sporty girl workout.png";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { calculateMembershipDuration } from "../../utils/calculateMembershipDuration";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const dataUser = JSON.parse(localStorage.getItem("dataProfile"));
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
      onClick: () => {
        navigate("/login");
        localStorage.setItem("token", "");
      },
    },
  ];

  useEffect(() => {
    if (!token || token === "") {
      toast.error("Session anda habis. Silahkan login kembali");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    document.querySelector("body").classList.add("scroll");
    document.querySelector("html").classList.add("scroll");
    window.onscroll = function () {};
  }, []);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Toaster />
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
                Hi, {dataUser?.name}
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
                {dataUser?.member_until &&
                moment(dataUser?.member_until) > moment().toDate() ? (
                  <>
                    <span style={{ color: "#999" }}>
                      Membership kamu hingga tanggal
                    </span>
                    <span
                      style={{
                        color:
                          calculateMembershipDuration(dataUser?.member_until) <=
                          7
                            ? "#F15C59"
                            : "#53F60F",
                      }}
                    >
                      {calculateMembershipDuration(dataUser?.member_until) > 7
                        ? moment(new Date(dataUser?.member_until)).format(
                            "DD MMMM YYYY"
                          )
                        : `${calculateMembershipDuration(
                            dataUser?.member_until
                          )} hari lagi.`}
                    </span>
                  </>
                ) : (
                  <span style={{ color: "#999" }}>
                    Kamu belum memiliki paket gym
                  </span>
                )}
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
