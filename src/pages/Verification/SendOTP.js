import React, { useState } from "react";
import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const SendOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column p-3 justify-content-between w-100 gap-4"
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
            <div className="d-flex w-100">
              <OtpInput
                containerStyle="otpContainer"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
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
                  Tunggu 40 detik
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
