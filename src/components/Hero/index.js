import React from "react";
import { Button } from "reactstrap";

const Hero = () => {
  return (
    <div
      className="hero-background d-flex flex-column"
      style={{
        marginTop: 32,
        paddingBottom: 96,
        paddingTop: 24,
        paddingLeft: 52,
        paddingRight: 52,
      }}
    >
      <div>
        <span style={{ color: "#53F60F" }}>
          #1 Fitness Terlengkap di Yogyakarta
        </span>
      </div>
      <div
        className="mb-2 d-flex flex-column  "
        style={{ fontWeight: "bolder" }}
      >
        <span className="text-white" style={{ fontSize: 72 }}>
          <span className="text-outline" style={{ fontSize: 72 }}>
            SHAPE
          </span>{" "}
          YOUR
        </span>
        <span className="text-white" style={{ fontSize: 72 }}>
          IDEAL BODY
        </span>
      </div>
      <div className="mb-4 w-50">
        <span style={{ fontSize: 22, color: "#999999" }}>
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div className="d-flex justify-content-between" style={{ width: "40%" }}>
        <Button
          className="px-4 py-2 "
          style={{
            backgroundColor: "#53F60F",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "#53F60F",
            width: "45%",
          }}
        >
          <span className="text-black">Daftar Sekarang</span>
        </Button>
        <Button
          className="px-4 py-3"
          style={{
            backgroundColor: "black",
            borderColor: "#53F60F",
            color: "#53F60F",
            width: "45%",
          }}
        >
          Kontak Kami
        </Button>
      </div>
    </div>
  );
};

export default Hero;
