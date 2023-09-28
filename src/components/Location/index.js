import React, { useState } from "react";
import { Button } from "reactstrap";
import { ChevronRight, ChevronLeft } from "react-feather";
import GymIc from "../../assets/gym.png";
import Image1 from "../../assets/image1.png";

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
  ];
  const [currIdx, setCurrIdx] = useState(0);
  console.log("cek here", listData);
  return (
    <div
      className="d-flex flex-row"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        paddingRight: 52,
        gap: 10,
      }}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-between"
        style={{
          width: "60%",
          overflowX: "auto",
          maxWidth: "100%",
        }}
      >
        <div
          className="w-100 text-left"
          style={{
            paddingLeft: 52,
            position: "sticky",
            top: 0,
            left: 0, // Stick the first column to the left
            zIndex: 1, // Ensure it's above the second column
          }}
        >
          <span style={{ color: "#53F60F" }}>Mengapa memilih kami</span>
        </div>
        <div
          className="d-flex flex-column w-100"
          style={{
            paddingLeft: 52,
            position: "sticky",
            top: 0,
            left: 0, // Stick the first column to the left
            zIndex: 1, // Ensure it's above the second column
          }}
        >
          <div>
            <span
              className="text-white"
              style={{ fontSize: 32, fontWeight: "bold" }}
            >
              {listData?.[currIdx]?.title}
            </span>
          </div>
          <div className="d-flex flex-row">
            <div className="mt-1">
              <span className="text-white" style={{ fontSize: 14 }}>
                {listData?.[currIdx]?.description}
              </span>
            </div>
            <div className="d-flex flex-row align-items-end">
              <ChevronLeft
                className="cursor-pointer"
                color="white"
                onClick={() =>
                  currIdx === 0 ? undefined : setCurrIdx(currIdx - 1)
                }
              />
              <ChevronRight
                className="cursor-pointer"
                color="white"
                onClick={() =>
                  currIdx === listData?.length - 1
                    ? undefined
                    : setCurrIdx(currIdx + 1)
                }
              />
            </div>
          </div>
        </div>
        <div
          className="d-flex gap-4"
          style={{ marginTop: 32, overflowX: "scroll" }}
        >
          {listData.map((e, i) => (
            <div key={i} className="d-flex" style={{ height: 360 }}>
              <img
                src={e?.photo}
                className="d-flex"
                alt={`image-loc-${e?.photo}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column" style={{ width: "40%" }}>
        <div className="d-flex w-full" style={{ height: 459 }}>
          <img src={GymIc} className="d-flex img-fluid" alt="gym-building" />
        </div>
        <div className="d-flex flex-row text-white mt-4 gap-2">
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
