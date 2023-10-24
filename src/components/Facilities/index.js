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
      title: "Gym Area",
      description:
        "Memiliki tempat luas bertemakan industrial dan pemandangan yang asri membuat latihan Anda menjadi lebih nyaman",
    },
    {
      id: "free-weight",
      icon: FreeWeightIc,
      title: "Cardio Area",
      description:
        "Dengan berbagai pilihan alat cardio ditemani pemandangan yang asri membuat cardio anda menjadi tidak bosan",
    },
    {
      id: "yoga",
      icon: YogaIc,
      title: "Cafe Area",
      description: "Tempat bercengkrama dan berbagi tawa bersama teman teman",
    },
    {
      id: "boxing",
      icon: BoxingIc,
      title: "Multipurpose Area",
      description:
        " Ruang berbagai program kelas olahraga dilengkapi fasilitas AC",
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
          Kami memiliki beragam Fasilitas yang dapat digunakan dan tentunya kami
          akan selalu memberikan kenyamanan
        </span>
      </div>
      <div className="box-facilities-card mt-4">
        {listData.map((item, i) => (
          <div key={item?.id} className="box-facilities-card-categories">
            <div className="d-flex flex-column justify-content-between gap-4">
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
            </div>
            <div className="d-flex">
              <span className="text-desc-title-categories">
                {item?.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
