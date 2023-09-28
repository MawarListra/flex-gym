import React from "react";
import {
  Navbar,
  Hero,
  Facilities,
  Program,
  Pricing,
  BannerJoin,
  Location,
  Footer,
} from "../components";

const Homepage = () => {
  const listMenu = [
    {
      id: "home",
      label: "HOME",
    },
    {
      id: "program",
      label: "PROGRAM",
    },
    {
      id: "package",
      label: "PAKET",
    },
    {
      id: "contact",
      label: "KONTAK",
    },
  ];

  const listAction = [
    {
      id: "login",
      label: "Masuk",
      color: "black",
      textColor: "#53F60F",
    },
    {
      id: "register",
      label: "Daftar",
      color: "#53F60F",
      textColor: "black",
    },
  ];
  return (
    <div className="d-flex flex-column bg-black">
      <Navbar listMenu={listMenu} listAction={listAction} />
      <Hero />
      <Location />
      <Facilities />
      <Program />
      <Pricing />
      <BannerJoin />
      <Footer />
    </div>
  );
};

export default Homepage;
