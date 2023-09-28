import React from "react";
import { Button } from "reactstrap";
import bannerJoinIc from "../../assets/bannerjoin.png";

const BannerJoin = () => {
  return (
    <div
      className="d-flex flex-row"
      style={{
        paddingTop: 72,
        // paddingBottom: 72,
      }}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center w-50"
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 32,
          paddingBottom: 32,
          background: "linear-gradient(120deg,#3D821F,#53F60F)",
        }}
      >
        <div style={{ paddingRight: 44 }}>
          <span
            className="text-white"
            style={{ fontSize: 44, lineHeight: 1, fontWeight: "bold" }}
          >
            Daftar membership Flex Gym and Cafe
          </span>
        </div>
        <div className="mt-1">
          <span className="text-white" style={{ fontSize: 14 }}>
            Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
            egestas amet id pretium.{" "}
          </span>
        </div>
        <div className="d-flex w-100" style={{ marginTop: 32 }}>
          <Button
            className="px-4 py-2"
            style={{ backgroundColor: "#fff", borderColor: "#fff" }}
          >
            <span className="text-black " style={{ fontWeight: "bold" }}>
              Gabung Sekarang
            </span>
          </Button>
        </div>
      </div>
      <div className="d-flex w-50">
        <img src={bannerJoinIc} alt="banner-join" />
      </div>
    </div>
  );
};

export default BannerJoin;
