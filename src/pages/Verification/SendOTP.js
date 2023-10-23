import React, { useState, useEffect } from "react";
import { ChevronLeft } from "react-feather";
import { useNavigate, useLocation } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useTimer } from "react-timer-hook";
import ReactLoading from "react-loading";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const SendOTP = () => {
  const expiredOTP = 40;
  const navigate = useNavigate();
  const location = useLocation();
  console.log("cek location", location);
  const { email } = location.state;
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResend, setResend] = useState(false);
  const parseTime = (time) => {
    time = String(time);
    return time.length === 1 ? "0" + time : time;
  };
  const startTimer = ({ seconds = expiredOTP }) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    setTime(time);
    restart(time);
    setResend(false);
  };

  const { restart, pause, minutes, seconds } = useTimer({
    time,
    onExpire: async () => {
      setResend(true);
      // setOnSubmit(true);
      // setAlertMessage('Waktu Anda Habis');
      return;
    },
  });

  const handleRequestOtp = async () => {
    const payload = {
      email: email,
    };
    setIsLoading(false);
    console.log("cek payload", payload);
    try {
      const resp = await axios.put(`${baseUrl}v1/member/reverify`, payload);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        // setIsLoading(false);

        startTimer({ seconds: expiredOTP });
        // navigate("/otp-success");
      } else {
        toast.error("Gagal request OTP. Silahkan coba lagi!");
        setTime(time);
        restart(time);
      }
    } catch (e) {
      toast.error("Gagal request OTP. Silahkan coba lagi!");
      setIsLoading(false);
      console.log("cek err", e);
    }
  };

  const handleSendOtp = async () => {
    const payload = {
      email: email,
      verif_code: otp,
    };
    setIsLoading(true);
    console.log("cek payload", payload);
    try {
      const resp = await axios.put(`${baseUrl}v1/member/verify`, payload);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setIsLoading(false);
        navigate("/otp-success");
      } else {
        toast.error("Gagal verifikasi. Silahkan coba lagi!");
        setTime(time);
        restart(time);
      }
    } catch (e) {
      toast.error("Gagal verifikasi. Silahkan coba lagi!");
      setIsLoading(false);
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    if (otp?.length === 6 && isLoading) {
      pause();
    }
  }, [isLoading, otp]);

  useEffect(() => {
    startTimer({ seconds: expiredOTP });
    if (otp !== "") {
      setOtp("");
    }
    setOtp("");
  }, []);

  useEffect(() => {
    if (otp.length === 6) {
      handleSendOtp();
    }
  }, [otp]);

  console.log("cek otp", otp);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Toaster />
      <div
        className="d-flex flex-column p-3 justify-content-between w-100 gap-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column gap-4">
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
              Verifikasi
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
              Kode OTP
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
              Kode OTP telah dikirimkan ke email{" "}
              <span className="text-white" style={{ fontWeight: "bold" }}>
                rei***@gmail.com
              </span>
              . Demi keamanan, jangan berikan kodenya ke siapapun termasuk pihak
              GPI.
            </span>
            <div className="d-flex w-100 justify-content-between">
              {isLoading ? (
                <div className="d-flex w-100 justify-content-center align-items-center">
                  <ReactLoading
                    type="spinningBubbles"
                    width={"1.5rem"}
                    height={"auto"}
                    color="white"
                  />
                </div>
              ) : (
                <OtpInput
                  containerStyle="otpContainer"
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
              {isResend ? (
                <span
                  style={{
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: 0.5,
                    color: "#53f60f",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleRequestOtp();
                  }}
                >
                  Kirim ulang kode
                </span>
              ) : (
                <span
                  style={{
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: 0.5,
                    color: "#999",
                  }}
                >
                  Kirim ulang kode?{" "}
                  <span
                    style={{ color: "#F15C59", cursor: "pointer" }}
                    onClick={() => navigate("/registration")}
                  >
                    Tunggu {`${parseTime(seconds)}`} detik
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
