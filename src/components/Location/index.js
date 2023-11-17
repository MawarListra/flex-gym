import React, { useState } from "react";
import { Button } from "reactstrap";
import { ChevronRight, ChevronLeft } from "react-feather";
import GymIc from "../../assets/gym.png";
import Image1 from "../../assets/image1.png";
import { MapPin } from "react-feather";
import GymImage1 from "../../assets/gymImage/unnamed1.jpeg";
import GymImage2 from "../../assets/gymImage/unnamed2.jpeg";
import GymImage3 from "../../assets/gymImage/unnamed3.jpeg";
import GymImage4 from "../../assets/gymImage/cafe1.jpeg";
import GymImage5 from "../../assets/gymImage/cafe2.jpeg";
import GymImage6 from "../../assets/gymImage/cafe3.jpeg";
import GymImage7 from "../../assets/gymImage/cardio1.jpeg";
import GymImage8 from "../../assets/gymImage/cardio2.jpeg";
import GymImage9 from "../../assets/gymImage/unnamed7.jpeg";
import GymImage10 from "../../assets/gymImage/unnamed4.jpeg";
import GymImage11 from "../../assets/gymImage/unnamed5.jpeg";

const Location = ({ id }) => {
  const [currIdx, setCurrIdx] = useState(0);
  const listData = [
    {
      title: "Tempat Luas & Nyaman",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: Image1,
    },
    {
      title: "Alat Lengkap & Berkualitas ",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: GymIc,
    },
    {
      title: "Cafe dengan Berbagai Menu",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
      photo: GymIc,
    },
  ];

  const listImage = [
    GymImage1,
    GymImage2,
    GymImage3,
    GymImage4,
    GymImage5,
    GymImage6,
    GymImage7,
    GymImage8,
    GymImage9,
    GymImage10,
    GymImage11,
    GymImage6,
    GymImage7,
    GymImage2,
    GymImage3,
  ];

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
        className="d-flex flex-column align-items-center justify-content-end width-why-us"
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
          <span className="text-title-green">Mengapa memilih kami</span>
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
          {/* <div>
            <span
              className="text-white text-title"
              style={{ fontWeight: "bold" }}
            >
              {listData?.[currIdx]?.title}
            </span>
          </div> */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            {/* <div className="mt-1">
              <span className="text-desc-title">
                {listData?.[currIdx]?.description}
              </span>
            </div> */}
            <span
              className="text-white text-title"
              style={{ fontWeight: "bold" }}
            >
              {listData?.[currIdx]?.title}
            </span>
            <div className="d-flex d-md-none w-100 flex-row align-items-end justify-content-end">
              <ChevronLeft
                className="cursor-pointer"
                color="white"
                onClick={() => {
                  if (currIdx === 0) {
                    return undefined;
                  } else {
                    return setCurrIdx(currIdx - 1);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
              <ChevronRight
                className="cursor-pointer"
                color="white"
                onClick={() => {
                  if (currIdx === listData?.length - 1) {
                    return undefined;
                  } else {
                    return setCurrIdx(currIdx + 1);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="d-md-flex d-none w-fit flex-row align-items-end justify-content-end">
              <ChevronLeft
                className="cursor-pointer"
                color="white"
                onClick={() => {
                  if (currIdx === 0) {
                    return undefined;
                  } else {
                    return setCurrIdx(currIdx - 1);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
              <ChevronRight
                className="cursor-pointer"
                color="white"
                onClick={() => {
                  if (currIdx === listData?.length - 1) {
                    return undefined;
                  } else {
                    return setCurrIdx(currIdx + 1);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex d-md-none gap-4 mt-4 w-100 scrolling-container">
          {listImage.map((e, idxE) => {
            return (
              <div
                className="d-flex"
                style={{ height: 192, width: "auto", maxWidth: "100%" }}
                key={idxE}
              >
                <img src={e} className="d-flex" alt={`image-loc-${idxE}`} />
              </div>
            );
          })}
        </div>
        <div
          className="d-md-flex d-none gap-4 scrolling-container w-100"
          style={{ marginTop: 32 }}
        >
          {listImage.map((e, i) => (
            <div
              key={i}
              className="d-flex w-auto"
              style={{ height: 360 }}
              id={`imageScroll-` + i}
            >
              <img
                src={e}
                className="d-flex"
                alt={`image-loc-${e}`}
                style={{ height: "100%" }}
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
              <span
                style={{
                  color: "#FFFF",
                  fontFamily: "Nunito Sans",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: 0.3,
                }}
              >
                LOCATION
              </span>
            </div>
            <div>
              <span
                style={{
                  color: "#999",
                  fontFamily: "Nunito Sans",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: 0.5,
                }}
              >
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
                <MapPin
                  style={{ transform: "rotate(315deg)", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/FLEX+GYM+AND+CAFE/@-7.8159361,110.3139033,17z/data=!4m14!1m7!3m6!1s0x2e7af964d4c8c8dd:0x5a705b858219d429!2sFLEX+GYM+AND+CAFE!8m2!3d-7.8159414!4d110.3164782!16s%2Fg%2F11v6swk33s!3m5!1s0x2e7af964d4c8c8dd:0x5a705b858219d429!8m2!3d-7.8159414!4d110.3164782!16s%2Fg%2F11v6swk33s?entry=ttu",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
            <div
              className="d-flex box-image-location"
              style={{ position: "relative" }}
            >
              <img
                className="box-radius-image-location"
                style={{
                  width: "100%" /* Make the image fill the width of the div */,
                  height:
                    "100%" /* Make the image fill the height of the div */,
                  objectFit:
                    "cover" /* This property ensures the image covers the area of the div without stretching */,
                  position:
                    "absolute" /* Position the image absolutely within the div */,
                  top: 0 /* Align the image to the top of the div */,
                  left: 0 /* Align the image to the left of the div */,
                }}
                src={GymImage6}
                // className="d-flex cover"
                alt="gym-building"
              />
            </div>
          </div>
        </div>
        <div className="d-md-flex d-none flex-row text-white gap-4">
          <div
            className="d-flex justify-content-center align-items-center  p-2"
            style={{ width: "30%" }}
          >
            <span
              className="text-center"
              style={{
                color: "#FFFF",
                fontFamily: "Nunito Sans",
                fontSize: 28,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: 0.3,
              }}
            >
              LOCATION
            </span>
          </div>
          <div style={{ width: "70%" }}>
            <span
              style={{
                color: "#999",
                fontFamily: "Nunito Sans",
                fontSize: 18,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: 0.5,
              }}
            >
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
