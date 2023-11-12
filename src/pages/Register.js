import React, { useEffect, useState } from "react";
import { Calendar, ChevronLeft } from "react-feather";
import { Button, InputGroup, InputGroupText } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components";
import Select from "react-select";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";
import CustomDateInput from "../components/CustomDateInput";
import moment from "moment";
import DatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarIc from "../assets/icon/date_range.svg";

registerLocale("id", id);
const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Registrasi = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [tempData, setTempData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    born_date: "",
    sex: "",
  });

  const genderOption = [
    { id: "male", name: "Laki-Laki" },
    { id: "female", name: "Perempuan" },
  ];

  const dataRegister = new FormData();
  dataRegister.append("email", "");
  dataRegister.append("password", "");
  dataRegister.append("name", "");
  dataRegister.append("phone", "");
  dataRegister.append("born_date", "");
  dataRegister.append("sex", "");

  const validateData = () => {
    // if (tempData?.confirmPassword !== tempData?.password) {
    //   return false;
    // }
    if (
      Object.keys(tempData).some(
        (key) => key === "" || key === {} || key === null
      )
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    dataRegister.set("email", tempData?.email);
    dataRegister.set("password", tempData?.password);
    dataRegister.set("name", tempData?.name);
    dataRegister.set("phone", tempData?.phone);
    dataRegister.set("born_date", tempData?.born_date);
    dataRegister.set("sex", tempData?.sex?.name);

    for (const pair of dataRegister.entries()) {
      console.log("cek datas", pair[0] + ", " + pair[1]);
    }

    try {
      const resp = await axios.post(
        `${baseUrl}v1/member/register`,
        dataRegister
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        localStorage.setItem("emailRegist", resp?.data?.m_member?.email);
        toast.success("Berhasil mendaftar. Silahkan verif akun anda!");
        setIsLoading(false);
        setTimeout(() => {
          navigate("/verif-account", { state: { email: tempData?.email } });
        }, 1000);
      }
    } catch (e) {
      setIsLoading(false);
      if (e.response.status === 422) {
        toast.error("Email sudah terdaftar");
      } else {
        toast.error("Gagal mendaftar. Silahkan coba lagi!");
      }
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
        className="d-flex flex-column p-3 justify-content-between w-100 gap-4"
        style={{ minHeight: "100vh" }}
      >
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
            Daftar Member
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
            Daftar Member Flex Gym and Cafe
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
          <div className="d-flex flex-column">
            <TextInput
              name="email"
              label="Email"
              placeholder={"Email"}
              type={"text"}
              value={tempData?.email}
              handleChange={({ target: { value } }) => {
                setTempData({
                  ...tempData,
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
              value={tempData?.password}
              handleChange={({ target: { value } }) => {
                setTempData({
                  ...tempData,
                  password: value,
                });
              }}
              isRequired={true}
            />
            <TextInput
              name="confirm-pasword"
              label="Masukkan ulang password"
              placeholder={"Masukkan ulang password"}
              type={"password"}
              value={tempData?.confirmPassword}
              handleChange={({ target: { value } }) => {
                setTempData({
                  ...tempData,
                  confirmPassword: value,
                });
              }}
              // notMatch={tempData?.confirmPassword !== tempData?.password}
              isRequired={true}
            />
            <TextInput
              name="name"
              label="Nama Panjang"
              placeholder={"Nama Panjang"}
              type={"text"}
              value={tempData?.name}
              handleChange={({ target: { value } }) => {
                setTempData({
                  ...tempData,
                  name: value,
                });
              }}
              isRequired={true}
            />
            <TextInput
              name="phone"
              label="Nomor Handphone"
              placeholder={"Nomor Handphone"}
              type={"text"}
              value={tempData?.phone}
              handleChange={({ target: { value } }) => {
                setTempData({
                  ...tempData,
                  phone: value,
                });
              }}
              isRequired={true}
            />
            <div className="d-flex flex-column">
              <small className="font-weight-bold pb-2 text-white d-block">
                Tanggal Lahir
                <span style={{ color: "#F83245" }}> *</span>
              </small>
              <div className="w-100 " style={{ position: "relative" }}>
                <DatePicker
                  locale="id"
                  placeholderText="Tanggal Lahir"
                  className="form-input-control"
                  selected={
                    tempData?.born_date ? new Date(tempData?.born_date) : null
                  }
                  onChange={(date) => {
                    setTempData({ ...tempData, born_date: date });
                  }}
                  dateFormat={"dd-MMM-yyyy"}
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                  popperPlacement="bottom-end"
                  popperModifiers={{
                    flip: {
                      behavior: ["bottom"],
                    },
                  }}
                  showPopperArrow={false}
                />
                <img
                  src={CalendarIc}
                  style={{
                    position: "absolute",
                    right: 15,
                    top: 10,
                    zIndex: 9999,
                  }}
                />
              </div>
            </div>
            <div className="d-flex flex-column">
              <small className="font-weight-bold pb-2 text-white d-block">
                Jenis Kelamin
                <span style={{ color: "#F83245" }}> *</span>
              </small>
              <Select
                styles={{
                  // Fixes the overlapping problem of the component
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                height={48}
                // isDisabled={disabled}
                placeholder={"Jenis Kelamin"}
                // isSearchable={search}
                options={genderOption}
                value={genderOption.find((e) => e?.id === tempData?.sex?.id)}
                onChange={(e) =>
                  setTempData({
                    ...tempData,
                    sex: e,
                  })
                }
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                theme={(theme) => {
                  return {
                    ...theme,
                    borderRadius: "0.29rem",
                    borderWidth: 1,
                    colors: {
                      ...theme.colors,
                      primary25: "rgba(60,68,177,0.15)",
                      primary50: "rgba(60,68,177,0.15)",
                      primary: "#3c44b1",
                    },
                  };
                }}
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
              onClick={() =>
                tempData?.confirmPassword !== tempData?.password
                  ? toast.error("Password Anda tidak cocok")
                  : handleSubmit()
              }
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
                  Daftar
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
              Sudah punya akun?{" "}
              <span
                style={{ color: "#53f60f", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Masuk
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
