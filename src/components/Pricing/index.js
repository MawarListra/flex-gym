import React from "react";
import CardioIc from "../../assets/woman running.png";
import FreeWeightIc from "../../assets/sporty girl workout.png";
import YogaIc from "../../assets/woman in yoga pose.png";
import BoxingIc from "../../assets/Workout.png";
import { Button } from "reactstrap";

const Pricing = () => {
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
      id="package"
    >
      <div>
        <span style={{ color: "#53F60F" }}>Harga Paket Membership</span>
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
        <Button color="transparent" size="md">
          <span style={{ color: "#53F60F" }}>Umum</span>
        </Button>
        <Button color="transparent" size="md">
          <span className="text-white">Pelajar</span>
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
                <span style={{ fontWeight: "bold", fontSize: 16 }}>
                  REKOMENDASI
                </span>
              </div>
            )}
            <div
              key={i}
              className="d-flex flex-column p-4"
              style={{
                backgroundColor: "#18181C",
                borderRadius: 10,
                marginTop: item?.recomendation ? 0 : 24,
              }}
            >
              <div className="d-none d-md-flex flex-column">
                <span
                  className="text-white text-title"
                  style={{ fontWeight: "bold" }}
                >
                  {item?.title}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: item?.subPrice ? "white" : "transparent",
                  }}
                >
                  {item?.subPrice ? item?.subPrice : 0}
                  {item?.subPrice && (
                    <small
                      className="text-desc-title"
                      style={{ color: "#999999" }}
                    >
                      /bulan
                    </small>
                  )}
                </span>
              </div>
              <div
                className="d-none d-md-flex h-100 align-items-end justify-content-center"
                style={{ marginTop: 56 }}
              >
                <div className="d-flex flex-column ">
                  <div className="d-flex flex-column">
                    <span
                      className="text-sm text-md-base"
                      style={{ color: "#999999" }}
                    >
                      Harga
                    </span>
                    <span
                      className="text-sm text-md-base"
                      style={{ color: "#53F60F" }}
                    >
                      {item?.price}
                    </span>
                  </div>
                  <div className="d-flex mt-3">
                    <div>
                      <Button
                        style={{
                          backgroundColor: item?.recomendation
                            ? "#53F60F"
                            : "black",
                          borderColor: item?.recomendation
                            ? "black"
                            : "#53F60F",
                        }}
                      >
                        <span
                          className="text-desc-title"
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
                  <div className="d-flex flex-column">
                    <span
                      className="text-sm text-md-base"
                      style={{ color: "#999999" }}
                    >
                      Harga
                    </span>
                    <span
                      className="text-sm text-md-base"
                      style={{ color: "#53F60F" }}
                    >
                      {item?.price}
                    </span>
                  </div>
                  <div className="d-flex" style={{ marginTop: 56 }}>
                    <div>
                      <Button
                        style={{
                          backgroundColor: item?.recomendation
                            ? "#53F60F"
                            : "black",
                          borderColor: item?.recomendation
                            ? "black"
                            : "#53F60F",
                        }}
                      >
                        <span
                          className="text-desc-title"
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
