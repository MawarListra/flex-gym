import React from "react";
import ProgramIc from "../../assets/program.png";

const Program = () => {
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
  ];
  console.log("cek listdata", listData);
  return (
    <div
      className="d-flex flex-column"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        paddingLeft: 52,
        paddingRight: 52,
      }}
    >
      <div>
        <span style={{ color: "#53F60F" }}>Program terbaik dari kami</span>
      </div>
      <div>
        <span
          className="text-white"
          style={{ fontSize: 32, fontWeight: "bold" }}
        >
          Fasilitas di Flex Gym and Cafe
        </span>
      </div>
      <div className="w-50">
        <span
          style={{
            fontSize: 18,
            color: "#999999",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div
        className="d-flex flex-row justify-content-between h-auto mt-4 "
        style={{
          overflow: "scroll",
          gap: 20,
        }}
      >
        {listData.map((item, i) => (
          <div
            key={item?.id}
            className="d-flex flex-column justify-content-center p-4"
            style={{
              backgroundColor: "#18181C",
              width: "auto",
              borderRadius: 10,
            }}
          >
            <div className="d-flex justify-content-center">
              <img
                style={{ width: 278, height: 375 }}
                src={item?.icon}
                alt={`icon-facilities + ${i}`}
              />
            </div>
            <span
              className="text-white mt-4"
              style={{ fontSize: 24, fontWeight: "bold" }}
            >
              {item?.title}
            </span>
            <span className="mt-2" style={{ color: "#999999" }}>
              {item?.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
