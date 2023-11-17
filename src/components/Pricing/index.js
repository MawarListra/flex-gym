import React, { useState, useEffect, useCallback } from "react";
import { Button } from "reactstrap";
import { currencyFormatter } from "../../utils/currencyFormatter";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Pricing = ({ id, currType, setCurrType = () => {} }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  const [typeList, setTypeList] = useState([]);
  const [listPricing, setListPricing] = useState([]);

  const getTypeList = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/package_type/getall`, config);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setTypeList(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const getDataPricing = useCallback(async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/package_data/getall?page=1&pagesize=99&type_id=${currType}`,
        config
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setListPricing(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  }, [currType]);

  useEffect(() => {
    getTypeList();
  }, []);

  useEffect(() => {
    getDataPricing();
  }, [getDataPricing]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center paddingComponentRight paddingComponentLeft"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
      }}
      id={id}
    >
      <Toaster />
      <div>
        <span className="text-title-green">Harga Paket Membership</span>
      </div>
      <div>
        <span className="text-white text-title" style={{ fontWeight: "bold" }}>
          Harga membership Flex Gym and Cafe
        </span>
      </div>
      <div className="paddingComponentRight paddingComponentLeft">
        <span className="text-desc-title">
          Daftar harga membership Flex Gym and Cafe. Tentukan paketmu dan daftar
          member sekarang juga
        </span>
      </div>
      <div
        className="d-flex flex-row justify-content-center mt-4"
        style={{ gap: 10 }}
      >
        {typeList.map((e) => {
          return (
            <Button
              style={
                e?.id === currType
                  ? {
                      color: "#53F60F",
                      borderRadius: 5,
                      border: "1px solid  #53F60F",
                      backgroundColor: "#53F60F",
                      display: "flex",
                      width: 93,
                      height: 48,
                      padding: 24,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      flexShrink: 0,
                    }
                  : {
                      display: "flex",
                      width: 93,
                      height: 48,
                      padding: 24,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      flexShrink: 0,
                      borderRadius: 5,
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }
              }
              key={e?.id}
              onClick={() => {
                setCurrType(e?.id);
              }}
            >
              <span
                style={
                  e?.id === currType
                    ? {
                        color: "#030304",
                        fontFeatureSettings: "clig off liga off",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: 0.5,
                      }
                    : {
                        color: "#fff",
                        fontFeatureSettings: "clig off liga off",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: 0.5,
                      }
                }
              >
                {e?.name}
              </span>
            </Button>
          );
        })}
      </div>
      <div className="d-flex flex-row flex-wrap  justify-content-center h-auto mt-4 w-100 gap-md-25 gap-3">
        {listPricing.map((item, i) => (
          <div
            className="d-flex flex-column w-md-25 w-auto"
            style={{
              backgroundColor:
                item?.duration === 12 ? "#53F60F" : "transparent",
              borderRadius: 10,
            }}
            key={i}
          >
            {item?.duration === 12 && (
              <div className="d-flex justify-content-center align-items-center text-center">
                <span className="text-recomendation">REKOMENDASI</span>
              </div>
            )}
            <div
              key={i}
              className="box-pricing"
              style={{
                marginTop: item?.duration === 12 ? 0 : 24,
              }}
            >
              <div className="d-none d-md-flex flex-column jusfify-content-center align-items-center">
                <span className="text-title-pricing">{item?.name}</span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  {item?.duration > 1
                    ? currencyFormatter(item?.price / item?.duration)
                    : undefined}
                  {item?.duration > 1 && (
                    <small className="text-desc-title" style={{ fontSize: 14 }}>
                      /bulan
                    </small>
                  )}
                </span>
              </div>
              <div
                className="d-none d-md-flex h-100 w-100 align-items-end justify-content-center"
                style={{ marginTop: 56 }}
              >
                <div className="d-flex flex-column w-100">
                  <div className="d-flex flex-column w-100">
                    <span
                      style={{
                        color: "#FFF",
                        fontFeatureSettings: "clig off liga off",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: 0.5,
                      }}
                    >
                      Harga
                    </span>
                    <span
                      style={{
                        color: "#53F60F",
                        fontFamily: "Nunito Sans",
                        fontSize: 24,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: 0.3,
                      }}
                    >
                      {currencyFormatter(item?.price)}
                    </span>
                  </div>
                  <div className="d-flex mt-3 w-100 ">
                    <div className="d-flex w-100">
                      <Button
                        className="d-flex justify-content-center align-items-center w-100"
                        style={{
                          backgroundColor:
                            item?.duration === 12 ? "#53F60F" : "black",
                          borderColor:
                            item?.duration === 12 ? "black" : "#53F60F",
                          height: 48,
                        }}
                        onClick={() => navigate("/registration")}
                      >
                        <span
                          className="text-daftar-member"
                          style={{
                            color: item?.duration === 12 ? "black" : "#53F60F",
                          }}
                        >
                          Daftar Membership
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex d-md-none h-100 align-items-end justify-content-center">
                <div className="d-flex flex-column">
                  <span className="text-title-pricing">{item?.name}</span>
                  <div className="d-flex flex-column">
                    <span
                      style={{
                        color: "#FFF",
                        fontFeatureSettings: "clig off liga off",
                        fontFamily: "Nunito Sans",
                        fontSize: 12,
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: 0.5,
                      }}
                    >
                      Harga
                    </span>
                    <span
                      style={{
                        color: "#53F60F",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: 0.3,
                      }}
                    >
                      {currencyFormatter(item?.price)}
                    </span>
                  </div>
                  <div className="d-flex" style={{ marginTop: 56 }}>
                    <div>
                      <Button
                        className="d-flex justify-content-center align-items-center w-100"
                        style={{
                          backgroundColor:
                            item?.duration === 12 ? "#53F60F" : "black",
                          borderColor:
                            item?.duration === 12 ? "black" : "#53F60F",
                          height: 39,
                        }}
                        onClick={() => navigate("/registration")}
                      >
                        <span
                          className="text-daftar-member"
                          style={{
                            color: item?.duration === 12 ? "black" : "#53F60F",
                          }}
                        >
                          Daftar Membership
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
