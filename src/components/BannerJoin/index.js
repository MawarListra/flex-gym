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
        className="d-flex flex-column justify-content-center w-md-50 w-full box-title-banner"
        style={{
          background: "linear-gradient(120deg,#3D821F,#53F60F)",
        }}
      >
        <div className="d-flex paddingComponentRight justify-content-center justify-content-md-start ">
          <span
            className="text-white text-banner"
            style={{ lineHeight: 1, fontWeight: "bold" }}
          >
            Daftar membership Flex Gym and Cafe
          </span>
        </div>
        <div className="d-flex mt-1 justify-content-center justify-content-md-start justify-content-center">
          <span className="text-white text-desc-banner">
            Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
            egestas amet id pretium.
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
            <span
              style={{
                color: "#030304",
                fontFeatureSettings: "clig off liga off",
                fontSamily: "Nunito Sans",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: 0.5,
              }}
            >
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
