import React from "react";
import { ChevronLeft } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components";

const EditProfile = () => {
  const navigate = useNavigate();
  const dataUser = [
    {
      name: "name",
      label: "Nama Panjang",
      isRequired: true,
      type: "text",
    },
    {
      name: "phoneNumber",
      label: "Nomor Handphone",
      isRequired: true,
      type: "text",
    },
    {
      name: "bornDate",
      label: "Tanggal Lahir",
      isRequired: true,
      type: "dateWithPrepend",
    },
    {
      name: "gender",
      label: "Jenis Kelamin",
      isRequired: true,
      type: "select",
      selectOption: [
        { id: "male", name: "Laki-laki" },
        { id: "female", name: "Perempuan" },
      ],
    },
  ];
  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
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
            {dataUser.map((e) => (
              <TextInput
                name={e?.name}
                label={e?.label}
                placeholder={e?.label}
                type={e?.type}
                {...e}
              />
            ))}
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
              >
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
