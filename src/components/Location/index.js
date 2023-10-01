import React, { useState } from "react";
import { Button } from "reactstrap";
import { ChevronRight, ChevronLeft } from "react-feather";
import GymIc from "../../assets/gym.png";
import Image1 from "../../assets/image1.png";
import { MapPin } from "react-feather";

const Location = () => {
  const listData = [
    {
      title: "Tempat Luas & Nyaman",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: Image1,
    },
    {
      title: "Bangunan Besar ",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: GymIc,
    },
    {
      title: "Fasilitas Lengkap",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: GymIc,
    },
    {
      title: "Tempat Luas & Nyaman",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: Image1,
    },
  ];
  const [currIdx, setCurrIdx] = useState(0);
  return (
    <div
      className="d-flex flex-column flex-md-row paddingComponentRight md-paddingComponentLeft"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        gap: 10,
      }}
      id="contact"
    >
      <div
        className="d-flex flex-column align-items-center justify-content-between width-why-us"
        style={{
          overflowX: "auto",
          maxWidth: "100%",
        }}
      >
        <div
          className="w-100 text-left paddingComponentLeft"
          style={{
            position: "sticky",
            top: 0,
            left: 0, // Stick the first column to the left
            zIndex: 1, // Ensure it's above the second column
          }}
        >
          <span style={{ color: "#53F60F" }}>Mengapa memilih kami</span>
        </div>
        <div
          className="d-flex flex-column w-100 paddingComponentLeft"
          style={{
            position: "sticky",
            top: 0,
            left: 0, // Stick the first column to the left
            zIndex: 1, // Ensure it's above the second column
          }}
        >
          <div>
            <span
              className="text-white text-title"
              style={{ fontWeight: "bold" }}
            >
              {listData?.[currIdx]?.title}
            </span>
          </div>
          <div className="d-flex flex-row">
            <div className="mt-1">
              <span className="text-white text-desc-title">
                {listData?.[currIdx]?.description}
              </span>
            </div>
            <div className="d-none d-md-flex flex-row align-items-end">
              <ChevronLeft
                className="cursor-pointer"
                color="white"
                onClick={() =>
                  currIdx === 0 ? undefined : setCurrIdx(currIdx - 1)
                }
                style={{ cursor: "pointer" }}
              />
              <ChevronRight
                className="cursor-pointer"
                color="white"
                onClick={() =>
                  currIdx === listData?.length - 1
                    ? undefined
                    : setCurrIdx(currIdx + 1)
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div
          className="d-flex d-md-none gap-4 mt-4 w-100"
          style={{ position: "relative" }}
        >
          <div
            className="d-flex d-md-none flex-row align-items-center justify-content-between w-100 h-100"
            style={{ position: "absolute", zIndex: 9999 }}
          >
            <div
              className={`${
                currIdx === 0 ? "bg-transparent" : "bg-black"
              } p-1 d-flex justify-content-center align-items-center`}
              style={{ borderRadius: "50%" }}
            >
              <ChevronLeft
                className="cursor-pointer"
                style={{
                  color: currIdx === 0 ? "transparent" : "#53F60F",
                  cursor: "pointer",
                }}
                onClick={() =>
                  currIdx === 0 ? undefined : setCurrIdx(currIdx - 1)
                }
              />
            </div>
            <div
              className={`${
                currIdx === listData?.length - 1 ? "bg-transparent" : "bg-black"
              } p-1 d-flex justify-content-center align-items-center`}
              style={{ borderRadius: "50%" }}
            >
              <ChevronRight
                className="cursor-pointer"
                style={{
                  color:
                    currIdx === listData?.length - 1
                      ? "transparent"
                      : "#53F60F",
                  cursor: "pointer",
                }}
                onClick={() =>
                  currIdx === listData?.length - 1
                    ? undefined
                    : setCurrIdx(currIdx + 1)
                }
              />
            </div>
          </div>
          <div className="d-flex w-100">
            <img
              src={listData?.[currIdx]?.photo}
              className="d-flex cover w-100 h-100"
              alt={`image-loc-${currIdx}`}
            />
          </div>
        </div>
        <div
          className="d-md-flex d-none gap-4"
          style={{ marginTop: 32, overflowX: "scroll" }}
        >
          {listData.map((e, i) => (
            <div key={i} className="d-flex" style={{ height: 360 }}>
              <img
                src={e?.photo}
                className="d-flex"
                alt={`image-loc-${e?.photo}`}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column width-location gap-2">
        <div
          className="d-flex w-full flex-column gap-3"
          style={{ height: 459 }}
        >
          <div className="d-flex d-md-none flex-column text-white justify-content-start text-left mt-4">
            <div className="d-flex justify-content-start align-items-center">
              <span style={{ fontSize: 20 }}>LOCATION</span>
            </div>
            <div>
              <span style={{ fontSize: 12, color: "#999999" }}>
                Ngebel, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah
                Istimewa Yogyakarta 55184
              </span>
            </div>
          </div>
          <div
            className="d-flex "
            style={{
              zIndex: 0,
              height: 459,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="d-flex justify-content-end"
              style={{ zIndex: 100, position: "absolute", top: 0, right: 0 }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#53F60F",
                  width: 40,
                  height: 40,
                  borderBottomLeftRadius: 20,
                }}
              >
                <MapPin style={{ transform: "rotate(315deg)" }} />
              </div>
            </div>
            <div className="d-flex h-full" style={{ borderTopRightRadius: 40 }}>
              <img
                src={GymIc}
                className="d-flex img-fluid"
                alt="gym-building"
              />
            </div>
          </div>
        </div>
        <div className="d-md-flex d-none flex-row text-white gap-2">
          <div
            className="d-flex justify-content-center align-items-center  p-2"
            style={{ width: "30%" }}
          >
            <span className="text-center" style={{ fontSize: 20 }}>
              LOCATION
            </span>
          </div>
          <div style={{ width: "70%" }}>
            <span style={{ fontSize: 12, color: "#999999" }}>
              Ngebel, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah
              Istimewa Yogyakarta 55184
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
