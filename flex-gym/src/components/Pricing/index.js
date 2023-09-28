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
      subPrice: "",
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
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        paddingLeft: 52,
        paddingRight: 52,
      }}
    >
      <div>
        <span style={{ color: "#53F60F" }}>Harga Paket Membership</span>
      </div>
      <div>
        <span
          className="text-white"
          style={{ fontSize: 32, fontWeight: "bold" }}
        >
          Harga membership Flex Gym and Cafe
        </span>
      </div>
      <div
        style={{
          paddingLeft: 96,
          paddingRight: 96,
        }}
      >
        <span
          style={{
            fontSize: 18,
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
        <Button size="md">
          <span>Umum</span>
        </Button>
        <Button size="md">
          <span>Pelajar</span>
        </Button>
      </div>
      <div
        className="d-flex flex-row justify-content-between h-auto mt-4 w-100"
        style={{ gap: 25 }}
      >
        {listData.map((item, i) => (
          <div
            className="d-flex flex-column"
            style={{
              backgroundColor: item?.recomendation ? "#53F60F" : "transparent",
              borderRadius: 10,
              width: "25%",
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
              <div className="d-flex flex-column">
                <span
                  className="text-white"
                  style={{ fontSize: 24, fontWeight: "bold" }}
                >
                  {item?.title}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: item?.subPrice ? "white" : "black",
                  }}
                >
                  {item?.subPrice ? item?.subPrice : 0}
                  {item?.subPrice && (
                    <small style={{ color: "#999999", fontSize: 16 }}>
                      /bulan
                    </small>
                  )}
                </span>
              </div>
              <div
                className="d-flex h-100 align-items-end justify-content-center"
                style={{ marginTop: 56 }}
              >
                <div className="d-flex flex-column ">
                  <div className="d-flex flex-column">
                    <span style={{ color: "#999999" }}>Harga</span>
                    <span style={{ color: "#53F60F", fontSize: 24 }}>
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
