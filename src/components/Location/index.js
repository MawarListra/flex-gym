import React, { useState } from "react";
import { Button } from "reactstrap";
import { ChevronRight, ChevronLeft } from "react-feather";
import GymIc from "../../assets/gym.png";
import Image1 from "../../assets/image1.png";
import { MapPin } from "react-feather";

const Location = ({ id }) => {
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
  // const scrollToDiv = (myDiv) => {
  //   console.log("cek myDiv", myDiv);
  //   // Replace 'myDiv' with the ID of the div you want to scroll to
  //   scroll.scrollTo(myDiv, {
  //     duration: 800, // Scroll duration in milliseconds
  //     smooth: "easeInOutQuart", // Scroll animation easing function
  //   });
  // };
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
          <div className="d-flex flex-row justify-content-between align-items-center">
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
            <div className="d-none d-md-flex flex-row align-items-end">
              <ChevronLeft
                className="cursor-pointer"
                color="white"
                onClick={() => {
                  if (currIdx === 0) {
                    return undefined;
                  } else {
                    console.log("cek here");
                    const targetIndex = currIdx - 1;
                    const item = document.getElementById(
                      "imageScroll-" + targetIndex
                    );
                    item.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                    });
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
                    const targetIndex = currIdx + 1;
                    const item = document.getElementById(
                      "imageScroll-" + targetIndex
                    );
                    item.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                    });
                    return setCurrIdx(currIdx + 1);
                  }
                }}
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
          <div className="d-flex w-100" style={{ height: 192 }}>
            <img
              src={listData?.[currIdx]?.photo}
              className="d-flex img-fluid w-100 h-100"
              alt={`image-loc-${currIdx}`}
            />
          </div>
        </div>
        <div
          className="d-md-flex d-none gap-4 container-image-scroll w-100"
          style={{ marginTop: 32 }}
        >
          {listData.map((e, i) => (
            <div
              key={i}
              className="d-flex imageScroll"
              style={{ height: 360, width: "100%" }}
              id={`imageScroll-` + i}
            >
              <img
                src={e?.photo}
                className="d-flex cover"
                alt={`image-loc-${e?.photo}`}
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
                src={GymIc}
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
