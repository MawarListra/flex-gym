import React, { useEffect, useState } from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ChangePassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [dataUser, setDataUser] = useState({
    oldpassword: "",
    newpassword: "",
    confirm_password: "",
  });

  const validateData = () => {
    if (dataUser?.newpassword !== dataUser?.confirm_password) {
      return false;
    }
    if (
      Object.keys(dataUser).some(
        (key) => key === "" || key === {} || key === null
      )
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const data = {
      oldpassword: dataUser?.oldpassword,
      newpassword: dataUser?.newpassword,
    };
    try {
      const resp = await axios.put(
        `${baseUrl}v1/member/changepassword`,
        data,
        config
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        toast.success("Berhasil ubah password");
        setTimeout(() => {
          navigate("/account");
          setIsLoading(false);
        }, 100);
      } else {
        setIsLoading(false);
        toast.error("Gagal ubah password. Silahkan coba lagi!");
      }
    } catch (e) {
      setIsLoading(false);
      toast.error("Gagal ubah password. Silahkan coba lagi!");
      console.log("cek err", e);
    }
  };

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
              <TextInput
                name="oldpassword"
                label="Password lama"
                placeholder={"Password lama"}
                type={"password"}
                value={dataUser?.oldpassword}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    oldpassword: value,
                  });
                }}
                isRequired={true}
              />
              <TextInput
                name="newpassword"
                label="Password baru"
                placeholder={"Password baru"}
                type={"password"}
                value={dataUser?.newpassword}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    newpassword: value,
                  });
                }}
                isRequired={true}
              />
              <TextInput
                name="confirm_password"
                label="Masukkan ulang password"
                placeholder={"Masukkan ulang password"}
                type={"password"}
                value={dataUser?.confirm_password}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    confirm_password: value,
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
              onClick={() => handleSubmit()}
              disabled={!validateData() || isLoading}
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
                    lineheight: "18px" /* 128.571% */,
                  }}
                >
                  Ganti Password
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
