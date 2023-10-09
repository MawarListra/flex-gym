import React from "react";
import CardioIc from "../../assets/woman running.png";
import FreeWeightIc from "../../assets/sporty girl workout.png";
import YogaIc from "../../assets/woman in yoga pose.png";
import BoxingIc from "../../assets/Workout.png";
import { Button } from "reactstrap";

const Pricing = ({ id }) => {
  const listData = [
    {
      title: "1 Bulan",
      subPrice: null,
      price: 150000,
      recomendation: false,
    },
    {
      title: "3 Bulan",
      subPrice: 133333,
      price: 400000,
      recomendation: false,
    },
    {
      title: "6 Bulan",
      subPrice: 116666,
      price: 700000,
      recomendation: false,
    },
    {
      title: "1 Tahun",
      subPrice: 100000,
      price: 1200000,
      recomendation: true,
    },
  ];
  console.log("cek listdata", listData);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center paddingComponentRight paddingComponentLeft"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
      }}
      id={id}
    >
      <div>
        <span className="text-title-green">Harga Paket Membership</span>
      </div>
      <div>
        <span className="text-white text-title" style={{ fontWeight: "bold" }}>
          Harga membership Flex Gym and Cafe
        </span>
      </div>
      <div className="paddingComponentRight paddingComponentLeft">
        <span
          className="text-desc-title"
          style={{
            color: "#999999",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div
        className="d-flex flex-row justify-content-center mt-4"
        style={{ gap: 10 }}
      >
        <Button
          style={{
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
          }}
        >
          <span
            style={{
              color: "#030304",
              fontFeatureSettings: "clig off liga off",
              fontFamily: "Nunito Sans",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: 0.5,
            }}
          >
            Umum
          </span>
        </Button>
        <Button
          style={{
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
          }}
        >
          <span
            style={{
              color: "#fff",
              fontFeatureSettings: "clig off liga off",
              fontFamily: "Nunito Sans",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: 0.5,
            }}
          >
            Pelajar
          </span>
        </Button>
      </div>
      <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-center h-auto mt-4 w-100 gap-md-25 gap-4">
        {listData.map((item, i) => (
          <div
            className="d-flex flex-column w-md-25 w-auto"
            style={{
              backgroundColor: item?.recomendation ? "#53F60F" : "transparent",
              borderRadius: 10,
            }}
            key={i}
          >
            {item?.recomendation && (
              <div className="d-flex justify-content-center align-items-center text-center">
                <span className="text-recomendation">REKOMENDASI</span>
              </div>
            )}
            <div
              key={i}
              className="box-pricing"
              style={{
                marginTop: item?.recomendation ? 0 : 24,
              }}
            >
              <div className="d-none d-md-flex flex-column jusfify-content-center align-items-center">
                <span className="text-title-pricing">{item?.title}</span>
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
                  {item?.subPrice ? item?.subPrice : undefined}
                  {item?.subPrice && (
                    <small
                      className="text-desc-title"
                      style={{ color: "#999999", fontSize: 14 }}
                    >
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
                      {item?.price}
                    </span>
                  </div>
                  <div className="d-flex mt-3 w-100 ">
                    <div className="d-flex w-100">
                      <Button
                        className="d-flex justify-content-center align-items-center w-100"
                        style={{
                          backgroundColor: item?.recomendation
                            ? "#53F60F"
                            : "black",
                          borderColor: item?.recomendation
                            ? "black"
                            : "#53F60F",
                          height: 48,
                        }}
                      >
                        <span
                          className="text-daftar-member"
                          style={{
                            color: item?.recomendation ? "black" : "#53F60F",
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
                  <span className="text-title-pricing">{item?.title}</span>
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
                      {item?.price}
                    </span>
                  </div>
                  <div className="d-flex" style={{ marginTop: 56 }}>
                    <div>
                      <Button
                        className="d-flex justify-content-center align-items-center w-100"
                        style={{
                          backgroundColor: item?.recomendation
                            ? "#53F60F"
                            : "black",
                          borderColor: item?.recomendation
                            ? "black"
                            : "#53F60F",
                          height: 39,
                        }}
                      >
                        <span
                          className="text-daftar-member"
                          style={{
                            color: item?.recomendation ? "black" : "#53F60F",
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
