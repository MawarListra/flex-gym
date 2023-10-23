import React, { useState } from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components";
import Logo from "../assets/Logo.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const validateData = () => {
    if (
      Object.keys(dataUser).some(
        (key) => key === "" || key === {} || key === null
      )
    ) {
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const resp = await axios.post(`${baseUrl}v1/member/login`, dataUser, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log("cek resp", resp);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        toast.success("Berhasil login");
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("id", resp.data.id);
        setTimeout(() => {
          navigate("/account");
          setIsLoading(false);
        }, 100);
      } else {
        setIsLoading(false);
        toast.error("Gagal login. Silahkan coba lagi!");
      }
    } catch (e) {
      setIsLoading(false);
      toast.error("Gagal login. Silahkan coba lagi!");
      console.log("cek err", e);
    }
  };

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Toaster />
      <div
        className="d-flex flex-column p-3 justify-content-between w-100 gap-2"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row justify-content-start align-items-center gap-2"
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
              Masuk
            </span>
          </div>
          <div
            className="d-flex flex-column justify-content-between gap-4"
            style={{ marginTop: 44 }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center"
              style={{ marginBottom: 16 }}
            >
              <div style={{ width: 80, height: 71, flexShrink: 0 }}>
                <img
                  src={Logo}
                  style={{ width: 80, height: 71, flexShrink: 0 }}
                  alt="logo"
                />
              </div>
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
            <div className="d-flex flex-column gap-2">
              <TextInput
                name="email"
                label="Email"
                placeholder={"Email"}
                type={"text"}
                value={dataUser?.email}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    email: value,
                  });
                }}
                isRequired={true}
              />
              <TextInput
                name="password"
                label="Password"
                placeholder={"Password"}
                type={"password"}
                value={dataUser?.password}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    password: value,
                  });
                }}
                isRequired={true}
              />
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
              disabled={!validateData() || isLoading}
              onClick={() => handleLogin()}
            >
              {isLoading ? (
                <ReactLoading
                  type="spinningBubbles"
                  width={"1.5rem"}
                  height={"auto"}
                  color="white"
                />
              ) : (
                <span
                  className="text-black"
                  style={{
                    color: "#030304",
                    textAlign: "center",
                    fontFamily: "Nunito Sans",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontweight: 700,
                    lineheight: "18px",
                  }}
                >
                  Masuk
                </span>
              )}
            </Button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span
              className="text-white"
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: 0.5,
              }}
            >
              Belum jadi member?{" "}
              <span
                style={{ color: "#53f60f", cursor: "pointer" }}
                onClick={() => navigate("/registration")}
              >
                Daftar sekarang
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
