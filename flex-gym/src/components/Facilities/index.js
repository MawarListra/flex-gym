import React from "react";
import CardioIc from "../../assets/woman running.png";
import FreeWeightIc from "../../assets/sporty girl workout.png";
import YogaIc from "../../assets/woman in yoga pose.png";
import BoxingIc from "../../assets/Workout.png";

const Facilities = () => {
  const listData = [
    {
      id: "cardio",
      icon: CardioIc,
      title: "CARDIO AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "free-weight",
      icon: FreeWeightIc,
      title: "FREE WEIGHT",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "yoga",
      icon: YogaIc,
      title: "YOGA AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
    {
      id: "boxing",
      icon: BoxingIc,
      title: "BOXING AREA",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id blandit risus porttitor.",
    },
  ];
  console.log("cek listdata", listData);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        paddingLeft: 52,
        paddingRight: 52,
      }}
    >
      <div>
        <span style={{ color: "#53F60F" }}>Fasilitas Kami</span>
      </div>
      <div>
        <span
          className="text-white"
          style={{ fontSize: 32, fontWeight: "bold" }}
        >
          Fasilitas di Flex Gym and Cafe
        </span>
      </div>
      <div
        style={{
          paddingLeft: 96,
          paddingRight: 96,
        }}
      >
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
        className="d-flex flex-row justify-content-between h-auto mt-4"
        style={{ gap: 25 }}
      >
        {listData.map((item, i) => (
          <div
            key={item?.id}
            className="d-flex flex-column justify-content-center p-4"
            style={{
              backgroundColor: "#18181C",
              width: "25%",
              borderRadius: 10,
              height: 288,
            }}
          >
            <div className="d-flex justify-content-center">
              <img
                style={{ width: 40, height: 73 }}
                src={item?.icon}
                alt={`icon-facilities + ${i}`}
              />
            </div>
            <span
              className="text-white"
              style={{ fontSize: 24, fontWeight: "bold" }}
            >
              {item?.title}
            </span>
            <span style={{ color: "#999999" }}>{item?.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
