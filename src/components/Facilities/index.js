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
      className="d-flex flex-column justify-content-center align-items-center text-center paddingComponentRight paddingComponentLeft"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      <div>
        <span style={{ color: "#53F60F" }}>Fasilitas Kami</span>
      </div>
      <div>
        <span className="text-white text-title" style={{ fontWeight: "bold" }}>
          Fasilitas di Flex Gym and Cafe
        </span>
      </div>
      <div className="paddingComponentLeft paddingComponentRight">
        <span
          className="text-desc-title"
          style={{
            color: "#999999",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div
        className="d-md-flex d-none flex-row justify-content-between h-auto mt-4"
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
              className="text-white text-title"
              style={{ fontWeight: "bold" }}
            >
              {item?.title}
            </span>
            <span className="text-desc-title" style={{ color: "#999999" }}>
              {item?.description}
            </span>
          </div>
        ))}
      </div>
      <div
        className="d-flex d-md-none flex-row justify-content-between mt-4 overflow-scroll"
        style={{ width: "100%", gap: 10 }}
      >
        {listData.map((item, i) => (
          <div
            key={item?.id}
            className="d-flex flex-column justify-content-center p-4 h-auto"
            style={{
              backgroundColor: "#18181C",
              minWidth: "100%",
              borderRadius: 10,
            }}
          >
            <div className="d-flex justify-content-center">
              <img src={item?.icon} alt={`icon-facilities + ${i}`} />
            </div>
            <span
              className="text-white text-title"
              style={{ fontWeight: "bold" }}
            >
              {item?.title}
            </span>
            <span className="text-desc-title" style={{ color: "#999999" }}>
              {item?.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
