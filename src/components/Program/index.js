import React from "react";
import ProgramIc from "../../assets/program.png";

const Program = ({ id }) => {
  const listData = [
    {
      id: "cardio",
      icon: ProgramIc,
      title: "CARDIO AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "free-weight",
      icon: ProgramIc,
      title: "FREE WEIGHT",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "yoga",
      icon: ProgramIc,
      title: "YOGA AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "boxing",
      icon: ProgramIc,
      title: "BOXING AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "boxing",
      icon: ProgramIc,
      title: "BOXING AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "yoga",
      icon: ProgramIc,
      title: "YOGA AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
  ];
  console.log("cek listdata", listData);
  return (
    <div
      className="d-flex flex-column paddingComponentRight paddingComponentLeft"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
      }}
      id={id}
    >
      <div>
        <span className="text-title-green">Program terbaik dari kami</span>
      </div>
      <div>
        <span className="text-white text-title" style={{ fontWeight: "bold" }}>
          Program terbaik dari kami
        </span>
      </div>
      <div className="box-desc-title">
        <span className="text-desc-title">
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div
        className="d-flex flex-row justify-content-between h-auto mt-4 "
        style={{
          overflow: "scroll",
          gap: 10,
        }}
      >
        {listData.map((item, i) => (
          <div
            key={item?.id}
            className="d-flex flex-column justify-content-center"
            style={{
              width: 278,
              borderRadius: 10,
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{ width: 278, height: 375, flexShrink: 0 }}
            >
              <img
                className="d-none d-md-flex"
                style={{ width: 278, height: 375 }}
                src={item?.icon}
                alt={`icon-facilities + ${i}`}
              />
              <img
                className="d-flex d-md-none"
                src={item?.icon}
                alt={`icon-facilities + ${i}`}
              />
            </div>
            <span
              className="text-white mt-4 d-none d-md-flex"
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "#FFFF",
                fontFamily: "Nunito Sans",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterspacing: 0.3,
              }}
            >
              {item?.title}
            </span>
            <span
              className="mt-2 text-desc-title d-none d-md-flex"
              style={{
                color: "#999",
                fontFeatureSettings: "clig off liga off",
                fontFamily: "Nunito Sans",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: 0.5,
              }}
            >
              {item?.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
