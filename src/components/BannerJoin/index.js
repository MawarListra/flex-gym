import React from "react";
import { Button } from "reactstrap";
import bannerJoinIc from "../../assets/bannerjoin.png";

const BannerJoin = () => {
  return (
    <div
      className="d-flex flex-md-row flex-column"
      style={{
        paddingTop: 72,
      }}
    >
      <div className="d-flex d-md-none">
        <img src={bannerJoinIc} className="w-100" alt="banner-join" />
      </div>
      <div
        className="d-flex flex-column justify-content-center w-md-50 w-full"
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
            className="text-white text-banner"
            style={{ lineHeight: 1, fontWeight: "bold" }}
          >
            Daftar membership Flex Gym and Cafe
          </span>
        </div>
        <div className="mt-1">
          <span className="text-white text-desc-title">
            Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
            egestas amet id pretium.{" "}
          </span>
        </div>
        <div
          className="d-flex w-100 justify-content-md-start justify-content-center"
          style={{ marginTop: 32 }}
        >
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
      <div className="d-md-flex d-none w-50">
        <img src={bannerJoinIc} className="w-100" alt="banner-join" />
      </div>
    </div>
  );
};

export default BannerJoin;
