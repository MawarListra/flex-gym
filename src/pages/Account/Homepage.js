import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Button, Toast } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import ProfPic from "../../assets/sporty girl workout.png";
import QRCode from "qrcode";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { statusMapper } from "../../utils/statusMapper";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Homepage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});
  const [loadQr, setLoadQr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataTransaction, setDataTransaction] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  const option = {
    width: 343,
    height: 331,
    flexShrink: 0,
    margin: 1,
  };

  const getTransactionHistory = async () => {
    setIsLoading(true);
    try {
      const respHistory = await axios.get(
        `${baseUrl}v1/member/historytransaction?page=1&pagesize=100`,
        config
      );
      if (
        respHistory?.status === 200 &&
        respHistory?.data?.status === "success"
      ) {
        setIsLoading(false);
        setDataTransaction(respHistory?.data?.data);
      } else {
        toast.error("Gagal mendappatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const handleGetData = async () => {
    setLoadQr(true);
    try {
      const resp = await axios.get(`${baseUrl}v1/member/myprofile`, config);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setLoadQr(false);
        setData(resp?.data?.data);
        getTransactionHistory();
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    document.querySelector("body").classList.add("scroll");
    document.querySelector("html").classList.add("scroll");
    window.onscroll = function () {};
  }, []);

  useEffect(() => {
    if (data?.id) {
      QRCode.toDataURL(JSON.stringify({ id: data?.id }), option, (err, url) => {
        if (err) {
          console.error("cek err", err);
        } else {
          setImgUrl(url);
        }
      });
      localStorage.setItem("dataProfile", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (!token || token === "") {
      toast.error("Session anda habis. Silahkan login kembali");
      navigate("/login");
    }
  }, [token]);

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
            Hi, {data?.name}
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
            {data?.member_until &&
            moment(data?.member_until) > moment().toDate() ? (
              <div className="d-flex flex-column">
                <span style={{ color: "#999" }}>
                  Membership kamu hingga tanggal
                </span>
                <span style={{ color: "#F15C59" }}>
                  {moment(new Date(data?.member_until)).format("DD MMMM YYYY")}
                </span>
              </div>
            ) : (
              <div>
                <span style={{ color: "#999" }}>
                  Kamu belum memiliki paket gym
                </span>
              </div>
            )}
            <div className="d-flex flex-column justify-content-end">
              <span
                style={{
                  color: "#53F60F",
                  textAlign: "right",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/renew-membership")}
              >
                {data?.member_until &&
                moment(data?.member_until) > moment().toDate()
                  ? "Perpanjang Member"
                  : "Beli Paket Gym"}
              </span>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center pt-2 pb-4 gap-2"
          style={{ borderBottom: "0.5px solid #999" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            {loadQr ? (
              <ReactLoading
                type="spinningBubbles"
                width={"5rem"}
                height={"auto"}
                color="white"
              />
            ) : (
              <img className="d-flex cover" src={imgUrl} alt="qrUser" />
            )}
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
          <div
            className="d-flex flex-column justify-content-between gap-3 mt-2"
            style={{ maxHeight: "30vh", overflowY: "scroll" }}
          >
            {isLoading ? (
              <ReactLoading
                type="bars"
                width={"3rem"}
                height={"auto"}
                color="white"
              />
            ) : (
              dataTransaction.map((e) => {
                return (
                  <div
                    className="d-flex flex-row p-3 justify-content-between align-items-center"
                    style={{
                      borderRadius: 5,
                      border: "0.5px solid #C0C3CF",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/detail-transaction/${e?.id}`);
                      localStorage.setItem(
                        "currDataTransaction",
                        JSON.stringify(e)
                      );
                    }}
                  >
                    <div className="d-flex flex-column justify-content-center gap-2">
                      <span
                        style={{
                          color: statusMapper(e?.is_accepted)?.color,
                          fontFamily: "Nunito Sans",
                          fontSize: 14,
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "18px",
                        }}
                      >
                        {statusMapper(e?.is_accepted)?.text}
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
                        {e?.package?.name}
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
                        {moment(e?.payment_date).format("DD MMMM YYYY")}
                      </span>
                    </div>
                    <div className="d-flex justify-content-center slign-items-center">
                      <ChevronRight
                        style={{ color: "#999", width: "24px", height: "24px" }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
