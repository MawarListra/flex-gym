import React from "react";
import CardioIc from "../../assets/woman running.png";
import BoxingIc from "../../assets/Workout.png";
import GymArea from "../../assets/gym-area.png";
import CafeArea from "../../assets/cafe-area.png";

const Facilities = () => {
  const listData = [
    {
      id: "gym-area",
      icon: GymArea,
      title: "Gym Area",
      description:
        "Memiliki tempat luas bertemakan industrial dan pemandangan yang asri membuat latihan Anda menjadi lebih nyaman",
    },
    {
      id: "cardio",
      icon: CardioIc,
      title: "Cardio Area",
      description:
        "Dengan berbagai pilihan alat cardio ditemani pemandangan yang asri membuat cardio anda menjadi tidak bosan",
    },
    {
      id: "cafe-area",
      icon: CafeArea,
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
            <div
              className="d-flex flex-column justify-content-between"
              style={{ height: "30%" }}
            >
              <div
                className="d-flex justify-content-center w-100"
                style={{ maxHeight: 90, maxWidth: 90 }}
              >
                <img
                  className="d-flex w-auto h-auto"
                  src={item?.icon}
                  alt={`icon-facilities + ${i}`}
                />
              </div>
            </div>
            <div className="mt-4" style={{ height: "20%" }}>
              <span
                className="text-white text-title-card"
                style={{
                  fontWeight: 700,
                  fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  letterSpacing: "0.3px",
                }}
              >
                {item?.title}
              </span>
            </div>
            <div className="d-flex" style={{ height: "50%" }}>
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
