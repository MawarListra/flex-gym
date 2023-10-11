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
        <span className="text-title-green">Fasilitas Kami</span>
      </div>
      <div>
        <span className="text-white text-title" style={{ fontWeight: "bold" }}>
          Fasilitas di Flex Gym and Cafe
        </span>
      </div>
      <div className="box-desc-title">
        <span className="text-desc-title">
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus gravida
          egestas amet id pretium. Ultrices mauris sodales elit mi lobortis id
          blandit risus porttitor.
        </span>
      </div>
      <div className="box-facilities-card mt-4">
        {listData.map((item, i) => (
          <div key={item?.id} className="box-facilities-card-categories">
            <div className="d-flex justify-content-center w-100">
              <img
                className="d-flex w-auto h-auto"
                src={item?.icon}
                alt={`icon-facilities + ${i}`}
              />
            </div>
            <span
              className="text-white text-title-card"
              style={{ fontWeight: "bold" }}
            >
              {item?.title}
            </span>
            <span className="text-desc-title-categories">
              {item?.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
