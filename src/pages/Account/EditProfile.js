import React, { useState,useEffect } from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components";
import Select from "react-select";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [dataUser, setDataUser] = useState({
    name: "",
    phone: "",
    born_date: "",
    sex: {},
  });
  const genderOption = [
    { id: "male", name: "Laki-Laki" },
    { id: "female", name: "Perempuan" },
  ];

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

  console.log("cek token", token);

  const handleUbahData = async () => {
    setIsLoading(true);

    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const data = {
      ...dataUser,
      sex: dataUser?.sex?.name,
    };
    try {
      const resp = await axios.put(
        `${baseUrl}v1/member/updatedetail`,
        data,
        config
      );
      console.log("cek resp", resp);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        toast.success("Berhasil ubah data!");
        setIsLoading(false);
        setTimeout(() => {
          navigate("/account");
        }, 1000);
      }
    } catch (e) {
      setIsLoading(false);
      toast.error("Gagal ubah data. Silahkan coba lagi!");
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
      <div className="d-flex flex-column p-3 w-100 gap-4">
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
            Ubah Profile
          </span>
        </div>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100vh" }}
        >
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
              Ubah Profile
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
                name="name"
                label="Nama Panjang"
                placeholder={"Nama Panjang"}
                type={"text"}
                value={dataUser?.name}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
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
                value={dataUser?.phone}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    phone: value,
                  });
                }}
                isRequired={true}
              />
              <TextInput
                name="born_date"
                label="Tanggal Lahir"
                placeholder={"Tanggal Lahir"}
                type={"dateWithPrepend"}
                value={dataUser?.born_date}
                handleChange={({ target: { value } }) => {
                  setDataUser({
                    ...dataUser,
                    born_date: value,
                  });
                }}
                isRequired={true}
              />
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
                  value={genderOption.find((e) => e?.id === dataUser?.sex?.id)}
                  onChange={(e) =>
                    setDataUser({
                      ...dataUser,
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
          <div className="d-flex flex-column justify-content-end gap-4">
            <div className="d-flex w-100">
              <Button
                className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
                style={{
                  backgroundColor: "#53f60f",
                  borderTopLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  height: 48,
                }}
                onClick={() => handleUbahData()}
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
                    Simpan
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
