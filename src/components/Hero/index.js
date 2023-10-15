import React from "react";
import { Button } from "reactstrap";
import HeroIc from "../../assets/HeroImage.png";
import { useNavigate } from "react-router-dom";

const Hero = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="hero-background d-flex flex-column paddingComponentRight paddingComponentLeft"
      style={{
        marginTop: 32,
        paddingBottom: 96,
        paddingTop: 24,
      }}
      id={id}
    >
      <div className="d-flex d-md-none w-100 px-4">
        <img src={HeroIc} className=" d-flex cover w-100 h-100" alt="hero-ic" />
      </div>
      <div className="d-flex justify-content-md-start justify-content-center">
        <span className="text-title-green">
          #1 Fitness Terlengkap di Yogyakarta
        </span>
      </div>
      <div className="title-hero-box mb-2">
        <span className="text-white text-title-hero">
          <span className="text-outline text-title-hero">BUILD</span> YOUR BODY
        </span>
        <span className="text-white text-title-hero">AND THEN FLEX IT</span>
      </div>
      <div className="title-hero-box mb-4">
        <span className="text-desc-title">
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div className="title-hero-box flex-row gap-3 gap-md-3">
        <Button
          className="btnRegister"
          style={{
            backgroundColor: "#53F60F",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "#53F60F",
            fontSize: 14,
          }}
          onClick={() => navigate("/registration")}
        >
          <span className="text-black">Daftar Sekarang</span>
        </Button>
        <Button
          className="btnContact"
          style={{
            fontSize: 14,
            backgroundColor: "black",
            borderColor: "#53F60F",
            color: "#53F60F",
          }}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=+62895378229030&text=Halo%20min!%20saya%20berminat%20untuk%20mendaftar%20member%20di%20Flex%20Gym%20and%20Cafe",
              "_blank"
            )
          }
        >
          Kontak Kami
        </Button>
      </div>
    </div>
  );
};

export default Hero;
